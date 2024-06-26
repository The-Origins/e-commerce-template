import { Email, Facebook, Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import VerificationComponent from "../verificationComponent";
import ConfirmEmail from "./confirmEmail";
import PasswordComponent from "../passwordComponent";
import LoginForm from "./loginForm";

const LoginStages = ({
  stage,
  setStage,
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
  setIsSuccess,
  setSuccessDetails,
  setAuth,
}) => {
  const changePassword = (password) => {
    console.log(password);
    setIsLoading(true);
    setLoadingMessage("Changing password");
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
      setIsSuccess(true);
      setSuccessDetails({
        message: "password changed successfully",
        action: () => {
          setStage(1);
        },
        actionTitle: "Back to login",
      });
    }, 2000);
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
      <Button
        sx={{
          mt: "50px",
          textTransform: "none",
          ":hover": { textDecoration: "underline" },
        }}
        onClick={() => setAuth("register")}
      >
        Don't have an account?
      </Button>
    </Box>,
    <LoginForm
      {...{
        setStage,
        setIsLoading,
        setLoadingMessage,
        setIsSuccess,
        setSuccessDetails,
        setIsError,
        setErrorDetails,
      }}
    />,
    <ConfirmEmail setStage={setStage} />,
    <PasswordComponent
      handleBack={() => setStage(1)}
      handleNext={changePassword}
    />,
    <VerificationComponent
      onVerifySuccess={() => setStage(3)}
      {...{
        setIsLoading,
        setLoadingMessage,
      }}
    />,
  ];
  return stages[stage];
};

export default LoginStages;
