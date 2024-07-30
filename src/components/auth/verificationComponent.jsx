import { Email, PhoneAndroid } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthWorker from "../../utils/authWorker";
import { useDispatch } from "react-redux";
import { verifyCode } from "../../state/user";

const VerificationComponent = ({
  type = "email",
  data,
  onSuccess = () => {},
  onError = () => {},
  setStatus,
}) => {
  const dispatch = useDispatch();
  const authWorker = new AuthWorker();
  const [timer, setTimer] = useState(0);
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState({ code: "required" });
  const [touched, setTouched] = useState({});

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, target));
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
    dispatch(verifyCode({ type, data, setStatus, onSuccess, onError }));
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
        alignItems: "center",
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
