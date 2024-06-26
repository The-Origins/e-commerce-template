import { Person, PhoneInTalk } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../../scripts/authWorker";
import { isValidPhoneNumber } from "libphonenumber-js";

const GeneralInfo = ({ setStage, setRegisterForm, region, callingCodes }) => {
  const authWorker = new AuthWorker();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [form, setForm] = useState({
    phoneCode: region.country_code || "US",
    phoneNumber: callingCodes[region.country_code].callingCode,
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({
    firstName: "required",
    lastName: "required",
    email: "required",
    phoneNumber: "required",
  });

  const validator = {
    firstName: [{ key: (value) => value.length, message: "required" }],
    lastName: [{ key: (value) => value.length, message: "required" }],
    email: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Email must be valid",
      },
    ],
    phoneNumber: [
      {
        key: (value, form) => value.length > form.phoneCode.length,
        message: "required",
      },
      {
        key: (value, form) => isValidPhoneNumber(value, form.phoneCode),
        message: "invalid phone number",
      },
    ],
  };

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
    setForm((prev) => {
      setErrors(
        authWorker.getErrors(
          errors,
          validator,
          { name: target.name, value: prev[target.name] },
          prev
        )
      );
      return prev;
    });
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleNext = () => {
    setRegisterForm((prev) => ({
      ...prev,
      name: { first: form.firstName, last: form.lastName },
      email: form.email,
      phone: { code: form.phoneCode, number: form.phoneNumber },
    }));
    setStage(2);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <Person fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              name<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"15px 15px 0px 15px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={isNotPhone ? "20px" : 0}
          >
            <TextField
              variant="outlined"
              type="name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.firstName) && Boolean(errors.firstName)}
              helperText={(touched.firstName && errors.firstName) || " "}
              label={"First name"}
              sx={{ flexBasis: 200, flexGrow: 1 }}
            />
            <TextField
              variant="outlined"
              type="name"
              label={"Last name"}
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.lastName) && Boolean(errors.lastName)}
              helperText={(touched.lastName && errors.lastName) || " "}
              sx={{ flexBasis: 200, flexGrow: 1 }}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <PhoneInTalk fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              contact<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"15px 15px 0px 15px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={isNotPhone ? "20px" : 0}
          >
            <TextField
              variant="outlined"
              type="email"
              label={"Email"}
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={(touched.email && errors.email) || " "}
              sx={{ flexBasis: 200, flexGrow: 1 }}
            />
            <TextField
              type="tel"
              placeholder="phone number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
              }
              helperText={(touched.phoneNumber && errors.phoneNumber) || " "}
              sx={{
                flexBasis: 200,
                flexGrow: 1,
                "& > div": { padding: 0 },
                "& > div > div": { marginRight: "5px" },
              }}
              InputProps={{
                maxLength: 10,
                startAdornment: (
                  <Select
                    autoWidth
                    name="phoneCode"
                    value={form.phoneCode}
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
                          <Typography>
                            {callingCodes[code].countryName}
                          </Typography>
                          <Typography color={"primary.main"}>{code}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                ),
              }}
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
        <Button variant="outlined" onClick={() => setStage(0)}>
          cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={handleNext}
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
        >
          next
        </Button>
      </Box>
    </Box>
  );
};

export default GeneralInfo;
