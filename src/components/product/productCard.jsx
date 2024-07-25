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
import offers from "../../../lib/data/offers.json";
import CustomizeProduct from "./customizeProduct";
import ProductWorker from "../../scripts/productWorker";
import EditModal from "../layout/modals/edit";
import { convertHex } from "../../theme";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user";

const ProductCard = ({ product, user, currency, setConfirmationModal }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const productWorker = new ProductWorker();
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [customizeProduct, setCustomizeProduct] = useState({
    on: false,
    title: (isInCart || isLiked) && "Edit your prefrences",
  });

  useEffect(() => {
    if (user.isLoggedIn) {
      setIsLiked(Boolean(user.data.favourites[product.id]));
      setIsInCart(Boolean(user.data.cart.items[product.id]));
    } else {
      setIsLiked(false);
      setIsInCart(false);
    }
  }, [user, product]);

  const handleFavourite = () => {
    if (isLiked) {
      handleDelete();
    } else {
      changeCustomizeProduct("favourites", "ADD");
    }
  };

  const handleDelete = (path = "favourites") => {
    setConfirmationModal({
      on: true,
      message: `Are you sure you want to remove '${product.name}' from your ${path}`,
      onCancel: () => {},
      onConfirm: () =>
        dispatch(
          updateUser({
            path,
            action: "DELETE",
            data: { productId: product.id },
          })
        ),
    });
  };

  const changeCustomizeProduct = (path, action) => {
    if (user.isLoggedIn) {
      setCustomizeProduct((prev) => ({ ...prev, on: true, path, action }));
    } else {
      navigate(`/auth/login?tab=${window.location.pathname}`);
    }
  };

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
        isEdit={customizeProduct.on}
        width={"min(700px, 90%)"}
        handleClose={() => setCustomizeProduct({ on: false })}
      >
        <CustomizeProduct
          {...{
            product,
            user,
            currency,
            customizeProduct,
            setCustomizeProduct,
          }}
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
              <IconButton onClick={handleFavourite}>
                <Favorite sx={{ color: isLiked ? "primary.main" : "white" }} />
              </IconButton>
            </Tooltip>
            {isInCart ? (
              <Box display={"flex"} gap={"2px"}>
                <Tooltip title="edit">
                  <IconButton
                    sx={{ transition: "0.2s" }}
                    onClick={() => changeCustomizeProduct("cart", "EDIT")}
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
                <IconButton
                  onClick={() => changeCustomizeProduct("cart", "ADD")}
                  sx={{ color: "white" }}
                >
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
                <Typography
                  fontSize={"0.6rem"}
                  color={theme.palette.status.product[product.state]}
                >
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
