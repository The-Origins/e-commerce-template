import React, { useState } from "react";
import ConfirmEmail from "./confirmEmail";
import VerificationComponent from "../../auth/verificationComponent";
import PasswordForm from "../password";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../state/user";
import { Box } from "@mui/material";

const ChangePassword = ({ onCancel, onComplete, setStatus }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(0);

  const handleComplete = (password) => {
    dispatch(
      updateUser({
        path: "password",
        action: "EDIT",
        data: { email, password },
        setStatus,
        onSuccess: () => {
          onComplete();
          setStage(0);
        },
        onError: () => {
          onCancel();
          setStage(0);
        },
      })
    );
  };

  const stages = [
    <ConfirmEmail
      {...{
        setStage,
        setStatus,
        onCancel,
        email,
        setEmail,
      }}
    />,
    <VerificationComponent
      data={email}
      onSuccess={() => setStage(2)}
      onError={onCancel}
      setStatus={setStatus}
    />,
    <PasswordForm handleBack={onCancel} handleNext={handleComplete} />,
  ];

  return (
    <Box width={"100%"} height={"100%"}>
      {stages[stage]}
    </Box>
  );
};

export default ChangePassword;
