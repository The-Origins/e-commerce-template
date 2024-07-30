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
import AuthWorker from "../../../utils/authWorker";
import { navigate } from "gatsby";
import { loginUser } from "../../../state/user";

const LoginForm = ({ setStage, setStatus, tab }) => {
  const authWorker = new AuthWorker();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({
    email: "required",
    password: "required",
  });
  const [touched, setTouched] = useState({});
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, target));
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setForm((prev) => {
      dispatch(
        loginUser({
          data: prev,
          setStatus,
          onSuccess: () => {
            navigate(tab || "/");
            setStage(0);
          },
          onError: () => {
            setStage(0);
          },
        })
      );
      return {};
    });
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
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
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
