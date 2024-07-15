import React, { useEffect, useState } from "react";
import { AddCircle, Edit, Favorite, ShoppingCart } from "@mui/icons-material";
import {
  useTheme,
  Box,
  IconButton,
  Rating,
  Typography,
  Link,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import ProductDetails from "./productDetails";
import offers from "../../../lib/data/offers.json";
import { useSelector } from "react-redux";
import ProductWorker from "../../scripts/productWorker";
import EditModal from "../layout/editModal";
import { convertHex } from "../../theme";
import { navigate } from "gatsby";

const ProductCard = ({ product, user, currency }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const productWorker = new ProductWorker();
  const [isProductDetails, setIsProductDetails] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const addToCart = () => {
    if (Object.keys(user).length) {
      setIsProductDetails(true);
    } else {
      login();
    }
  };

  const favourite = () => {
    if (Object.keys(user).length) {
      // favourite logic
    } else {
      login();
    }
  };

  const login = () => {
    navigate("/auth/login");
  };

  useEffect(() => {
    if (Object.keys(user).length) {
      setIsLiked(Boolean(user.favourites[product.id]));
      setIsInCart(Boolean(user.cart.items[product.id]));
    } else {
      setIsLiked(false);
      setIsInCart(false);
    }
  }, [user, product]);

  return (
    <Box
      margin={"10px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      overflow={"hidden"}
      borderRadius={"20px"}
      width={"clamp(80px, 42vw, 250px)"}
      height={"clamp(300px, 50vw, 350px)"}
      sx={{
        display: "inline-block",
        transition: "0.3s",
        ":hover": {
          boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
        },
      }}
    >
      <EditModal
        isEdit={isProductDetails}
        width={"min(700px, 90%)"}
        handleClose={() => setIsProductDetails(false)}
      >
        <ProductDetails
          title={isInCart || isLiked ? "Change your prefrences" : undefined}
          {...{ product, user, currency }}
          setIsProductDetails={setIsProductDetails}
        />
      </EditModal>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box
            top={0}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Tooltip title={isLiked ? "Favourited" : "Add to favourites"}>
              <IconButton onClick={favourite}>
                <Favorite sx={{ color: isLiked ? "primary.main" : "white" }} />
              </IconButton>
            </Tooltip>
            {isInCart ? (
              <Box display={"flex"} gap={"2px"}>
                <Tooltip title="edit">
                  <IconButton
                    sx={{ transition: "0.2s" }}
                    onClick={() => setIsProductDetails(true)}
                  >
                    <Edit sx={{ color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="go to cart">
                  <Link href="/cart">
                    <IconButton>
                      <ShoppingCart
                        sx={{
                          color: "white",
                        }}
                      />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Box>
            ) : (
              <Tooltip title={"add to cart"}>
                <IconButton onClick={addToCart} sx={{ color: "white" }}>
                  <AddCircle />
                </IconButton>
              </Tooltip>
            )}
          </Box>
          <Link
            href={`/product?p=${product.id}`}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box width={"100%"} height={"50%"}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${product.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
            }}
          />
        </Box>
        <Box
          width={"100%"}
          height={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            height={"90%"}
            width={"90%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"1px"}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography fontSize={"0.7rem"} color={"text.secondary"}>
                  {product.categories.join(", ")}
                </Typography>
                {Boolean(offers[product.id]) && isNotPhone && (
                  <Typography
                    padding={"2px 5px"}
                    bgcolor={`rgba(${convertHex(
                      theme.palette.primary.main
                    ).join(" ")} / 0.2)`}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"clamp(0.6rem, 1vw, 0.8rem)"}
                    color={"primary.main"}
                  >
                    -{offers[product.id]}%
                  </Typography>
                )}
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"clamp(1rem, 2vw, 1.2rem)"}
                  fontWeight={"bold"}
                >
                  {product.name}
                </Typography>
                <Rating
                  value={product.rating.score}
                  sx={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                  readOnly
                />
                <Typography fontSize={"0.6rem"} color={"text.secondary"}>
                  {product.state}
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Typography fontSize={"1rem"}>
                {currency.symbol}{" "}
                {offers[product.id]
                  ? productWorker.getDiscount(
                      offers[product.id],
                      product.unitPrice.amount
                    )
                  : product.unitPrice.amount}
              </Typography>
              {offers[product.id] && (
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "text.secondary",
                    textDecoration: "line-through",
                  }}
                >
                  {currency.symbol} {product.unitPrice.amount}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
