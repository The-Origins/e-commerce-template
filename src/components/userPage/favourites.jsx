import React from "react";
import { Box } from "@mui/material";
import UserProductCard from "../product/userProductCard";
import ProductWorker from "../../scripts/productWorker";

const UserFavourites = (props) => {
  const productWorker = new ProductWorker();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "25px",
          bgcolor: "text.secondary",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          cursor: "pointer",
        },
      }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {Object.keys(props.user.favourites).map((favourite) => {
        const item = {
          details: props.user.favourites[favourite].details,
          product: productWorker.findProduct(favourite),
          total: props.user.favourites[favourite].total,
        };
        return (
          <UserProductCard user={props.user} item={item} type="favourites" />
        );
      })}
    </Box>
  );
};

export default UserFavourites;
