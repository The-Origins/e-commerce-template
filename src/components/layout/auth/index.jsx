import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchIsAuth } from "../../../state/store";
import Login from "./login";
import Register from "./register";
import ErrorComponent from "./errorComponent";
import SuccessComponent from "./successComponent";
import LoadingComponent from "./loadingComponent";

const Auth = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successDetails, setSuccessDetails] = useState({
    message: "",
    action: () => {
      dispatch(switchIsAuth());
    },
    actionTitle: "ok",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDetails, setErrorDetails] = useState({
    message: "",
    action: () => {
      dispatch(switchIsAuth());
    },
    actionTitle: "ok",
  });
  const [loadingMessage, setLoadingMessage] = useState("");
  const [auth, setAuth] = useState("login");

  const resetDetails = () => {
    setIsSuccess(false)
    setSuccessDetails({
      message: "",
      action: () => {
        dispatch(switchIsAuth());
      },
      actionTitle: "ok",
    });
    setIsError(false)
    setErrorDetails({
      message: "",
      action: () => {
        dispatch(switchIsAuth());
      },
      actionTitle: "ok",
    });
  };

  const changeIsAuth = () => {
    dispatch(switchIsAuth());
  };

  const changeAuth = (state) => {
    setAuth(state);
  };

  const changeIsLoading = (state) => {
    setIsLoading(state);
  };

  const changeLoadingMessage = (title) => {
    setLoadingMessage(title);
  };

  const changeIsError = (state) => {
    setIsError(state);
  };

  const changeErrorDetails = (details) => {
    setErrorDetails(details);
  };

  const changeIsSuccess = (state) => {
    setIsSuccess(state);
  };

  const changeSuccessDetails = (details) => {
    setSuccessDetails(details);
  };

  const changeErrorMessage = (message) => {
    setErrorMessage(message);
  };

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 100 }} open={isAuth}>
      <Box
        width={isNotPhone ? "40%" : "90%"}
        height={"600px"}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        overflow={"hidden"}
        position={"relative"}
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-in-out`,
          transform: `scale(${isAuth ? 1 : 0})`,
        }}
      >
        {isLoading && <LoadingComponent message={loadingMessage} />}
        {isError && (
          <ErrorComponent message={errorMessage} resetDetails={resetDetails} />
        )}
        {isSuccess && (
          <SuccessComponent
            details={successDetails}
            resetDetails={resetDetails}
          />
        )}
        <Box
          width={"100%"}
          display={"flex"}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"20px"}
        >
          <Button
            variant="outlined"
            disabled={auth === "login"}
            onClick={() => changeAuth("login")}
          >
            login
          </Button>
          <Button
            variant="outlined"
            disabled={auth === "register"}
            onClick={() => changeAuth("register")}
          >
            register
          </Button>
          <IconButton
            onClick={changeIsAuth}
            sx={{ position: "absolute", mr: "20px", right: 0 }}
          >
            <Close />
          </IconButton>
        </Box>
        <Box
          whiteSpace={"nowrap"}
          width={"100%"}
          height={"100%"}
          sx={{
            transition: "0.5s ease-in-out",
            transform: `translateX(-${auth === "register" ? "100%" : "0%"})`,
          }}
        >
          <Login
            {...{
              changeIsLoading,
              changeLoadingMessage,
              changeIsError,
              changeErrorDetails,
              changeIsSuccess,
              changeSuccessDetails,
              successDetails,
            }}
          />
          <Register
            {...{
              changeIsLoading,
              changeLoadingMessage,
              changeIsError,
              changeErrorDetails,
              errorDetails,
              changeIsSuccess,
              changeSuccessDetails,
              successDetails,
              setAuth,
            }}
          />
        </Box>
      </Box>
    </Backdrop>
  );
};

export default Auth;
