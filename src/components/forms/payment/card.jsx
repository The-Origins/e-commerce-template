import { Payment } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../utils/authWorker";

const CardPayment = ({ setStage, setPayment, handleComplete }) => {
  const authWorker = new AuthWorker();
  const [form, setForm] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({
    cardName: "required",
    cardNumber: "required",
    cardExpiry: "required",
    cardCvv: "required",
  });

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, target));

    setForm((prev) => ({
      ...prev,
      [target.name]:
        target.name === "cardNumber"
          ? target.value.length
            ? authWorker.formatString(target.value, "-", 4)
            : target.value
          : target.name === "cardExpiry"
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
    const { cardName, cardNumber, cardExpiry, cardCvv } = form;
    const unformattedNumber = authWorker.removeStringFormat(cardNumber, "-");
    setPayment({
      type: "card",
      number: authWorker.redact(unformattedNumber),
      details: {
        name: cardName,
        number: unformattedNumber,
        expiry: cardExpiry,
        cvv: cardCvv,
      },
    });
    handleComplete();
    setForm({});
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
            name="cardName"
            value={form.cardName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(touched.cardName && errors.cardName) || " "}
            error={touched.cardName && errors.cardName}
            inputProps={{ maxLength: 32 }}
            fullWidth
          />
          <TextField
            label="Card number"
            name={"cardNumber"}
            value={form.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(touched.cardNumber && errors.cardNumber) || " "}
            error={touched.cardNumber && errors.cardNumber}
            inputProps={{ maxLength: 22 }}
            fullWidth
          />
          <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <TextField
              name="cardExpiry"
              value={form.cardExpiry}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(touched.cardExpiry && errors.cardExpiry) || " "}
              error={touched.cardExpiry && errors.cardExpiry}
              label={"Expiry"}
              inputProps={{ maxLength: 5 }}
            />
            <TextField
              name="cardCvv"
              value={form.cardCvv}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(touched.cardCvv && errors.cardCvv) || " "}
              error={touched.cardCvv && errors.cardCvv}
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
