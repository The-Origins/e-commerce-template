import React, { useState } from "react";
import SelectPayment from "./select";
import CardPayment from "./card";
import MobilePayment from "./mobile";
import VerificationComponent from "../../auth/verificationComponent";
import { Box } from "@mui/material";

const Payment = ({
  setStatus,
  mobileValues,
  onComplete,
  onCancel,
  enableSkip = false,
  onSkip,
}) => {
  const [stage, setStage] = useState(0);
  const [payment, setPayment] = useState({ details: {} });

  const handleComplete = () => {
    setPayment((prev) => {
      onComplete(prev);
      return prev;
    });
    setStage(0);
  };

  const stages = [
    <SelectPayment {...{ setStage, onCancel, enableSkip, onSkip }} />,
    <CardPayment
      {...{
        setStage,
        setPayment,
        handleComplete,
      }}
    />,
    <MobilePayment {...{ mobileValues, setStage, setPayment }} />,
    <VerificationComponent
      type="mobile"
      data={payment.details.number}
      setStatus={setStatus}
      onError={onCancel}
      onSuccess={handleComplete}
    />,
  ];

  return <Box width={"100%"} height={"100%"}>{stages[stage]}</Box>;
};

export default Payment;
