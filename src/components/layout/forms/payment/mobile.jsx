import { PhoneAndroid } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../../scripts/authWorker";
import { isValidPhoneNumber } from "libphonenumber-js";
import TelTextField from "../telTextField";
import { useSelector } from "react-redux";
import callingCodes from "../../../../../lib/callingCodes.json";

const MobilePayment = ({ mobileValues, setStage, setPayment }) => {
  const authWorker = new AuthWorker();
  const region = useSelector((state) => state.region);
  const [form, setForm] = useState({
    code: mobileValues?.code || region.country_code || "US",
    number:
      mobileValues?.number ||
      callingCodes[region.country_code].callingCode ||
      "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState(
    form.number > callingCodes[form.code].callingCode
      ? {}
      : { number: "required" }
  );

  const validator = {
    number: [
      {
        key: (value, form) => value.length > form.code.length,
        message: "required",
      },
      {
        key: (value, form) => isValidPhoneNumber(value, form.code),
        message: "invalid phone number",
      },
    ],
  };

  const handleChange = ({ target }) => {
    setForm((prev) => {
      if (target.name === "code") {
        return {
          ...prev,
          code: target.value,
          number: callingCodes[target.value].callingCode,
        };
      } else if (target.name === "number") {
        return {
          ...prev,
          number: authWorker.formatPhoneNumber(
            prev.number,
            target.value,
            prev.code
          ),
        };
      }
      return { ...prev, [target.name]: target.value };
    });
    setForm((prev) => {
      setErrors(
        authWorker.getErrors(
          errors,
          validator,
          { name: target.name, value: prev[target.name] },
          form
        )
      );
      return prev;
    });
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPayment({
      type: "mobile",
      number: authWorker.redact(form.number, 4),
      details: { ...form },
    });
    setStage(3);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "min(400px, 90%)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        gap: "20px",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex" }}
        >
          <PhoneAndroid />
          Confirm your mobile number
        </Typography>
        <TelTextField
          style={{ flexBasis: 200, flexGrow: 1 }}
          {...{ form, errors, touched, handleChange, handleBlur }}
        />
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
          disabled={Boolean(errors.number)}
        >
          confirm
        </Button>
      </Box>
    </form>
  );
};

export default MobilePayment;
