import {
  Email,
  Facebook,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  useTheme,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VerificationComponent from "../verificationComponent";
import { setUser } from "../../../../state/store";
import { useDispatch } from "react-redux";
import data from "../../../../lib/data";
import LoginStages from "./stages";
import * as yup from "yup";
import { Formik } from "formik";

const Login = ({
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  setSuccessDetails,
  changeSuccessDetails,
  successDetails,
  changeIsError,
  changeErrorDetails,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [stage, setStage] = useState(0);
  const [loginForm, setLoginForm] = useState({});

  

  const handleLogin = () => {
    dispatch(setUser(data.user));
    console.log(loginForm);
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
                changeIsLoading,
                changeLoadingMessage,
                changeIsSuccess,
                setSuccessDetails,
                changeSuccessDetails,
                successDetails,
                changeIsError,
                changeErrorDetails,
                handleLogin,
                setLoginForm
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
