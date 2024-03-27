import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const CartElement = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [cartItemDetails, setCartItemDetails] = useState([]);

  useEffect(() => {
    const itemDetails = Object.keys(props.cartItem.details).map(
      (detail) =>
        `${detail.charAt(0).toUpperCase() + detail.substring(1)}: ${
          detail !== "weight"
            ? props.cartItem.details[detail]
            : props.cartItem.details[detail] + "Kg"
        }`
    );
    setCartItemDetails(itemDetails);
  }, []);

  const editCartItem = () => {
    props.changeProductDetailsTitle("Edit your prefrences");
    props.changeProduct(props.cartItem.product);
    props.changeIsProductDetails(true);
  };

  return (
    <Box
      width={"90%"}
      minHeight={"100px"}
      display={"flex"}
      alignItems={"center"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"20px"}
      padding={"20px"}
      sx={{
        transition: "0.3s",
        ":hover": { boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}` },
        ":hover .cart-item-options": {
          opacity: 1,
        },
      }}
    >
      <Box
        height={"90px"}
        width={"100px"}
        margin={"0px 20px"}
        sx={{
          backgroundImage: `url(${props.cartItem.product.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
        }}
      />
      <Box display={"flex"} width={"100%"} height={"100%"}>
        <Box
          pl={"10px"}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-evenly"}
          gap={"5px"}
        >
          <Typography fontWeight={"bold"} fontSize={"clamp(1rem, 6vw, 1.2rem)"}>
            {props.cartItem.product.name}
          </Typography>
          <Typography
            key={`cartItem-details`}
            fontSize={"clamp(0.7rem, 2vw, 0.9rem)"}
            color={"text.secondary"}
          >
            {cartItemDetails.join(", ")}
          </Typography>
          <Typography>
            {props.cartItem.product.unitPrice.currency}{" "}
            {props.cartItem.details.weight *
              props.cartItem.product.unitPrice.amount}
          </Typography>
          {!isNotPhone && (
            <Box
              className={"cart-item-options"}
              display={"flex"}
              flexDirection={"row"}
              gap={"10px"}
              sx={{ opacity: 1, transition: "0.2s" }}
            >
              <Tooltip title="Edit" placement="right">
                <Button
                  sx={{ ":hover": { color: "primary.main" } }}
                  onClick={editCartItem}
                  startIcon={<Edit />}
                  size="small"
                >
                  Edit
                </Button>
              </Tooltip>
              <Tooltip title="Remove from trash" placement="right">
                <Button
                  variant="contained"
                  disableElevation
                  size="small"
                  sx={{ ":hover": { color: "primary.main" } }}
                  startIcon={<Delete />}
                >
                  Remove
                </Button>
              </Tooltip>
            </Box>
          )}
        </Box>
        {isNotPhone && (
          <Box
            className={"cart-item-options"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            sx={{ opacity: 0, transition: "0.2s" }}
          >
            <Tooltip title="Edit" placement="right">
              <IconButton
                sx={{ ":hover": { color: "primary.main" } }}
                onClick={editCartItem}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Remove from trash" placement="right">
              <IconButton sx={{ ":hover": { color: "primary.main" } }}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartElement;
