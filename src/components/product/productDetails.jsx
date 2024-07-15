import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import offers from "../../../lib/data/offers.json";
import ProductWorker from "../../scripts/productWorker";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

const ProductDetails = ({ product, user, currency, title, setIsProductDetails }) => {
  const theme = useTheme();
  const maxQuantity = 10;
  const productWorker = new ProductWorker();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const productWorker = new ProductWorker();
    if (Object.keys(user).length) {
      setProductDetails(
        productWorker.getProductDetails(
          user.cart.items,
          user.favourites,
          product,
          offers
        )
      );
    }
  }, [product, user]);


  const handleProductDetailsChange = ({ target }) => {
    setProductDetails((prev) => {
      if (
        product.variants[target.name] &&
        product.variants[target.name].multiSelect
      ) {
        let selected = prev[target.name] || [];
        if (target.checked) {
          selected = [...selected, target.value];
        } else {
          selected = selected.filter((option) => option !== target.value) || [];
        }
        return { ...prev, [target.name]: selected };
      }
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
    setProductDetails((prev) => {
      const { total, quantity, ...variants } = prev;
      return {
        ...prev,
        total: productWorker.getTotal(product, quantity, variants),
      };
    });
  };

  const reduceQuantity = () => {
    handleProductDetailsChange({
      target: {
        name: "quantity",
        value:
          productDetails.quantity > 1
            ? productDetails.quantity - 1
            : productDetails.quantity,
      },
    });
  };

  const increaseQuantity = () => {
    handleProductDetailsChange({
      target: {
        name: "quantity",
        value:
          productDetails.quantity < maxQuantity
            ? productDetails.quantity + 1
            : productDetails.quantity,
      },
    });
  };

  const handleConfirm = () => {
    setIsProductDetails(false);
  };

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        width={"min(600px, 100%)"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Typography
            textAlign={"center"}
            fontSize={"clamp(1rem, 5vw, 1.5rem)"}
            fontWeight={"bold"}
          >
            {title || "Confirm a few details first"}
          </Typography>
          <Typography
            padding={"7px 12px"}
            color={"primary.main"}
            border={`1px solid ${theme.palette.primary.main}`}
            borderRadius={"10px"}
          >
            Total: {currency.symbol}{" "}
            {Number(productDetails.total).toLocaleString("US")}
          </Typography>
        </Box>
        <Box
          maxHeight={"50vh"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              bgcolor: "transparent",
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "25px",
              bgcolor: theme.palette.grey[300],
              transition: "0.3s",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              cursor: "pointer",
              bgcolor: theme.palette.grey[400],
            },
          }}
        >
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            padding={"20px 0px"}
            gap={"20px"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={"20px"}
            >
              <Typography fontWeight={"bold"}>Quantity:</Typography>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <IconButton
                  onClick={reduceQuantity}
                  disabled={productDetails.quantity <= 1}
                  sx={{ color: "primary.main" }}
                >
                  <RemoveCircle />
                </IconButton>
                <Typography
                  width={"80px"}
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{ userSelect: "none" }}
                >
                  {productDetails.quantity}
                </Typography>
                <IconButton
                  onClick={increaseQuantity}
                  disabled={productDetails.quantity >= maxQuantity}
                  sx={{ color: "primary.main" }}
                >
                  <AddCircle />
                </IconButton>
              </Box>
            </Box>
            {Object.keys(product.variants) &&
              Object.keys(product.variants).map((variant, index) => (
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Typography fontWeight={"bold"}>
                    {`${
                      variant.charAt(0).toUpperCase() + variant.substring(1)
                    }:`}
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                    {product.variants[variant].multiSelect &&
                    productDetails[variant] ? (
                      <FormControl>
                        <FormGroup name={variant} sx={{ flexDirection: "row" }}>
                          {Object.keys(product.variants[variant]).map(
                            (option) => {
                              if (option === "multiSelect") {
                                return <></>;
                              }
                              return (
                                <FormControlLabel
                                  name={variant}
                                  value={option}
                                  checked={productDetails[variant].includes(
                                    option
                                  )}
                                  onChange={handleProductDetailsChange}
                                  control={<Checkbox />}
                                  label={
                                    <Box display={"flex"} gap={"5px"}>
                                      <Typography>
                                        {option.charAt(0).toUpperCase() +
                                          option.substring(1)}
                                      </Typography>
                                      {product.variants[variant][option] >
                                        0 && (
                                        <Typography color={"primary.main"}>
                                          (+{product.variants[variant][option]})
                                        </Typography>
                                      )}
                                    </Box>
                                  }
                                />
                              );
                            }
                          )}
                        </FormGroup>
                      </FormControl>
                    ) : (
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby={`product-${product.id}-variant-${index}-options`}
                          name={variant}
                          value={productDetails[variant]}
                          onChange={handleProductDetailsChange}
                        >
                          {Object.keys(product.variants[variant]).map(
                            (option) => (
                              <FormControlLabel
                                value={option}
                                control={<Radio />}
                                label={
                                  <Box display={"flex"} gap={"5px"}>
                                    <Typography>
                                      {option.charAt(0).toUpperCase() +
                                        option.substring(1)}
                                    </Typography>
                                    {product.variants[variant][option] > 0 && (
                                      <Typography color={"primary.main"}>
                                        (+{product.variants[variant][option]})
                                      </Typography>
                                    )}
                                  </Box>
                                }
                                checked={productDetails[variant] === option}
                              />
                            )
                          )}
                        </RadioGroup>
                      </FormControl>
                    )}
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        padding={"30px 0px"}
      >
        <Button variant="outlined" onClick={() => setIsProductDetails(false)}>
          cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
