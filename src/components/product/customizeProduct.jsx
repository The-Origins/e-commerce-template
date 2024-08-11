import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ProductWorker from "../../utils/productWorker";
import {
  AddCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  RadioButtonChecked,
  RadioButtonUnchecked,
  RemoveCircle,
} from "@mui/icons-material";
import { updateUser } from "../../state/user";
import { useDispatch } from "react-redux";

const CustomizeProduct = ({
  product,
  user,
  currency,
  customizeProduct,
  setCustomizeProduct,
  offers,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const productWorker = new ProductWorker();
  const maxQuantity = productWorker.maxQuantity;
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const productWorker = new ProductWorker();
    if (user.isLoggedIn) {
      setProductDetails(
        productWorker.getProductDetails(
          user.data.cart.items,
          user.data.favourites,
          product,
          offers
        )
      );
    }
  }, [product, user]);

  const handleProductDetailsChange = ({ name, value }) => {
    setProductDetails((prev) => {
      if (
        product.variants[name] &&
        product.variants[name].multiSelect
      ) {
        let selected = prev[name] || [];
        if (!selected.includes(value)) {
          selected = [...selected, value];
        } else {
          selected = selected.filter((option) => option !== value) || [];
        }
        return { ...prev, [name]: selected };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
    setProductDetails((prev) => {
      const { total, quantity, ...variants } = prev;
      return {
        ...prev,
        total: productWorker.getTotal(product, quantity, variants, offers),
      };
    });
  };

  const reduceQuantity = () => {
    handleProductDetailsChange({
      name: "quantity",
      value:
        productDetails.quantity > 1
          ? productDetails.quantity - 1
          : productDetails.quantity,
    });
  };

  const increaseQuantity = () => {
    handleProductDetailsChange({
      name: "quantity",
      value:
        productDetails.quantity < maxQuantity
          ? productDetails.quantity + 1
          : productDetails.quantity,
    });
  };

  const handleConfirm = () => {
    dispatch(
      updateUser({
        path: customizeProduct.path,
        action: customizeProduct.action,
        data: { productId: product.id, ...productDetails },
      })
    );
    setCustomizeProduct({ on: false });
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
            {customizeProduct.title || "Confirm a few details first"}
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
              Object.keys(product.variants).map((variant) => (
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Typography fontWeight={"bold"}>
                    {`${
                      variant.charAt(0).toUpperCase() + variant.substring(1)
                    }:`}
                  </Typography>
                  <Box display={"flex"} gap={"10px"} flexWrap={"wrap"}>
                    {Object.keys(product.variants[variant]).map((option) => {
                      if (option === "multiSelect") {
                        return <></>;
                      }
                      return (
                        <button
                          onClick={() =>
                            handleProductDetailsChange({
                              name: variant,
                              value: option,
                            })
                          }
                          style={{
                            cursor: "pointer",
                            padding: "0px",
                            margin: "0px",
                            textTransform: "none",
                            textAlign: "left",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"5px"}
                            sx={{
                              ":hover": { bgcolor: theme.palette.grey[100] },
                            }}
                          >
                            {product.variants[variant].multiSelect ? (
                              productDetails[variant] &&
                              productDetails[variant].includes(option) ? (
                                <CheckBox sx={{ color: "primary.main" }} />
                              ) : (
                                <CheckBoxOutlineBlank
                                  sx={{ color: theme.palette.grey[600] }}
                                />
                              )
                            ) : productDetails[variant] === option ? (
                              <RadioButtonChecked
                                sx={{ color: "primary.main" }}
                              />
                            ) : (
                              <RadioButtonUnchecked
                                sx={{ color: theme.palette.grey[600] }}
                              />
                            )}
                            <Box display={"flex"} gap={"5px"}>
                              <Typography>
                                {option.charAt(0).toUpperCase() +
                                  option.substring(1)}
                              </Typography>
                              {Number(product.variants[variant][option]) !==
                                0 && (
                                <Typography color={"primary.main"}>
                                  (+{product.variants[variant][option]})
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </button>
                      );
                    })}
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
        <Button
          variant="outlined"
          onClick={() => setCustomizeProduct({ on: false })}
        >
          cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default CustomizeProduct;
