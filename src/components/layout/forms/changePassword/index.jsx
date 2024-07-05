import React, { useState } from "react";
import ConfirmEmail from "./confirmEmail";
import { Box } from "@mui/material";
import VerificationComponent from "../../verificationComponent";
import PasswordForm from "../passwordForm";
import Carousel from "../../carousel";

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

  return (
    <Carousel
      width={"100%"}
      height={"100%"}
      index={stage}
      setIndex={setStage}
      maxIndex={3}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ConfirmEmail
        {...{
          setStage,
          setIsLoading,
          setLoadingMessage,
          handleCancel,
        }}
      />
      <VerificationComponent
        setIsLoading={setIsLoading}
        setLoadingMessage={setLoadingMessage}
        onVerifyFaliure={handleFail}
        onVerifySuccess={() => setStage(2)}
      />
      <PasswordForm handleBack={handleCancel} handleNext={handleComplete} />
    </Carousel>
  );
};

export default ChangePassword;
