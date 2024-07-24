import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import UserProductCard from "../product/userProductCard";

const UserFavourites = ({ user, currency, setConfirmationModal }) => {
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
      {Object.keys(user.data.favourites).map((id) => {
        return (
          <UserProductCard
            {...{ id, user, currency, setConfirmationModal }}
            details={user.data.favourites[id]}
            type="favourites"
          />
        );
      })}
    </Box>
  );
};

export default UserFavourites;
