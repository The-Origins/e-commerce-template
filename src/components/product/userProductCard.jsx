import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  AddShoppingCart,
  Delete,
  Edit,
  PropaneTank,
} from "@mui/icons-material";
import ProductDetails from "./productDetails";

const UserProductCard = (props) => {
  const [isProductDetails, setIsProductDetails] = useState(false);

  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  const switchIsProductDetails = () => {
    setIsProductDetails((prev) => !prev);
  };

  return (
    <Box
      key={`${props.type}-item-${props.id}-item-${props.id}`}
      minHeight={"100px"}
      maxWidth={"100%"}
      display={"flex"}
      alignItems={"center"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"20px"}
      sx={{
        transition: "0.3s",
        ":hover": {
          boxShadow:
            props.type === "cart"
              ? `0px 0px 10px 0px ${theme.palette.grey[400]}`
              : undefined,
        },
        ":hover .cart-item-options": {
          opacity: 1,
        },
      }}
      padding={"20px"}
    >
      {(props.type === "cart" || props.type === "favourites") && (
        <ProductDetails
          title={"Edit your prefrences"}
          product={props.item.product}
          user={props.user}
          switchIsProductDetails={switchIsProductDetails}
          isProductDetails={isProductDetails}
        />
      )}
      <Box
        height={"90px"}
        width={"100px"}
        margin={"0px 20px"}
        sx={{
          backgroundImage: `url(${props.item.product.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
        }}
      />
      <Link
        href={props.isLink ? `/product/?p=${props.item.product.id}` : undefined}
        sx={{
          color: "black",
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
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
            {props.item.product.name}
          </Typography>
          <Typography
            key={`orderItem-details`}
            fontSize={"clamp(0.7rem, 2vw, 0.9rem)"}
            color={"text.secondary"}
          >
            {Object.keys(props.item.details)
              .map(
                (detail) =>
                  `${detail.charAt(0).toUpperCase() + detail.substring(1)}: ${
                    props.item.details[detail]
                  }${detail === "weight" ? "Kg" : ""}`
              )
              .join(", ")}
          </Typography>
          <Typography>
            {props.item.product.unitPrice.currency}{" "}
            {props.item.details.weight * props.item.product.unitPrice.amount}
          </Typography>
          {props.type === "favourites" && (
            <Box
              className={`${props.type || "user"}-item-actions`}
              display={"flex"}
              flexDirection={"row"}
              gap={"10px"}
              sx={{ opacity: 1, transition: "0.2s" }}
            >
              <Button
                size="small"
                sx={{ ":hover": { color: "primary.main" } }}
                startIcon={<Delete />}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={{ alignSelf: "flex-start" }}
                onClick={switchIsProductDetails}
                startIcon={<AddShoppingCart />}
              >
                Add to cart
              </Button>
            </Box>
          )}
          {!isNotPhone && props.type === "cart" && (
            <Box
              className={"cart-item-options"}
              display={"flex"}
              flexDirection={"row"}
              gap={"10px"}
              sx={{ opacity: 1, transition: "0.2s" }}
            >
              <Button
                sx={{ ":hover": { color: "primary.main" } }}
                onClick={switchIsProductDetails}
                startIcon={<Edit />}
                size="small"
              >
                Edit
              </Button>
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={{ ":hover": { color: "primary.main" } }}
                startIcon={<Delete />}
              >
                Remove
              </Button>
            </Box>
          )}
        </Box>
      </Link>
      {isNotPhone && props.type === "cart" && (
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
              onClick={switchIsProductDetails}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove from cart" placement="right">
            <IconButton sx={{ ":hover": { color: "primary.main" } }}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default UserProductCard;
