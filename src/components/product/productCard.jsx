import React, { useEffect, useState } from "react";
import { AddCircle, Favorite } from "@mui/icons-material";
import {
  useTheme,
  Box,
  IconButton,
  Rating,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";
import CategorizeComponent from "./categorizeComponent";
import ProductDetails from "./productDetails";

const ProductCard = (props) => {
  const [productDetails, setProductDetails] = useState({});
  const [isProductDetails, setIsProductDetails] = useState(false);

  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  const switchIsProductDetails = () => {
    setIsProductDetails((prev) => !prev);
  };

  useEffect(() => {
    if (props.product.type === "cake") {
      setProductDetails((prev) => ({ ...prev, weight: 1 }));
    } else if (props.product.type === "pastry") {
      setProductDetails((prev) => ({ ...prev, quantity: 1 }));
    }
    if (props.product.variants) {
      props.product.variants.forEach((variant) => {
        setProductDetails((prev) => ({
          ...prev,
          [variant.title]: variant.options[0],
        }));
      });
    }
  }, [props.product]);

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
        product={props.product}
        productDetails={productDetails}
        setProductDetails={setProductDetails}
        switchIsProductDetails={switchIsProductDetails}
        isProductDetails={isProductDetails}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
      >
        <Box position={"relative"} width={"100%"} height={"50%"}>
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
          <Box
            position={"absolute"}
            top={0}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <IconButton>
              <Favorite sx={{ color: "white" }} />
            </IconButton>
            <IconButton onClick={switchIsProductDetails}>
              <AddCircle sx={{ color: "white" }} />
            </IconButton>
          </Box>
          {props.product.offer && (
            <Box
              position={"absolute"}
              bottom={0}
              width={"100%"}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Typography
                width={"30px"}
                height={"30px"}
                bgcolor={"primary.main"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"12px"}
                color={"white"}
                borderRadius={"0px 0px 20px 0px"}
              >
                -{props.product.offer}%
              </Typography>
            </Box>
          )}
        </Box>
        <Link
          href={`/product?p=${props.id + 1}`}
          key={`product-${props.id}`}
          width={"100%"}
          height={"50%"}
          sx={{
            display: "inline-block",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Box
            width={"100%"}
            height={"100%"}
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
                <Typography fontSize={"0.7rem"} color={"text.secondary"}>
                  {props.product.flavours}
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Typography
                    fontSize={"clamp(1rem, 2vw, 1.3rem)"}
                    fontWeight={"bold"}
                  >
                    {props.product.name}
                  </Typography>
                  {isNotPhone && (
                    <Box display={"flex"} gap={"5px"}>
                      {props.product.categories.map((category, index) => (
                        <CategorizeComponent category={category} id={index} />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
              <Rating
                value={props.product.rating.score}
                sx={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                readOnly
              />
              <Typography fontSize={"17px"}>
                {props.product.unitPrice.currency}{" "}
                {props.product.unitPrice.amount}
                {" /"}
                {props.product.unitPrice.unit}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductCard;
