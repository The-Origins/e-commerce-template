import React, { useState } from "react";
import SelectCheckoutChange from "./select";
import { Box } from "@mui/material";
import Payment from "../../layout/forms/payment";
import Address from "../../layout/forms/address";

const ChangeCheckoutDetail = ({
  type,
  currency,
  data,
  setIsChange,
  setStatus,
}) => {
  const [stage, setStage] = useState(0);
  const [detail, setDetail] = useState({});

  const changeDetail = (detail) => {
    setDetail(detail);
    setIsChange(false);
    setStage(0);
  };

  const handleFail = (message) => {
    setStatus({
      on: true,
      type: "ERROR",
      message: message,
      action: () => {
        setStage(1);
      },
      actionTitle: "Back to login",
    });
  };

  const stages = [
    <SelectCheckoutChange
      {...{ type, data, currency, setIsChange, setStage, setDetail }}
    />,
    type === "payment" ? (
      <Payment
        onComplete={changeDetail}
        onCancel={() => setStage(0)}
        onFail={handleFail}
        setStatus={setStatus}
      />
    ) : type === "delivery" ? (
      <Address
        onComplete={changeDetail}
        onCancel={() => setStage(0)}
        onFail={handleFail}
        setStatus={setStatus}
      />
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
