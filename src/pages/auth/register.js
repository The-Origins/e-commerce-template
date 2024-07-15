import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Carousel from "../../components/layout/carousel";
import RegisterIntro from "../../components/auth/register/intro";
import GeneralInfo from "../../components/auth/register/general";
import PasswordForm from "../../components/layout/forms/passwordForm";
import Address from "../../components/layout/forms/address";
import Payment from "../../components/layout/forms/payment";
import Currency from "../../components/auth/register/currency";

const Register = ({ setStatus }) => {
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
    setStatus({
      on: true,
      type: "ERROR",
      message: message,
      action: () => setStage(0),
      actionTitle: "Back",
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
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        mt={"10px"}
        fontFamily={theme.fonts.secondary}
        fontSize={"clamp(1rem, 5vw, 2rem)"}
      >
        {Boolean(stage) && "Register"}
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
        <RegisterIntro {...{ setStage }} />
        <GeneralInfo {...{ setStage, setRegisterForm, region }} />
        <PasswordForm handleBack={() => setStage(1)} handleNext={addPassword} />
        <Address
          setStatus={setStatus}
          onCancel={() => setStage(2)}
          onFail={handleErrors}
          onComplete={addAddress}
          enableSkip
          onSkip={() => setStage(4)}
        />
        <Payment
          mobileValues={registerForm.phone}
          onCancel={() => setStage(3)}
          onFail={handleErrors}
          onComplete={addPayment}
          {...{ setStatus }}
          enableSkip
          onSkip={() => setStage(5)}
        />
        <Currency
          {...{
            region,
            setStage,
            setStatus,
            setRegisterForm,
            handleRegister,
          }}
        />
      </Carousel>
    </Box>
  );
};

export default Register;
