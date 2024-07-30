import { Person, PhoneInTalk } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../../utils/authWorker";
import TelTextField from "../../forms/inputs/telTextField";
import callingCodes from "../../../../lib/callingCodes.json";

const GeneralInfo = ({ setStage, setRegisterForm, region }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const authWorker = new AuthWorker();
  const [form, setForm] = useState({
    phoneCode: region.country_code,
    phoneNumber: callingCodes[region.country_code].callingCode,
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({
    firstName: "required",
    lastName: "required",
    email: "required",
    phoneNumber: "required",
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegisterForm((prev) => ({
      ...prev,
      name: { first: form.firstName, last: form.lastName },
      email: form.email,
      phone: { code: form.phoneCode, number: form.phoneNumber },
    }));
    setForm({
      phoneCode: region.country_code || "US",
      phoneNumber: callingCodes[region.country_code || "US"].callingCode,
    });
    setStage(2);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
      }}
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
            gap={isNotPhone ? "10px" : 0}
          >
            <TextField
              size={!isNotPhone && "small"}
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
              size={!isNotPhone && "small"}
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
            gap={isNotPhone ? "10px" : 0}
          >
            <TextField
              size={!isNotPhone && "small"}
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
            <TelTextField
              number="phoneNumber"
              code="phoneCode"
              style={{ flexBasis: 200, flexGrow: 1 }}
              size={!isNotPhone && "small"}
              {...{ form, errors, touched, handleChange, handleBlur }}
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
          type="submit"
          variant="contained"
          disableElevation
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
        >
          next
        </Button>
      </Box>
    </form>
  );
};

export default GeneralInfo;
