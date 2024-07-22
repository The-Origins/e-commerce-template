import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "../../components/layout/carousel";
import LoginIntro from "../../components/auth/login/intro";
import LoginForm from "../../components/auth/login/loginForm";
import ChangePassword from "../../components/forms/changePassword";

const Login = ({ setStatus, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");
  const theme = useTheme();
  const [stage, setStage] = useState(0);

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
          <LoginIntro {...{ setStage, tab }} />
          <LoginForm
            {...{
              setStage,
              setStatus,
              tab,
            }}
          />
          <ChangePassword
            onCancel={() => setStage(1)}
            onComplete={() => {
              setStage(1);
            }}
            {...{ setStatus }}
          />
        </Carousel>
      </Box>
    </Box>
  );
};

export default Login;
