import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProductWorker from "../../scripts/productWorker";
import EditModal from "../layout/editModal";

const ProductDetails = ({
  product,
  user,
  title,
  isProductDetails,
  switchIsProductDetails,
}) => {
  const [productDetails, setProductDetails] = useState({});
  const handleProductDetailsChange = ({ target }) => {
    setProductDetails((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleConfirm = () => {
    switchIsProductDetails();
  };

  useEffect(() => {
    const productWorker = new ProductWorker();
    setProductDetails(
      productWorker.getProductDetails(
        Object.keys(user).length ? user.cart.items : [],
        Object.keys(user).length ? user.favourites : [],
        product
      )
    );
  }, [product, user]);

  return (
    <EditModal
      isEdit={isProductDetails}
      width={"min(700px, 90%)"}
      handleCancel={() => switchIsProductDetails()}
      handleConfirm={handleConfirm}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            textAlign={"center"}
            fontSize={"clamp(1rem, 6vw, 2rem)"}
            fontWeight={"bold"}
          >
            {title || "Confirm a few details first"}
          </Typography>
          <Typography>{productDetails.total}</Typography>
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
          />
        </Box>
        {Object.keys(product.variants).length &&
          Object.keys(product.variants).map((variant, index) => {
            return (
              <Box display={"flex"} flexDirection={"column"} width={"80%"}>
                <Typography>
                  {`${variant.charAt(0).toUpperCase() + variant.substring(1)}:`}
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={"20px"}>
                  <FormControl>
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
                            option.charAt(0).toUpperCase() + option.substring(1)
                          }
                          checked={productDetails[variant] === option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            );
          })}
      </Box>
    </EditModal>
  );
};

export default ProductDetails;
