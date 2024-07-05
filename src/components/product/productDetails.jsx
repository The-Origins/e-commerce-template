import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ProductWorker from "../../scripts/productWorker";

const ProductDetails = ({ product, user, title, setIsProductDetails }) => {
  const theme = useTheme();
  const productWorker = new ProductWorker();
  const [productDetails, setProductDetails] = useState({});
  const handleProductDetailsChange = ({ target }) => {
    setProductDetails((prev) => {
      if (
        product.variants[target.name] &&
        product.variants[target.name].multiSelect
      ) {
        let selected = prev[target.name] || [];
        console.log(selected);
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

  const handleConfirm = () => {
    setIsProductDetails(false);
  };

  useEffect(() => {
    const productWorker = new ProductWorker();
    if (Object.keys(user).length) {
      setProductDetails(
        productWorker.getProductDetails(
          user.cart.items,
          user.favourites,
          product
        )
      );
    }
  }, [product, user]);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Typography
          textAlign={"center"}
          fontSize={"clamp(1rem, 6vw, 2rem)"}
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
          Total: {productWorker.getCurrencySymbol(product.unitPrice.currency)}{" "}
          {productDetails.total}
        </Typography>
      </Box>
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
          name={"quantity"}
          value={productDetails.quantity}
          onChange={handleProductDetailsChange}
          inputProps={{ min: 1 }}
        />
      </Box>
      {Object.keys(product.variants).length &&
        Object.keys(product.variants).map((variant, index) => (
          <Box display={"flex"} flexDirection={"column"} width={"80%"}>
            <Typography>
              {`${variant.charAt(0).toUpperCase() + variant.substring(1)}:`}
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"20px"}>
              <FormControl>
                {product.variants[variant].multiSelect &&
                productDetails[variant] ? (
                  <FormGroup name={variant}>
                    {Object.keys(product.variants[variant]).map((option) => {
                      if (option === "multiSelect") {
                        return;
                      }
                      return (
                        <FormControlLabel
                          name={variant}
                          value={option}
                          checked={productDetails[variant].includes(option)}
                          onChange={handleProductDetailsChange}
                          control={<Checkbox />}
                          label={
                            <Box display={"flex"} gap={"5px"}>
                              <Typography>
                                {option.charAt(0).toUpperCase() +
                                  option.substring(1)}
                              </Typography>
                              {product.variants[variant][option].amount > 0 && (
                                <Typography color={"primary.main"}>
                                  +{product.variants[variant][option].amount}
                                </Typography>
                              )}
                            </Box>
                          }
                        />
                      );
                    })}
                  </FormGroup>
                ) : (
                  <RadioGroup
                    row
                    aria-labelledby={`product-${product.id}-variant-${index}-options`}
                    name={variant}
                    value={productDetails[variant]}
                    onChange={handleProductDetailsChange}
                  >
                    {Object.keys(product.variants[variant]).map((option) => (
                      <FormControlLabel
                        value={option}
                        control={<Radio />}
                        label={
                          <Box display={"flex"} gap={"5px"}>
                            <Typography>
                              {option.charAt(0).toUpperCase() +
                                option.substring(1)}
                            </Typography>
                            {product.variants[variant][option].amount > 0 && (
                              <Typography color={"primary.main"}>
                                +{product.variants[variant][option].amount}
                              </Typography>
                            )}
                          </Box>
                        }
                        checked={productDetails[variant] === option}
                      />
                    ))}
                  </RadioGroup>
                )}
              </FormControl>
            </Box>
          </Box>
        ))}

      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        padding={"30px"}
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
