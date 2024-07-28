import { Payment, Payments, PhoneAndroid } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const SelectPayment = ({ setStage, onCancel, enableSkip, onSkip }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Payments />
          Add a payment method
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography color={"text.secondary"}>select payment type</Typography>
          <Button
            sx={{ width: "300px", height: "50px" }}
            variant="outlined"
            startIcon={<Payment />}
            onClick={() => setStage(1)}
          >
            card
          </Button>
          <Button
            sx={{ width: "300px", height: "50px" }}
            variant="outlined"
            startIcon={<PhoneAndroid />}
            onClick={() => setStage(2)}
          >
            mobile
          </Button>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={onCancel}>
          Cancel
        </Button>
        {enableSkip && (
          <Button onClick={onSkip} sx={{color:"text.secondary", textTransform:"none"}}>
            skip
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SelectPayment;
