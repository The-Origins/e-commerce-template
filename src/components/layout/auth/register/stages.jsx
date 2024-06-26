import React from "react";
import { East, Payment, Payments, PhoneAndroid } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import VerificationComponent from "../verificationComponent";
import { country_codes } from "../../../../lib/data";
import GeneralInfo from "./general";
import Address from "./address";
import AddressDetails from "./addressDetails";
import CardPayment from "./cardPayment";
import MobilePayment from "./mobilePayment";
import { useSelector } from "react-redux";
import PasswordComponent from "../passwordComponent";
import AuthWorker from "../../../../scripts/authWorker";
import { countries } from "country-data";
import Currency from "./currency";

const RegisterStages = ({
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
}) => {
  const authWorker = new AuthWorker();
  const region = useSelector((state) => state.region);
  const callingCodes = authWorker.getCallingCodes();

  const addPassword = (password) => {
    setRegisterForm((prev) => ({ ...prev, password }));
    setStage(3);
  };

  const onVerifySuccess = () => {
    setStage(8);
  };

  const onVerifyFaliure = () => {
    setIsError(true);
    setErrorDetails({
      message: "There was an error verifing your phone number",
      action: () => {
        setStage(0);
        setAuth("login");
      },
      actionTitle: "Back to login",
    });
  };

  const stages = [
    <Box
      height={"100%"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"30px"}
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
      <Button
        onClick={() => setAuth("login")}
        sx={{
          mt: "50px",
          textTransform: "none",
          ":hover": { textDecoration: "underline" },
        }}
      >
        Already have an account?
      </Button>
    </Box>,
    <GeneralInfo {...{ setStage, setRegisterForm, region, callingCodes }} />,
    <PasswordComponent
      handleBack={() => setStage(1)}
      handleNext={addPassword}
    />,
    <Address {...{ region, setStage, setRegisterForm }} />,
    <AddressDetails {...{ setStage, registerForm, setRegisterForm }} />,
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
        setStage,
        setRegisterForm,
      }}
    />,
    <MobilePayment
      {...{
        setStage,
        registerForm,
        setRegisterForm,
        callingCodes,
      }}
    />,
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
    />,
    <VerificationComponent
      type={"phone"}
      {...{
        setIsLoading,
        setLoadingMessage,
        onVerifySuccess,
        onVerifyFaliure,
      }}
    />,
  ];
  return stages[stage];
};

export default RegisterStages;
