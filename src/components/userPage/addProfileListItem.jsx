import React, { useState } from "react";
import EditModal from "../layout/editModal";
import Address from "../layout/forms/address";
import Payment from "../layout/forms/payment";
import { Box } from "@mui/material";

const AddProfileListItem = ({
  type,
  setIsAdd,
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
  setIsSuccess,
  setSuccessDetails,
}) => {
  const add = (details) => {
    if (type === "address") {
      //add an address logic
    } else if (type === "payment") {
      //add a payment method logic
    }

    setIsSuccess(true);
    setSuccessDetails({ message: `new ${type} added`, action: close });
  };

  const handleErrors = (message) => {
    setIsError(true);
    setErrorDetails({
      message: message,
      action: () => {
        setIsAdd(false);
      },
      actionTitle: "ok",
    });
  };

  const close = () => {
    setIsAdd(false);
  };

  return (
    <Box width="100%" height="100%" padding={"20px 0px"}>
      {type === "address" ? (
        <Address onCancel={close} onComplete={add} onFail={handleErrors} />
      ) : (
        <Payment
          onCancel={close}
          onComplete={add}
          onFail={handleErrors}
          {...{ setIsLoading, setLoadingMessage }}
        />
      )}
    </Box>
  );
};

export default AddProfileListItem;
