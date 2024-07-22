import React from "react";
import Address from "../forms/address";
import Payment from "../forms/payment";
import { Box } from "@mui/material";
import { updateUser } from "../../state/user";
import { useDispatch } from "react-redux";

const AddProfileListItem = ({ type, setIsAdd, setStatus }) => {
  const dispatch = useDispatch();

  const addNew = (detail) => {
    dispatch(
      updateUser({
        path:
          type === "payment"
            ? "payments"
            : type === "address"
            ? "addresses"
            : "",
        action: "ADD",
        data: detail,
        setStatus,
        onSuccess: close,
        onError: close,
      })
    );
  };

  const close = () => {
    setIsAdd(false);
  };

  return (
    <Box width="100%" height="100%" padding={"20px 0px"}>
      {type === "address" ? (
        <Address onCancel={close} onComplete={addNew}/>
      ) : (
        <Payment onCancel={close} onComplete={addNew} setStatus={setStatus} />
      )}
    </Box>
  );
};

export default AddProfileListItem;
