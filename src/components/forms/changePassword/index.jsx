import React, { useState } from "react";
import ConfirmEmail from "./confirmEmail";
import VerificationComponent from "../../auth/verificationComponent";
import PasswordForm from "../password";
import Carousel from "../../layout/carousel";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../state/user";

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
          onCancel,
          email,
          setEmail,
        }}
      />
      <VerificationComponent
        data={email}
        onSuccess={() => setStage(2)}
        onError={onCancel}
        setStatus={setStatus}
      />
      <PasswordForm handleBack={onCancel} handleNext={handleComplete} />
    </Carousel>
  );
};

export default ChangePassword;
