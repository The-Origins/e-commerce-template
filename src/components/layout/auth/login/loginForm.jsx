import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setIsAuth, setUser } from "../../../../state/store";
import data from "../../../../lib/data";
import AuthWorker from "../../../../scripts/authWorker";

const LoginForm = ({
  setStage,
  setIsLoading,
  setLoadingMessage,
  setIsSuccess,
  setSuccessDetails,
  setIsError,
  setErrorDetails,
}) => {
  const authWorker = new AuthWorker();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({
    email: "required",
    password: "required",
  });
  const [touched, setTouched] = useState({});
  const [isPassVisible, setIsPassVisible] = useState(false);
  const validator = {
    email: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Email must be valid",
      },
    ],
    password: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) => value.length >= 8,
        message: "Password must be at least 8 characters long",
      },
    ],
  };

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, validator, target));
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleLogin = () => {
    setIsLoading(true);
    setLoadingMessage("Logging in");
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      dispatch(setUser(data.user));
      setIsLoading(false);
      setIsSuccess(true);
      setSuccessDetails({
        message: "You're logged in",
        action: () => dispatch(setIsAuth(false)),
      });
    }, 1000);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
        <TextField
          variant="outlined"
          type="email"
          label={"email"}
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.email) && Boolean(errors.email)}
          helperText={(touched.email && errors.email) || " "}
        />
        <TextField
          variant="outlined"
          type={isPassVisible ? "text" : "password"}
          label={"password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.password) && Boolean(errors.password)}
          helperText={(touched.password && errors.password) || " "}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setIsPassVisible((prev) => !prev)}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={() => setStage(2)}>Forgot password?</Button>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setStage(0)}>cancel</Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={handleLogin}
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
