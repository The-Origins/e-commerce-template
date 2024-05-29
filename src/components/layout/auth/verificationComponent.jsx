import { Email, PhoneAndroid } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const VerificationComponent = ({
  type = "email",
  handleVerified = () => {},
  handleNotVerified = () => {},
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  changeSuccessDetails,
  successDetails,
  changeIsError,
  changeErrorDetails,
}) => {
  const [timer, setTimer] = useState(60);
  const [isTimerDisabled, setIsTimerDisabled] = useState(false);

  const handleVerification = () => {
    changeIsLoading(true);
    changeLoadingMessage("Verifying");
    setTimeout(() => {
      changeIsLoading(false);
      handleVerified();
    }, 5000);
  };

  const handleResend = () => {
    const resendTimer = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
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
        <TextField label="code" />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="text" disableElevation onClick={handleResend}>
          resend
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={handleVerification}
        >
          verify
        </Button>
      </Box>
    </Box>
  );
};

export default VerificationComponent;
