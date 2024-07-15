import React from "react";
import ChangePassword from "../layout/forms/changePassword";

const ChangePasswordProfile = ({
  setIsChangePassword,
  setStatus,
}) => {
  const changePassword = (password) => {
    console.log(password);
    setStatus({ on: true, type: "LOADING", message: "changing password" });
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      setStatus({
        on: true,
        type: "SUCCESS",
        message: "password changed successfully",
        action: () => {
          setIsChangePassword(false);
        },
        actionTitle: "Back to login",
      });
    }, 2000);
  };

  const handleFail = (message) => {
    setStatus({
      on: true,
      type: "ERROR",
      message: message,
      action: () => {
        setIsChangePassword(false);
      },
    });
  };
  
  return (
    <ChangePassword
      onCancel={() => setIsChangePassword(false)}
      onFail={handleFail}
      onComplete={changePassword}
      setStatus={setStatus}
    />
  );
};

export default ChangePasswordProfile;
