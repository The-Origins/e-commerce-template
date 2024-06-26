import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "../../../state/store";
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
      dispatch(setIsAuth(false));
    },
    actionTitle: "ok",
  });
  const [errorDetails, setErrorDetails] = useState({
    message: "",
    action: () => {
      dispatch(setIsAuth(false));
    },
    actionTitle: "ok",
  });
  const [loadingMessage, setLoadingMessage] = useState("");
  const [auth, setAuth] = useState("login");

  const resetDetails = () => {
    setIsSuccess(false);
    setSuccessDetails({
      message: "",
      action: () => {
        dispatch(setIsAuth(false));
      },
      actionTitle: "ok",
    });
    setIsError(false);
    setErrorDetails({
      message: "",
      action: () => {
        dispatch(setIsAuth(false));
      },
      actionTitle: "ok",
    });
  };

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 100 }} open={isAuth}>
      <Box
        width={isNotPhone ? "40%" : "90%"}
        height={"90%"}
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
          <ErrorComponent details={errorDetails} resetDetails={resetDetails} />
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
          justifyContent={"flex-end"}
          padding={"20px"}
        >
          <IconButton onClick={() => dispatch(setIsAuth(false))}>
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
              setIsLoading,
              setLoadingMessage,
              setIsError,
              setErrorDetails,
              setIsSuccess,
              setSuccessDetails,
              setAuth,
            }}
          />
          <Register
            {...{
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
    </Backdrop>
  );
};

export default Auth;
