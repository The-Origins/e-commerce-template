import React, { useState } from "react";
import { Email, Paid } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AuthWorker from "../../../../scripts/authWorker";
import CurrencySelect from "../../forms/currencySelect";

const Currency = ({
  region,
  setStage,
  setRegisterForm,
  setIsLoading,
  setLoadingMessage,
  setIsSuccess,
  setSuccessDetails,
  setAuth,
  handleRegister,
}) => {
  const authWorker = new AuthWorker();
  const [form, setForm] = useState({ currency: region.currency });
  const currencies = authWorker.getCurrencies();

  const handleChange = ({ target }) => {
    setForm(target.value);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    setLoadingMessage("registering");
    setRegisterForm((prev) => ({
      ...prev,
      payments: { ...prev.payments, currency: currencies[form.currency] },
    }));
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      handleRegister();
      setIsLoading(false);
      setIsSuccess(true);
      setSuccessDetails({
        message: "account created successfully",
        action: () => {
          setStage(0);
          setAuth("login");
        },
        actionTitle: "Back to login",
      });
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
