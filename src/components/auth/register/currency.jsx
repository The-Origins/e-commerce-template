import React, { useState } from "react";
import { Paid } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import CurrencySelect from "../../forms/inputs/currencySelect";
import currencies from "../../../../lib/currencies.json";

const Currency = ({ region, setStage, setRegisterForm, handleRegister }) => {
  const [form, setForm] = useState({ currency: region.currency || "USD" });

  const handleChange = ({ target }) => {
    setForm({ currency: target.value });
  };

  const handleConfirm = () => {
    setRegisterForm((prev) => ({
      ...prev,
      payments: { ...prev.payments, currency: currencies[form.currency] },
    }));
    handleRegister();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems:"center"
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <Paid />
          Select your currency
        </Typography>
        <CurrencySelect {...{ form, handleChange }} />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(4)}>
          Back
        </Button>
        <Button onClick={handleConfirm} variant="contained" disableElevation>
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Currency;
