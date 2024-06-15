import { Email, PhoneAndroid } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";

const VerificationComponent = ({
  type = "email",
  handleVerify = (values, submitProps) => {},
}) => {
  const [timer, setTimer] = useState(0);

  const handleResend = () => {
    setTimer(61);
    const resendTimer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          return clearInterval(resendTimer);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const validator = yup.object().shape({
    code: yup.number().required("required"),
  });

  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={validator}
      onSubmit={handleVerify}
    >
      {(form) => (
        <form
          onSubmit={form.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "100%",
            justifyContent: "space-evenly",
            width: "min(400px, 90%)",
          }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.3rem"}
              sx={{
                display: "flex",
                alignItems: type === "phone" ? "flex-end" : "center",
                gap: "5px",
              }}
            >
              {type === "phone" ? <PhoneAndroid /> : <Email />}
              Verify your {type}
            </Typography>
            <Typography>We sent a code to your {type}</Typography>
            <TextField
              label="code"
              type="number"
              name="code"
              value={form.values.code}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={Boolean(form.touched.code) && Boolean(form.errors.code)}
              helperText={(form.touched.code && form.errors.code) || " "}
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
              onClick={handleResend}
              disabled={timer > 1}
            >
              {timer > 1 ? `(${timer}) ` : ""}resend
            </Button>
            <Button type="submit" variant="contained" disableElevation>
              verify
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default VerificationComponent;
