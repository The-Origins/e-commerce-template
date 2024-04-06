import React from "react";
import { Box } from "@mui/material";
import data from "../../lib/data";
import UserProductCard from "../product/userProductCard";

const UserFavourites = (props) => {
  return (
    <Box
      maxWidth={"100%"}
      height={"100%"}
      sx={{ overflowY: "scroll" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {Object.keys(data.user.favourites).map((favourite, index) => (
        <UserProductCard
          id={index}
          item={data.user.favourites[favourite]}
          type="favourites"
          changeProductDetailsTitle={props.changeProductDetailsTitle}
          changeProduct={props.changeProduct}
          changeIsProductDetails={props.changeIsProductDetails}
          changeProductDetails={props.changeProductDetails}
        />
      ))}
    </Box>
  );
};

export default UserFavourites;
