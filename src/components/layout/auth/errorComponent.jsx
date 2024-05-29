import { ReportProblem } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Box
      position={"absolute"}
      bgcolor={"white"}
      color={"black"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      gap={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={5}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"5px"}
      >
        <Typography fontFamily={"pacifico"} fontSize={"clamp(1rem, 5vw, 2rem)"}>
          Error
        </Typography>
        <Typography>{message}</Typography>
      </Box>
      <ReportProblem color="warning" sx={{ fontSize: "3rem" }} />
    </Box>
  );
};

export default ErrorComponent;
