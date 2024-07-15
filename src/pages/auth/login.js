import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "../../components/layout/carousel";
import LoginIntro from "../../components/auth/login/intro";
import LoginForm from "../../components/auth/login/loginForm";
import ChangePassword from "../../components/layout/forms/changePassword";

const Login = ({ setStatus }) => {
  const theme = useTheme();
  const [stage, setStage] = useState(0);

  const changePassword = (password) => {
    console.log(password);
    setStatus({ on: true, type: "LOADING", message: "changing password" });
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      setStatus({
        on: true,
        type: "SUCCESS",
        message: "password changed successfully",
        action: () => {
          setStage(1);
        },
        actionTitle: "Back to login",
      });
    }, 2000);
  };

  const handleFail = (message) => {
    setStatus({
      on: true,
      type: "ERROR",
      message: message,
      action: () => {
        setStage(1);
      },
      actionTitle: "Back to login",
    });
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        mt={"20px"}
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
          <LoginIntro {...{ setStage }} />
          <LoginForm
            {...{
              setStage,
              setStatus,
            }}
          />
          <ChangePassword
            onCancel={() => setStage(1)}
            onFail={handleFail}
            onComplete={changePassword}
            {...{ setStatus }}
          />
        </Carousel>
      </Box>
    </Box>
  );
};

export default Login;
