import React from "react";
import { Box } from "@mui/material";
import UserProductCard from "../product/userProductCard";

const UserFavourites = ({user}) => {
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
      {Object.keys(user.favourites).map((favourite, index) => (
        <UserProductCard
          id={index}
          item={user.favourites[favourite]}
          type="favourites"
        />
      ))}
    </Box>
  );
};

export default UserFavourites;
