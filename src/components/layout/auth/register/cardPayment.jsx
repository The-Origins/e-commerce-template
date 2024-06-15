import { Payment } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../../scripts/authWorker";

const CardPayment = ({
  setPayment,
  setStage,
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  changeSuccessDetails,
  changeAuth,
}) => {
  const authWorker = new AuthWorker();
  const [details, setDetails] = useState({});
  const [errors, setErrors] = useState({
    number: "required",
    name: "required",
    expiry: "required",
    cvv: "required",
  });
  const [touched, setTouched] = useState({});
  const handleChange = ({ target }) => {
    setErrors((prev) => ({
      ...prev,
      [target.name]: !target.value.length ? "required" : undefined,
    }));
    if (target.name === "number") {
      setDetails((prev) => ({
        ...prev,
        [target.name]: authWorker.formatString(target.value),
      }));
    }
    if (target.name === "expiry") {
      if (target.value <= 3) {
        setDetails((prev) => ({
          ...prev,
          [target.name]: formatString(target.value),
        }));
      }
    } else {
      setDetails((prev) => ({ ...prev, [target.value]: target.value }));
    }
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleBack = () => {
    setDetails({});
    setStage(5);
  };

  const verify = () => {
    changeIsLoading(true);
    changeLoadingMessage("verifying");
    setTimeout(() => {
      setPayment({ type: "card", details });
      changeIsLoading(false);
      changeIsSuccess(true);
      changeSuccessDetails({
        message: "account created successfully",
        action: () => {
          changeIsSuccess(false);
          setStage(0);
          changeAuth("login");
        },
        actionTitle: "Back to login",
      });
    }, 2000);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Payment />
          Add Card details
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <TextField
            type="text"
            label="Full name"
            name="name"
            onBlur={handleBlur}
            helperText={(touched.name && errors.name) || " "}
            error={touched.name && errors.name}
            value={details.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            type="number"
            label="Card number"
            name={"number"}
            onBlur={handleBlur}
            helperText={(touched.number && errors.number) || " "}
            error={touched.number && errors.number}
            value={details.number}
            onChange={handleChange}
            fullWidth
          />
          <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <TextField
              name="expiry"
              onBlur={handleBlur}
              value={details.expiry}
              onChange={handleChange}
              helperText={(touched.expiry && errors.expiry) || " "}
              error={touched.expiry && errors.expiry}
              label={"Expiry"}
            />
            <TextField
              name="cvv"
              onBlur={handleBlur}
              value={details.cvv}
              onChange={handleChange}
              helperText={(touched.cvv && errors.cvv) || " "}
              error={touched.cvv && errors.cvv}
              label={"CVV"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={handleBack}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={
            !Boolean(Object.keys(touched).length) ||
            Boolean(Object.keys(errors).length)
          }
          onClick={verify}
        >
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default CardPayment;
