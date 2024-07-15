import React, { useState } from "react";
import { Paid } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import CurrencySelect from "../../layout/forms/currencySelect";
import currencies from "../../../../lib/currencies.json";
import { navigate } from "gatsby";

const Currency = ({
  region,
  setStage,
  setStatus,
  setRegisterForm,
  handleRegister,
}) => {
  const [form, setForm] = useState({ currency: region.currency });

  const handleChange = ({ target }) => {
    setForm({ currency: target.value });
  };

  const handleConfirm = () => {
    setStatus({
      on: true,
      type: "LOADING",
      message: "registering",
    });
    setRegisterForm((prev) => ({
      ...prev,
      payments: { ...prev.payments, currency: currencies[form.currency] },
    }));
    const loadingTimeout = setTimeout(() => {
      handleRegister();
      setStatus({
        on: true,
        type: "SUCCESS",
        message: "account created successfully",
        action: () => navigate("/auth/login"),
        actionTitle: "back to login",
      });
      clearTimeout(loadingTimeout);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "min(300px, 90%)",
        height: "100%",
        justifyContent: "space-evenly",
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
        <Button variant="outlined" disableElevation onClick={() => setStage(5)}>
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
