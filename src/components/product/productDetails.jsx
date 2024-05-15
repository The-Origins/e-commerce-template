import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Close, Done } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProductWorker from "../../scripts/productWorker";

const ProductDetails = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const product = props.product;
  const [productDetails, setProductDetails] = useState({});
  const handleProductDetailsChange = ({ target }) => {
    setProductDetails((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const confirm = () => {
    props.switchIsProductDetails();
  };

  useEffect(() => {
    const productWorker = new ProductWorker(props.product);
    setProductDetails(
      productWorker.getProductDetails(
        props.user.cart.items,
        props.user.favourites
      )
    );
  }, [props.product, props.user]);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={props.isProductDetails}>
      <Box
        width={isNotPhone ? "50%" : "80%"}
        minHeight={"400px"}
        maxHeight={"80%"}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position={"relative"}
        gap={isNotPhone ? undefined : "15px"}
        color="black"
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-in-out`,
          transform: `scale(${props.isProductDetails ? 1 : 0})`,
        }}
      >
        <Box
          position={"absolute"}
          top={0}
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <IconButton
            onClick={props.switchIsProductDetails}
            sx={{ m: "15px", color: "black" }}
          >
            <Close />
          </IconButton>
        </Box>
        <Typography
          m={isNotPhone ? "20px 0px" : "50px 0px 20px 0px"}
          textAlign={"center"}
          fontSize={"clamp(1rem, 6vw, 2rem)"}
          fontWeight={"bold"}
        >
          {props.title || "Confirm a few details first"}
        </Typography>
        <Box
          width={"80%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          mb={"20px"}
        >
          <Typography>Quantity:</Typography>
          <TextField
            type="number"
            name={"amount"}
            value={productDetails.quantity}
            onChange={handleProductDetailsChange}
          />
        </Box>
        {product.variants &&
          product.variants.map((variant, index) => {
            return (
              <Box display={"flex"} flexDirection={"column"} width={"80%"}>
                <Typography>
                  {variant.title.charAt(0).toUpperCase() +
                    variant.title.substring(1, variant.title.length) +
                    ":"}
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby={`product-${product.id}-variant-${index}-options`}
                      name={variant.title}
                      value={productDetails[variant.title]}
                      onChange={handleProductDetailsChange}
                    >
                      {variant.options.map((option) => (
                        <FormControlLabel
                          value={option.title}
                          control={<Radio />}
                          label={
                            option.title.charAt(0).toUpperCase() +
                            option.title.substring(1)
                          }
                          checked={
                            productDetails[variant.title] === option.title
                          }
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            );
          })}
        <Box
          margin={"30px 0px"}
          width={"80%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            onClick={props.switchIsProductDetails}
            disableElevation
            variant="contained"
          >
            Back
          </Button>
          <Button
            onClick={confirm}
            disableElevation
            variant="contained"
            endIcon={<Done />}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default ProductDetails;
