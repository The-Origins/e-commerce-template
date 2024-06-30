import React, { useState } from "react";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AuthWorker from "../../../scripts/authWorker";

const PasswordForm = ({ handleBack, handleNext }) => {
  const theme = useTheme();
  const authWorker = new AuthWorker();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [form, setForm] = useState({});
  const validator = {
    password: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) => value.length >= 8,
        message: "Password must be at least 8 characters long",
      },
      {
        key: (value) => /[A-Z]/.test(value),
        message: "Password must contain at least one uppercase letter",
      },
      {
        key: (value) => /[a-z]/.test(value),
        message: "Password must contain at least one lowercase letter",
      },
      {
        key: (value) => /\d/.test(value),
        message: "Password must contain at least one number",
      },
      { key: (value) => value !== "", message: "Password is required" },
    ],
    confirmPassword: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value, form) => value === form.password,
        message: "passwords must match",
      },
    ],
  };
  const [errors, setErrors] = useState({
    password: "required",
    confirmPassword: "required",
  });
  const [touched, setTouched] = useState({});

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, validator, target, form));
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const switchIsPassVisible = () => {
    setIsPassVisible((prev) => !prev);
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
          <Lock />
          Create a strong password
        </Typography>
        <Box
          border={`1px solid ${theme.palette.grey[300]}`}
          padding={"15px 15px 0px 15px"}
          borderRadius={"10px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <TextField
            variant="outlined"
            type={isPassVisible ? "text" : "password"}
            label={"Password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password) && Boolean(errors.password)}
            helperText={(touched.password && errors.password) || " "}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={switchIsPassVisible}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            type={"password"}
            label={"Confirm password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              Boolean(touched.confirmPassword) &&
              Boolean(errors.confirmPassword)
            }
            helperText={
              (touched.confirmPassword && errors.confirmPassword) || " "
            }
          />
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          disableElevation
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
          onClick={() => handleNext(form.password)}
        >
          next
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordForm;
