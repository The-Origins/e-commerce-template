import React, { useState } from "react";
import ConfirmEmail from "./confirmEmail";
import { Box } from "@mui/material";
import VerificationComponent from "../../../auth/verificationComponent";
import PasswordForm from "../passwordForm";
import Carousel from "../../carousel";

const ChangePassword = ({ onCancel, onFail, onComplete, setStatus }) => {
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
          setStatus,
          handleCancel,
        }}
      />
      <VerificationComponent
        onVerifyFaliure={handleFail}
        onVerifySuccess={() => setStage(2)}
        setStatus={setStatus}
      />
      <PasswordForm handleBack={handleCancel} handleNext={handleComplete} />
    </Carousel>
  );
};

export default ChangePassword;
