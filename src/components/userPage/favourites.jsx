import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import UserProductCard from "../product/userProductCard";
import ProductWorker from "../../scripts/productWorker";

const UserFavourites = (props) => {
  const productWorker = new ProductWorker();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: isNotPhone ? "10px" : 0,
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "25px",
          bgcolor: theme.palette.grey[300],
        },
        "&::-webkit-scrollbar-thumb:hover": {
          cursor: "pointer",
          bgcolor: theme.palette.grey[400],
        },
      }}
      padding={isNotPhone ? "20px" : "20px 7px"}
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
