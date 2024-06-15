import React from "react";
import { Email } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const ConfirmEmail = ({ setStage }) => {
  const validator = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
  });

  const handleFormSubmit = (values, submitProps) => {
    setStage(4);
    submitProps.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "" }}
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
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <Email />
              Confirm your email
            </Typography>
            <TextField
              fullWidth
              label="email"
              type="email"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={Boolean(form.touched.email) && Boolean(form.errors.email)}
              helperText={(form.touched.email && form.errors.email) || " "}
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
              confirm
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ConfirmEmail;
