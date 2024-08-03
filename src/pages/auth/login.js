import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import LoginIntro from "../../components/auth/login/intro";
import LoginForm from "../../components/auth/login/loginForm";
import ChangePassword from "../../components/forms/changePassword";

const Login = ({ setStatus, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");
  const theme = useTheme();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = `Login | ${theme.title}`;
    }
  }, [theme.title]);

  const stages = [
    <LoginIntro {...{ setStage, tab }} />,
    <LoginForm
      {...{
        setStage,
        setStatus,
        tab,
      }}
    />,
    <ChangePassword
      onCancel={() => setStage(1)}
      onComplete={() => {
        setStage(1);
      }}
      {...{ setStatus }}
    />,
  ];

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
        fontSize={"clamp(1rem, 5vw, 2rem)"}
        sx={{ typography: "secondaryFont", fontWeight: "bold" }}
      >
        Login
      </Typography>
      <Box
        display={"flex"}
        width={"min(400px, 100%)"}
        height={"100%"}
        alignItems={"center"}
        padding={"0px 30px"}
      >
        {stages[stage]}
      </Box>
    </Box>
  );
};

export default Login;
