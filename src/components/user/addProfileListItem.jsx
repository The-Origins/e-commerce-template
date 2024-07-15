import React from "react";
import Address from "../layout/forms/address";
import Payment from "../layout/forms/payment";
import { Box } from "@mui/material";

const AddProfileListItem = ({ type, setIsAdd, setStatus }) => {
  const add = (details) => {
    if (type === "address") {
      //add an address logic
    } else if (type === "payment") {
      //add a payment method logic
    }
    setStatus({
      on: true,
      type: "SUCCESS",
      message: `new ${type} added`,
      action: close,
    });
  };

  const handleErrors = (message) => {
    setStatus({
      on: true,
      type: "ERROR",
      message: message,
      action: () => {
        setIsAdd(false);
      },
    });
  };

  const close = () => {
    setIsAdd(false);
  };

  return (
    <Box width="100%" height="100%" padding={"20px 0px"}>
      {type === "address" ? (
        <Address
          onCancel={close}
          onComplete={add}
          onFail={handleErrors}
          setStatus={setStatus}
        />
      ) : (
        <Payment
          onCancel={close}
          onComplete={add}
          onFail={handleErrors}
          setStatus={setStatus}
        />
      )}
    </Box>
  );
};

export default AddProfileListItem;
