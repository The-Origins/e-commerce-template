import React from "react";
import GeneralInfo from "./general";
import { useSelector } from "react-redux";
import PasswordForm from "../../forms/passwordForm";
import Currency from "./currency";
import Address from "../../forms/address";
import Payment from "../../forms/payment";
import RegisterIntro from "./intro";

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
  const region = useSelector((state) => state.region);

  const addPassword = (password) => {
    setRegisterForm((prev) => ({ ...prev, password }));
    setStage(3);
  };

  const addAddress = (address) => {
    setRegisterForm((prev) => ({ ...prev, addresses: { saved: [address] } }));
    setStage(4)
  };

  const addPayment = (payment) => {
    setRegisterForm((prev) => ({
      ...prev,
      payments: { ...prev.payments, saved: [payment] },
    }));
    setStage(5);
  };

  const handleErrors = (message) => {
    setIsError(true);
    setErrorDetails({
      message: message,
      action: () => {
        setStage(0);
        setAuth("login");
      },
      actionTitle: "Back to login",
    });
  };

  const stages = [
    <RegisterIntro {...{ setStage, setAuth }} />,
    <GeneralInfo {...{ setStage, setRegisterForm, region }} />,
    <PasswordForm handleBack={() => setStage(1)} handleNext={addPassword} />,
    <Address
      onCancel={() => setStage(2)}
      onFail={handleErrors}
      onComplete={addAddress}
    />,
    <Payment
      mobileValues={registerForm.phone}
      onCancel={() => setStage(3)}
      onFail={handleErrors}
      onComplete={addPayment}
      {...{ setIsLoading, setLoadingMessage }}
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
  ];
  return stages[stage];
};

export default RegisterStages;
