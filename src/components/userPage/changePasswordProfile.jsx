import React from "react";
import ChangePassword from "../layout/forms/changePassword";

const ChangePasswordProfile = ({
  setIsChangePassword,
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
  setIsSuccess,
  setSuccessDetails,
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
          setIsChangePassword(false);
        },
      });
    }, 2000);
  };

  const handleFail = (message) => {
    setIsError(true);
    setErrorDetails({
      message: message,
      action: () => {
        setIsChangePassword(false);
      },
      actionTitle: "Back to login",
    });
  };
  return (
    <ChangePassword
      onCancel={() => setIsChangePassword(false)}
      onFail={handleFail}
      onComplete={changePassword}
      {...{ setIsLoading, setLoadingMessage }}
    />
  );
};

export default ChangePasswordProfile;
