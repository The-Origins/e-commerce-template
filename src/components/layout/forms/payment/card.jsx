import { Payment } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../../scripts/authWorker";

const CardPayment = ({
  setStage,
  setStatus,
  setPayment,
  handleComplete,
  handleFail,
}) => {
  const authWorker = new AuthWorker();
  const [form, setForm] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({
    name: "required",
    number: "required",
    expiry: "required",
    cvv: "required",
  });

  const validator = {
    name: [{ key: (value) => value.length, message: "required" }],
    number: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) =>
          /^\d{13,19}$/.test(authWorker.removeStringFormat(value, "-")),
        message: "invalid card number",
      },
      {
        key: (value) =>
          authWorker.luhnCheck(authWorker.removeStringFormat(value, "-")), //validate card number
        message: "invalid card number",
      },
    ],
    expiry: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) => /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value),
        message: "Expiration date must be in MM/YY format",
      },
      {
        key: (value) => !authWorker.isCvvExpired(value), //check if cvv is expired
        message: "invalid expiry",
      },
    ],
    cvv: [
      { key: (value) => String(value).length, message: "required" },
      {
        key: (value) => /^\d{3,4}$/.test(value), //check if cvv has 3-4 values
        message: "invalid cvv",
      },
    ],
  };

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, validator, target));
    setForm((prev) => ({
      ...prev,
      [target.name]:
        target.name === "number"
          ? target.value.length
            ? authWorker.formatString(target.value, "-", 4)
            : target.value
          : target.name === "expiry"
          ? target.value.length
            ? authWorker.formatString(target.value, "/")
            : target.value
          : target.value,
    }));
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { number, ...rest } = form;
    const unformattedNumber = authWorker.removeStringFormat(number, "-");
    setPayment({
      type: "card",
      number: authWorker.redact(unformattedNumber),
      details: { number: unformattedNumber, ...rest },
    });

    setStatus({
      on: true,
      type: "LOADING",
      message: "verifying",
    });
    const loadingTimeout = setTimeout(() => {
      setStatus({ on: false });
      handleComplete();
      clearTimeout(loadingTimeout);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
        justifyContent: "space-evenly",
      }}
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
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(touched.name && errors.name) || " "}
            error={touched.name && errors.name}
            inputProps={{ maxLength: 32 }}
            fullWidth
          />
          <TextField
            label="Card number"
            name={"number"}
            value={form.number}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(touched.number && errors.number) || " "}
            error={touched.number && errors.number}
            inputProps={{ maxLength: 22 }}
            fullWidth
          />
          <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <TextField
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(touched.expiry && errors.expiry) || " "}
              error={touched.expiry && errors.expiry}
              label={"Expiry"}
              inputProps={{ maxLength: 5 }}
            />
            <TextField
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(touched.cvv && errors.cvv) || " "}
              error={touched.cvv && errors.cvv}
              inputProps={{ maxLength: 4 }}
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
        <Button variant="outlined" disableElevation onClick={() => setStage(0)}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
        >
          confirm
        </Button>
      </Box>
    </form>
  );
};

export default CardPayment;
