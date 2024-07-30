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
import AuthWorker from "../../../utils/authWorker";

const PasswordForm = ({ handleBack, handleNext }) => {
  const theme = useTheme();
  const authWorker = new AuthWorker();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({
    password: "required",
    confirmPassword: "required",
  });
  const [touched, setTouched] = useState({});

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, target, form));
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const switchIsPassVisible = () => {
    setIsPassVisible((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm((prev) => {
      handleNext(prev.password);
      return {};
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
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

export default PasswordForm;
