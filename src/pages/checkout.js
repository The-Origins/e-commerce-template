import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const CheckoutPage = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)")
  return (
    <Box
      mt={"100px"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box width={isNotPhone ? "80%" : "90%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography sx={{display:"flex", gap:"10px", color:"text.secondary", alignItems :"flex-end"}}></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
