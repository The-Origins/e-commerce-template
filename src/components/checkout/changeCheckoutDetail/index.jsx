import React, { useState } from "react";
import SelectCheckoutChange from "./select";
import { Box } from "@mui/material";
import Payment from "../../forms/payment";
import Address from "../../forms/address";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../state/user";

const ChangeCheckoutDetail = ({
  type,
  currency,
  data,
  setIsChange,
  setStatus,
  changeAddress,
  changePayment,
}) => {
  const dispatch = useDispatch();
  const [stage, setStage] = useState(0);

  const handleSelect = (detail) => {
    if (type === "payment") {
      changePayment(detail);
    } else if (type === "delivery") {
      changeAddress(detail);
    }
    setStage(0);
    setIsChange(false);
  };

  const addNew = (detail) => {
    dispatch(
      updateUser({
        path:
          type === "payment"
            ? "payments"
            : type === "delivery"
            ? "addresses"
            : "",
        action: "ADD",
        data: detail,
        setStatus,
        onSuccess: () => handleSelect(detail),
        onError: () => setStage(0),
      })
    );
  };

  const stages = [
    <SelectCheckoutChange
      {...{ type, data, currency, setIsChange, setStage, handleSelect }}
    />,
    type === "payment" ? (
      <Payment
        onComplete={addNew}
        onCancel={() => setStage(0)}
        setStatus={setStatus}
      />
    ) : type === "delivery" ? (
      <Address onComplete={addNew} onCancel={() => setStage(0)} />
    ) : (
      <></>
    ),
  ];
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      pb={"20px"}
    >
      {stages[stage]}
    </Box>
  );
};

export default ChangeCheckoutDetail;
