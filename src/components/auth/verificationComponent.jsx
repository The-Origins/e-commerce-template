import { Email, PhoneAndroid } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../scripts/authWorker";

const VerificationComponent = ({
  type = "email",
  onVerifySuccess = () => {},
  onVerifyFaliure = () => {},
  setStatus,
}) => {
  const authWorker = new AuthWorker();
  const [timer, setTimer] = useState(0);
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState({ code: "required" });
  const [touched, setTouched] = useState({});
  const validator = {
    code: [{ key: (value) => value.length, message: "required" }],
  };

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, validator, target));
    setCode(target.value);
  };

  const handleBlur = ({ target }) => {
    setTouched({ [target.name]: true });
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({
      on: true,
      type: "LOADING",
      message: "verifying",
    });
    const loadingTimeout = setTimeout(() => {
      setStatus({ on: false });
      onVerifySuccess();
      clearTimeout(loadingTimeout);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          name={"code"}
          value={code}
          onChange={handleChange}
          onBlur={handleBlur}
          inputProps={{ maxLength: 4 }}
          error={Boolean(touched.code) && Boolean(errors.code)}
          helperText={(touched.code && errors.code) || " "}
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
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={errors.code || (!touched.code && errors.code)}
        >
          verify
        </Button>
      </Box>
    </form>
  );
};

export default VerificationComponent;
