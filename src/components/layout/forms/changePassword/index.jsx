import React, { useState } from "react";
import ConfirmEmail from "./confirmEmail";
import { Box } from "@mui/material";
import VerificationComponent from "../../verificationComponent";
import PasswordForm from "../passwordForm";

const ChangePassword = ({
  setIsLoading,
  setLoadingMessage,
  onCancel,
  onFail,
  onComplete,
}) => {
  const [stage, setStage] = useState(0);

  const handleCancel = () => {
    onCancel();
  };

  const handleFail = () => {
    onFail();
  };

  const handleComplete = (password) => {
    setStage(0);
    onComplete(password);
  };

  const stages = [
    <ConfirmEmail
      {...{
        setStage,
        setIsLoading,
        setLoadingMessage,
        handleCancel,
      }}
    />,
    <VerificationComponent
      setIsLoading={setIsLoading}
      setLoadingMessage={setLoadingMessage}
      onVerifyFaliure={handleFail}
      onVerifySuccess={() => setStage(2)}
    />,
    <PasswordForm handleBack={handleCancel} handleNext={handleComplete} />,
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

export default ChangePassword;
