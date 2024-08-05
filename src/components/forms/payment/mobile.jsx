import { PhoneAndroid } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../utils/authWorker";
import TelTextField from "../inputs/telTextField";
import callingCodes from "../../../../lib/callingCodes.json";

const MobilePayment = ({ mobileValues, setStage, setPayment }) => {
  const authWorker = new AuthWorker();
  const [form, setForm] = useState({
    phoneCode: mobileValues?.code || "US",
    phoneNumber: mobileValues?.number || callingCodes["US"].callingCode,
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState(
    form.phoneNumber > callingCodes[form.phoneCode].callingCode
      ? {}
      : { phoneNumber: "required" }
  );

  const handleChange = ({ target }) => {
    setForm((prev) => {
      if (target.name === "phoneCode") {
        return {
          ...prev,
          phoneCode: target.value,
          phoneNumber: callingCodes[target.value].callingCode,
        };
      } else if (target.name === "phoneNumber") {
        return {
          ...prev,
          phoneNumber: authWorker.formatPhoneNumber(
            prev.phoneNumber,
            target.value,
            prev.phoneCode
          ),
        };
      }
      return { ...prev, [target.name]: target.value };
    });
    //for the most current value
    setForm((prev) => {
      setErrors(
        authWorker.getErrors(
          errors,
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
      number: authWorker.redact(form.phoneNumber, 4),
      details: { code: form.phoneCode, number: form.phoneNumber },
    });
    setStage(3);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
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
          disabled={Boolean(errors.phoneNumber)}
        >
          confirm
        </Button>
      </Box>
    </form>
  );
};

export default MobilePayment;
