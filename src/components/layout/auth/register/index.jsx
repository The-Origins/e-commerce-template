import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "../../carousel";
import RegisterIntro from "./intro";
import GeneralInfo from "./general";
import PasswordForm from "../../forms/passwordForm";
import Address from "../../forms/address";
import Payment from "../../forms/payment";
import Currency from "./currency";
import { useSelector } from "react-redux";

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

  const region = useSelector((state) => state.region);

  const addPassword = (password) => {
    setRegisterForm((prev) => ({ ...prev, password }));
    setStage(3);
  };

  const addAddress = (address) => {
    setRegisterForm((prev) => ({ ...prev, addresses: { saved: [address] } }));
    setStage(4);
  };

  const addPayment = (payment) => {
    setRegisterForm((prev) => ({
      ...prev,
      payments: { ...prev.payments, saved: [payment] },
    }));
    setStage(5);
  };

  const handleErrors = (message) => {
    setIsError(true);
    setErrorDetails({
      message: message,
      action: () => {
        setStage(0);
        setAuth("login");
      },
      actionTitle: "Back to login",
    });
  };

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
          fontFamily={theme.fonts.secondary}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          {stage === 0 ? " " : "Register"}
        </Typography>
        <Carousel
          width={"100%"}
          height={"100%"}
          index={stage}
          setIndex={setStage}
          maxIndex={6}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <RegisterIntro {...{ setStage, setAuth }} />
          <GeneralInfo {...{ setStage, setRegisterForm, region }} />
          <PasswordForm
            handleBack={() => setStage(1)}
            handleNext={addPassword}
          />
          <Address
            onCancel={() => setStage(2)}
            onFail={handleErrors}
            onComplete={addAddress}
          />
          <Payment
            mobileValues={registerForm.phone}
            onCancel={() => setStage(3)}
            onFail={handleErrors}
            onComplete={addPayment}
            {...{ setIsLoading, setLoadingMessage }}
          />
          <Currency
            {...{
              region,
              setStage,
              setRegisterForm,
              setIsLoading,
              setLoadingMessage,
              setIsSuccess,
              setSuccessDetails,
              setAuth,
              handleRegister,
            }}
          />
        </Carousel>
      </Box>
    </Box>
  );
};

export default Register;
