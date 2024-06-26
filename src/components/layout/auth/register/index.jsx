import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import RegisterStages from "./stages";

const Register = ({
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
  const [registerForm, setRegisterForm] = useState({});

  const handleRegister = () => {
    setRegisterForm((prev) => {
      console.log(prev);
      return {};
    });
  };

  return (
    <Box
      display={"inline-block"}
      position={"relative"}
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
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "25px",
            bgcolor: theme.palette.grey[300],
          },
          "&::-webkit-scrollbar-thumb:hover": {
            cursor: "pointer",
            bgcolor: theme.palette.grey[400],
          },
        }}
      >
        <Typography
          mt={"10px"}
          fontFamily={"pacifico"}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          {stage === 0 ? " " : "Register"}
        </Typography>
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <RegisterStages
            {...{
              stage,
              setStage,
              registerForm,
              setRegisterForm,
              handleRegister,
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
  );
};

export default Register;
