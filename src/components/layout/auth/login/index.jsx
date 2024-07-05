import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "../../carousel";
import ChangePassword from "../../forms/changePassword";
import LoginForm from "./loginForm";
import LoginIntro from "./intro";

const Login = ({
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
  setIsSuccess,
  setSuccessDetails,
  setAuth,
}) => {
  const theme = useTheme();
  const [stage, setStage] = useState(0);

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

  const handleFail = (message) => {
    setIsError(true);
    setErrorDetails({
      message: message,
      action: () => {
        setStage(1);
      },
      actionTitle: "Back to login",
    });
  };

  return (
    <Box
      position={"relative"}
      display={"inline-block"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        position={"absolute"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        color={"black"}
      >
        <Typography
          mt={"10px"}
          fontFamily={theme.fonts.secondary}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          Login
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
        >
          <Carousel
            width={"min(400px, 90%)"}
            height={"100%"}
            index={stage}
            setIndex={setStage}
            maxIndex={3}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoginIntro {...{ setStage, setAuth }} />
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
            />
            <ChangePassword
              onCancel={() => setStage(1)}
              onFail={handleFail}
              onComplete={changePassword}
              {...{ setIsLoading, setLoadingMessage }}
            />
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
