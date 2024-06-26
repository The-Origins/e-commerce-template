import { PhoneAndroid } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../../scripts/authWorker";
import { isValidPhoneNumber } from "libphonenumber-js";

const MobilePayment = ({
  setStage,
  registerForm,
  setRegisterForm,
  callingCodes,
}) => {
  const authWorker = new AuthWorker();
  const [form, setForm] = useState({
    code: registerForm.phone.code || "US",
    number: registerForm.phone.number,
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

  const handleBack = () => {
    setForm({
      code: registerForm.phone.code || "+1",
      number: registerForm.phone.number,
    });
    setStage(5);
  };

  const handleConfirm = () => {
    setRegisterForm((prev) => ({
      ...prev,
      payments: {
        saved: [
          {
            type: "card",
            number: authWorker.redact(form.number),
            details: { ...form },
          },
        ],
      },
    }));
    setStage(9);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      width={"min(400px, 90%)"}
      height={"100%"}
      justifyContent={"space-evenly"}
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
        <TextField
          type="tel"
          placeholder="phone number"
          name="number"
          value={form.number}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.number) && Boolean(errors.number)}
          helperText={(touched.number && errors.number) || " "}
          sx={{
            flexBasis: 200,
            flexGrow: 1,
            "& > div": { padding: 0 },
            "& > div > div": { marginRight: "5px" },
          }}
          InputProps={{
            startAdornment: (
              <Select
                autoWidth
                name="code"
                value={form.code}
                onChange={handleChange}
                renderValue={(value) => value}
              >
                {Object.keys(callingCodes).map((code) => (
                  <MenuItem value={code}>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      gap={"10px"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography>{callingCodes[code].countryName}</Typography>
                      <Typography color={"primary.main"}>{code}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            ),
          }}
        />
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
          disabled={Boolean(errors.number)}
          onClick={handleConfirm}
        >
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default MobilePayment;
