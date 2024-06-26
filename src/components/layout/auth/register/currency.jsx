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
  const [currency, setCurrency] = useState(region.currency);
  const currencies = authWorker.getCurrencies();

  const handleChange = ({ target }) => {
    setCurrency(target.value);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    setLoadingMessage("registering");
    setRegisterForm((prev) => ({
      ...prev,
      payments: { ...prev.payments, currency: currencies[currency] },
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
        <Select
          name="currency"
          value={currency}
          onChange={handleChange}
          renderValue={(value) => value}
        >
          {Object.keys(currencies).map((currency) => (
            <MenuItem value={currencies[currency].code}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                gap={"20px"}
                alignItems={"center"}
              >
                <Typography>
                  {currencies[currency].name} {currencies[currency].symbol}
                </Typography>
                <Typography color={"primary.main"}>
                  {currencies[currency].code}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
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
