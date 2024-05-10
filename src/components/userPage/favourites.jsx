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
      sx={{ overflowY: "scroll" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {Object.keys(props.user.favourites).map((favourite) => {
        const item = {
          details: props.user.favourites[favourite],
          product: productWorker.findProduct(favourite),
        };
        return (
          <UserProductCard
            user={props.user}
            item={item}
            type="favourites"
          />
        );
      })}
    </Box>
  );
};

export default UserFavourites;
