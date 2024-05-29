import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const LoadingComponent = ({ message }) => {
  return (
    <Box
      position={"absolute"}
      bgcolor={"white"}
      color={"black"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={5}
    >
      <Typography fontWeight={"bold"}>{message}</Typography>
      <CircularProgress />
    </Box>
  );
};

export default LoadingComponent;
