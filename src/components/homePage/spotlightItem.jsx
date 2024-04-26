import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import data from "../../lib/data";
import ProductDetails from "../product/productDetails";
import { AddShoppingCart, CheckCircle, PropaneTank } from "@mui/icons-material";

const SpotlightItem = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [product, setProduct] = useState({});
  const [isProductDetails, setIsProductDetails] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (props.spotlight.type === "product") {
      setProduct(
        data.products.find(
          (product) => product.id === props.spotlight.productId
        )
      );
    }
  }, []);

  useEffect(() => {
    if (props.spotlight.type === "product") {
      setIsInCart(Boolean(props.user.cart.items[product.id]));
    }
  }, [props.user, product]);

  const switchIsProductDetails = () => {
    setIsProductDetails((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        height: "100%",
      }}
    >
      {props.spotlight.type === "product" && (
        <ProductDetails
          title={isInCart && "Change your prefrences"}
          product={product}
          user={props.user}
          switchIsProductDetails={switchIsProductDetails}
          isProductDetails={isProductDetails}
        />
      )}
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={isNotPhone ? "row" : "column-reverse"}
      >
        <Box
          width={isNotPhone ? "50%" : "100%"}
          height={isNotPhone ? "100%" : "50%"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            width={isNotPhone ? "80%" : "90%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={isNotPhone ? "20px" : "1px"}
            >
              <Typography
                variant="h3"
                fontSize={"clamp(1rem, 7vw, 2.5rem)"}
                fontWeight={"bold"}
              >
                {props.spotlight.title}
              </Typography>
              <Typography>{props.spotlight.description}</Typography>
              {props.spotlight.type === "product" &&
                Object.keys(product).length && (
                  <Typography fontSize={"1.4rem"}>
                    {product.unitPrice.currency} {product.unitPrice.amount}
                  </Typography>
                )}
            </Box>
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Link
                href={props.spotlight.action.path}
                sx={{
                  textDecoration: isNotPhone ? "none" : "underline",
                  fontSize: "clamp(0.2rem, 5vw, 0.9rem)",
                  height: "50px",
                  width: isNotPhone ? "200px" : undefined,
                  border: isNotPhone
                    ? `1px solid ${theme.palette.primary.main}`
                    : undefined,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  transition: "0.3s",
                  ":hover": {
                    color: "white",
                    bgcolor: "primary.main",
                    border: "none",
                  },
                }}
              >
                {props.spotlight.action.title}
              </Link>
              {props.spotlight.type === "product" && (
                <Button
                disableElevation
                color={isInCart ? "success" : "primary"}
                variant="contained"
                startIcon={
                  isInCart ? <CheckCircle /> : <AddShoppingCart />
                }
                onClick={switchIsProductDetails}
              >
                {isInCart ? "added to cart" : "add to cart"}
              </Button>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          width={isNotPhone ? "50%" : "100%"}
          height={isNotPhone ? "100%" : "50%"}
          sx={{
            backgroundImage: `url(${
              props.spotlight.type === "product" && Object.keys(product).length
                ? product.images[0]
                : props.spotlight.image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default SpotlightItem;
