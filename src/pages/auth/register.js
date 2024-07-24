import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/layout/carousel";
import RegisterIntro from "../../components/auth/register/intro";
import GeneralInfo from "../../components/auth/register/general";
import PasswordForm from "../../components/forms/password";
import Address from "../../components/forms/address";
import Payment from "../../components/forms/payment";
import Currency from "../../components/auth/register/currency";
import { registerUser } from "../../state/user";
import { navigate } from "gatsby";

const Register = ({ setStatus, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");
  const theme = useTheme();
  const dispatch = useDispatch();
  const [stage, setStage] = useState(0);
  const [registerForm, setRegisterForm] = useState({});

  const region = useSelector((state) => state.session.region);

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

  const handleRegister = () => {
    //for the most updated value
    setRegisterForm((prev) => {
      dispatch(
        registerUser({
          data: prev,
          setStatus,
          onSuccess: () => {
            navigate(`/auth/login${tab ? "?tab=" + tab : ""}`);
            setStage(0);
          },
          onError: () => {
            setStage(0);
          },
        })
      );
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
        fontSize={"clamp(1rem, 5vw, 2rem)"}
        sx={{ typography: "secondaryFont", fontWeight: "bold" }}
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
        <RegisterIntro {...{ setStage, tab }} />
        <GeneralInfo {...{ setStage, setRegisterForm, region }} />
        <PasswordForm handleBack={() => setStage(1)} handleNext={addPassword} />
        <Address
          onCancel={() => setStage(2)}
          onComplete={addAddress}
          enableSkip
          onSkip={() => setStage(4)}
        />
        <Payment
          mobileValues={registerForm.phone}
          onCancel={() => setStage(3)}
          onComplete={addPayment}
          {...{ setStatus }}
          enableSkip
          onSkip={() => setStage(5)}
        />
        <Currency
          {...{
            region,
            setStage,
            setRegisterForm,
            handleRegister,
          }}
        />
      </Carousel>
    </Box>
  );
};

export default Register;
