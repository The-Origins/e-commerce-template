import { Email, Facebook, Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import VerificationComponent from "../verificationComponent";
import ConfirmEmail from "./confirmEmail";
import LoginInfo from "./loginInfo";
import ChangePassword from "./changePassword";

const LoginStages = ({
  stage,
  setStage,
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  setSuccessDetails,
  changeIsError,
  changeErrorDetails,
  handleLogin,
  setLoginForm,
}) => {
  const handleEmailVerify = (values, submitProps) => {
    changeIsLoading(true);
    changeLoadingMessage("verifying");
    setTimeout(() => {
      changeIsLoading(false);
      setStage(3);
    }, 2000);
    submitProps.resetForm();
  };

  const stages = [
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Button
        variant="outlined"
        startIcon={<Google />}
        sx={{ width: "300px", height: "50px" }}
      >
        Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<Facebook />}
        sx={{ width: "300px", height: "50px" }}
      >
        Facebook
      </Button>
      <Button
        variant="outlined"
        startIcon={<Email />}
        onClick={() => setStage(1)}
        sx={{ width: "300px", height: "50px" }}
      >
        Email
      </Button>
    </Box>,
    <LoginInfo
      {...{
        setStage,
        setLoginForm,
        handleLogin,
        changeIsLoading,
        changeLoadingMessage,
        changeIsSuccess,
        setSuccessDetails,
      }}
    />,
    <ConfirmEmail setStage={setStage} />,
    <ChangePassword setStage={setStage} />,
    <VerificationComponent handleVerify={handleEmailVerify} />,
  ];
  return stages[stage];
};

export default LoginStages;
