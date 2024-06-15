import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginInfo = ({
  setStage,
  setLoginForm,
  handleLogin,
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  setSuccessDetails,
}) => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validator = yup.object().shape({
    email: yup.string().email().required("required"),
    password: yup.string().min(8, "minimum 8 characters").required("required"),
  });

  const handleFormSubmit = (values, submitProps) => {
    setLoginForm({
      email: values.email,
      password: values.password,
    });
    submitProps.resetForm();
  };

  const login = () => {
    changeIsLoading(true);
    changeLoadingMessage("Logging in");
    setTimeout(() => {
      handleLogin();
      changeIsLoading(false);
      changeIsSuccess(true);
      setSuccessDetails((prev) => ({ ...prev, message: "You're logged in" }));
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validator}
      onSubmit={handleFormSubmit}
    >
      {(form) => (
        <form
          onSubmit={form.handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <TextField
              variant="outlined"
              type="email"
              label={"email"}
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={Boolean(form.touched.email) && Boolean(form.errors.email)}
              helperText={(form.touched.email && form.errors.email) || " "}
            />
            <TextField
              variant="outlined"
              type={isPassVisible ? "text" : "password"}
              label={"password"}
              name="password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={
                Boolean(form.touched.password) && Boolean(form.errors.password)
              }
              helperText={
                (form.touched.password && form.errors.password) || " "
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setIsPassVisible((prev) => !prev)}
                    >
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
            <Button onClick={() => setStage(0)}>Back</Button>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              onClick={login}
              disabled={
                !Boolean(Object.keys(form.touched).length) ||
                Boolean(Object.keys(form.errors).length)
              }
            >
              Login
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default LoginInfo;
