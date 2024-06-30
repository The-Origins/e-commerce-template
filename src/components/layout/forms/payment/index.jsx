import React, { useState } from "react";
import SelectPayment from "./select";
import CardPayment from "./card";
import MobilePayment from "./mobile";
import VerificationComponent from "../../verificationComponent";
import { Box } from "@mui/material";

const Payment = ({
  mobileValues,
  onFail,
  onComplete,
  onCancel,
  setIsLoading,
  setLoadingMessage,
}) => {
  const [stage, setStage] = useState(0);
  const [payment, setPayment] = useState({});

  const handleFail = (message) => {
    onFail(message);
  };

  const handleComplete = () => {
    setPayment((prev) => {
      onComplete(prev);
      return prev;
    });
  };

  const stages = [
    <SelectPayment {...{ setStage, onCancel }} />,
    <CardPayment
      {...{
        setStage,
        setPayment,
        setIsLoading,
        setLoadingMessage,
        handleComplete,
        handleFail,
      }}
    />,
    <MobilePayment {...{ mobileValues, setStage, setPayment }} />,
    <VerificationComponent
      type="mobile"
      setIsLoading={setIsLoading}
      setLoadingMessage={setLoadingMessage}
      onVerifyFaliure={handleFail}
      onVerifySuccess={handleComplete}
    />,
  ];
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      {stages[stage]}
    </Box>
  );
};

export default Payment;
