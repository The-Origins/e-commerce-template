import React, { useEffect, useState } from "react";
import {
  AddCircle,
  CheckCircle,
  CheckCircleTwoTone,
  Favorite,
} from "@mui/icons-material";
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
import data from "../../lib/data";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "../../state/store";
import ProductWorker from "../../scripts/productWorker";

const ProductCard = (props) => {
  const productWorker = new ProductWorker();
  const [offers, setOffers] = useState({});
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isProductDetails, setIsProductDetails] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  const switchIsProductDetails = () => {
    setIsProductDetails((prev) => !prev);
  };

  const addToCart = () => {
    if (Object.keys(user).length) {
      switchIsProductDetails();
    } else {
      dispatch(setIsAuth(true));
    }
  };

  useEffect(() => {
    setOffers(data.offers);
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      setIsLiked(Boolean(props.user.favourites[props.product.id]));
      setIsInCart(Boolean(props.user.cart.items[props.product.id]));
    } else {
      setIsLiked(false);
      setIsInCart(false);
    }
  }, [props.user, props.product]);

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
      <ProductDetails
        title={isInCart || isLiked ? "Change your prefrences" : undefined}
        product={props.product}
        user={user}
        switchIsProductDetails={switchIsProductDetails}
        isProductDetails={isProductDetails}
      />
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
              <IconButton>
                <Favorite sx={{ color: isLiked ? "primary.main" : "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title={isInCart ? "added to cart" : "add to cart"}>
              <IconButton onClick={addToCart}>
                {isInCart ? (
                  <CheckCircle sx={{ color: "white" }} />
                ) : (
                  <AddCircle sx={{ color: "white" }} />
                )}
              </IconButton>
            </Tooltip>
          </Box>
          <Link
            href={`/product?p=${props.product.id}`}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box width={"100%"} height={"50%"}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${props.product.images[0]})`,
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
                  {props.product.categories.join(", ")}
                </Typography>
                {Boolean(offers[props.product.id]) && isNotPhone && (
                  <Typography
                    padding={"2px 5px"}
                    bgcolor={"rgba(255 38 129 / 0.2)"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"clamp(0.6rem, 1vw, 0.8rem)"}
                    color={"primary.main"}
                  >
                    -{offers[props.product.id]}%
                  </Typography>
                )}
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"clamp(1rem, 2vw, 1.2rem)"}
                  fontWeight={"bold"}
                >
                  {props.product.name}
                </Typography>
                <Rating
                  value={props.product.rating.score}
                  sx={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                  readOnly
                />
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Typography fontSize={"1rem"}>
                {productWorker.getCurrencySymbol(
                  props.product.unitPrice.currency
                )}{" "}
                {offers[props.product.id]
                  ? productWorker.getDiscount(
                      offers[props.product.id],
                      props.product.unitPrice.amount
                    )
                  : props.product.unitPrice.amount}
              </Typography>
              {offers[props.product.id] && (
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "text.secondary",
                    textDecoration: "line-through",
                  }}
                >
                  {productWorker.getCurrencySymbol(
                    props.product.unitPrice.currency
                  )}{" "}
                  {props.product.unitPrice.amount}
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
