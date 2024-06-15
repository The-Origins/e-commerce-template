import React, { useEffect, useState } from "react";
import { East, Payment, Payments, PhoneAndroid } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import VerificationComponent from "../verificationComponent";
import { country_codes } from "../../../../lib/data";
import GeneralInfo from "./general";
import Password from "./password";
import Address from "./address";
import AddressDetails from "./addressDetails";
import CardPayment from "./cardPayment";
import MobilePayment from "./mobilePayment";

const RegisterStages = ({
  form,
  stage,
  setStage,
  address,
  setAddress,
  setPayment,
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  changeSuccessDetails,
  changeAuth,
  handleRegister,
}) => {
  const verifyMobileDetails = (values, submitProps) => {
    changeIsLoading(true);
    changeLoadingMessage("verifying");
    setTimeout(() => {
      handleRegister();
      changeIsLoading(false);
      changeIsSuccess(true);
      changeSuccessDetails({
        message: "account created successfully",
        action: () => {
          changeIsSuccess(false);
          setStage(0);
          changeAuth("login");
        },
        actionTitle: "Back to login",
      });
    }, 2000);
    submitProps.resetForm();
  };

  const stages = [
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"30px"}
      mb={"50px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Typography
          mt={"10px"}
          fontFamily={"pacifico"}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          Register
        </Typography>
        <Typography fontSize={"1.1rem"}>
          And get access to all of our services
        </Typography>
      </Box>
      <Button
        size="large"
        variant="contained"
        endIcon={<East />}
        onClick={() => setStage(1)}
      >
        Start
      </Button>
    </Box>,
    <GeneralInfo
      form={form}
      setStage={setStage}
      country_codes={country_codes}
    />,
    <Password form={form} setStage={setStage} />,
    <Address setStage={setStage} setAddress={setAddress} />,
    <AddressDetails
      setStage={setStage}
      address={address}
      setAddress={setAddress}
    />,
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Payments />
          Add a payment method
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography color={"text.secondary"}>select payment type</Typography>
          <Button
            sx={{ width: "300px", height: "50px" }}
            variant="outlined"
            startIcon={<Payment />}
            onClick={() => setStage(6)}
          >
            card
          </Button>
          <Button
            sx={{ width: "300px", height: "50px" }}
            variant="outlined"
            startIcon={<PhoneAndroid />}
            onClick={() => setStage(7)}
          >
            mobile
          </Button>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(4)}>
          Back
        </Button>
      </Box>
    </Box>,
    <CardPayment
      {...{
        setPayment,
        setStage,
        changeIsLoading,
        changeLoadingMessage,
        changeIsSuccess,
        changeSuccessDetails,
        handleRegister,
        changeAuth,
      }}
    />,
    <MobilePayment
      {...{
        setPayment,
        setStage,
        country_codes,
      }}
    />,
    <VerificationComponent type={"phone"} handleVerify={verifyMobileDetails} />,
  ];
  return stages[stage];
};

export default RegisterStages;
