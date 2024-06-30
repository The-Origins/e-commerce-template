import React from "react";
import VerificationComponent from "../../verificationComponent";
import ConfirmEmail from "./confirmEmail";
import PasswordForm from "../../forms/passwordForm";
import LoginForm from "./loginForm";
import LoginIntro from "./intro";

const LoginStages = ({
  stage,
  setStage,
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
  setIsSuccess,
  setSuccessDetails,
  setAuth,
}) => {
  const changePassword = (password) => {
    console.log(password);
    setIsLoading(true);
    setLoadingMessage("Changing password");
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
      setIsSuccess(true);
      setSuccessDetails({
        message: "password changed successfully",
        action: () => {
          setStage(1);
        },
        actionTitle: "Back to login",
      });
    }, 2000);
  };

  const stages = [
    <LoginIntro {...{setStage, setAuth}} />,
    <LoginForm
      {...{
        setStage,
        setIsLoading,
        setLoadingMessage,
        setIsSuccess,
        setSuccessDetails,
        setIsError,
        setErrorDetails,
      }}
    />,
    <ConfirmEmail setStage={setStage} />,
    <PasswordForm
      handleBack={() => setStage(1)}
      handleNext={changePassword}
    />,
    <VerificationComponent
      onVerifySuccess={() => setStage(3)}
      {...{
        setIsLoading,
        setLoadingMessage,
      }}
    />,
  ];
  return stages[stage];
};

export default LoginStages;
