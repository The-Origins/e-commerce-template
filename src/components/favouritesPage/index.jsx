import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import data from "../../lib/data";
import UserProductCard from "../product/userProductCard";

const FavouritesPageComponent = (props) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      mt={"100px"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      paddingBottom={"50px"}
    >
      <Box
        width={isNotPhone ? "80%" : "90%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Typography
          alignSelf={"center"}
          variant="h2"
          sx={{
            fontFamily: "Pacifico",
            fontSize: "clamp(1rem, 7vw, 3rem)",
          }}
        >
          My Favourites
        </Typography>
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
    </Box>
  );
};

export default FavouritesPageComponent;
