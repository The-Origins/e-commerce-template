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

const ProductDetails = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const product = props.product;
  const handleProductDetailsChange = ({ target }) => {
    props.setProductDetails((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    let event = {};
    if (!props.productDetails.length) {
      if (props.product.type === "cake") {
        event.target = {
          name: "weight",
          value: 1,
        };
        handleProductDetailsChange(event);
      } else if (props.product.type === "pastry") {
        event.target = {
          name: "quantity",
          value: 1,
        };
        handleProductDetailsChange(event);
      }
      if (props.product.variants) {
        props.product.variants.forEach((variant) => {
          event.target = {
            name: variant.title,
            value: variant.options[0],
          };
          handleProductDetailsChange(event);
        });
      }
    }
  }, [props.product]);

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={props.isProductDetails}>
      {product.name && (
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
              onClick={() => props.changeIsProductDetails(false)}
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
            {product.type === "cake" ? (
              <>
                <Typography>Weight (Kg):</Typography>
                <Select
                  variant="outlined"
                  sx={{ minWidth: 100, color: "black" }}
                  name="weight"
                  value={props.productDetails.weight || 1}
                  onChange={handleProductDetailsChange}
                >
                  <MenuItem value={1} sx={{ color: "black" }}>
                    1
                  </MenuItem>
                  <MenuItem value={2} sx={{ color: "black" }}>
                    2
                  </MenuItem>
                  <MenuItem value={3} sx={{ color: "black" }}>
                    3
                  </MenuItem>
                  <MenuItem value={4} sx={{ color: "black" }}>
                    4
                  </MenuItem>
                  <MenuItem value={5} sx={{ color: "black" }}>
                    5
                  </MenuItem>
                </Select>
              </>
            ) : (
              <>
                <Typography>Number of peices</Typography>
                <TextField
                  type="number"
                  name={"amount"}
                  value={props.productDetails.quantity}
                  onChange={handleProductDetailsChange}
                />
              </>
            )}
          </Box>
          {product.variants &&
            product.variants.map((variant, index) => {
              return (
                <Box
                  key={`product-${product.id}-variant-${index}`}
                  display={"flex"}
                  flexDirection={"column"}
                  width={"80%"}
                >
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
                        value={props.productDetails[variant.title]}
                        onChange={handleProductDetailsChange}
                      >
                        {variant.options.map((option, index) => (
                          <FormControlLabel
                            key={`product-${product.id}-variant-${index}-option-${index}`}
                            value={option}
                            control={<Radio />}
                            label={
                              option.charAt(0).toUpperCase() +
                              option.substring(1, option.length)
                            }
                            checked={
                              props.productDetails[variant.title] === option
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
              onClick={() => props.changeIsProductDetails(false)}
              disableElevation
              variant="contained"
            >
              Back
            </Button>
            <Button
              onClick={() => props.changeIsProductDetails(false)}
              disableElevation
              variant="contained"
              endIcon={<Done />}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      )}
    </Backdrop>
  );
};

export default ProductDetails;
