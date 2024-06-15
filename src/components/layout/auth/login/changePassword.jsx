import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";

const ChangePassword = ({
  setStage,
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  setSuccessDetails,
}) => {
  const validator = yup.object().shape({
    password: yup
      .string()
      .min(8, "minimum of 8 characters")
      .required("required"),
    confirmPassword: yup
      .string()
      .min(8, "minimum of 8 characters")
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required("required"),
  });
  const handleFormSubmit = (values, submitProps) => {
    changeIsLoading(true);
    changeLoadingMessage("Changing password");
    setTimeout(() => {
      submitProps.resetForm();
      changeIsLoading(false);
      changeIsSuccess(true);
      setSuccessDetails({
        message: "password changed successfully",
        action: () => {
          changeIsSuccess(false);
          setStage(1);
        },
        actionTitle: "Back to login",
      });
    }, 2000);
  };

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={validator}
      onSubmit={handleFormSubmit}
    >
      {(form) => (
        <form
          onSubmit={form.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.3rem"}
              sx={{ display: "flex" }}
            >
              <Lock />
              Change your password
            </Typography>
            <TextField
              fullWidth
              label="new password"
              type="password"
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
            />
            <TextField
              fullWidth
              label="confirm password"
              type="password"
              name="confirmPassword"
              value={form.values.confirmPassword}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={
                Boolean(form.touched.confirmPassword) &&
                Boolean(form.errors.confirmPassword)
              }
              helperText={
                (form.touched.confirmPassword && form.errors.confirmPassword) ||
                " "
              }
            />
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              variant="outlined"
              disableElevation
              onClick={() => setStage(1)}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              disabled={
                !Boolean(Object.keys(form.touched).length) ||
                Boolean(Object.keys(form.errors).length)
              }
            >
              change
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ChangePassword;
