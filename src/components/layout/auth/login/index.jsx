import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import LoginStages from "./stages";

const Login = ({
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
  setIsSuccess,
  setSuccessDetails,
  setAuth,
}) => {
  const [stage, setStage] = useState(0);

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
          fontFamily={"pacifico"}
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
          <Box
            sx={{
              width: "min(400px, 90%)",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoginStages
              {...{
                stage,
                setStage,
                setIsLoading,
                setLoadingMessage,
                setIsError,
                setErrorDetails,
                setIsSuccess,
                setSuccessDetails,
                setAuth,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
