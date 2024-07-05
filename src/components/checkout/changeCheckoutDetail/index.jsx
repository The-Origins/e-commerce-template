import React, { useState } from "react";
import SelectCheckoutChange from "./select";
import { Box } from "@mui/material";
import Payment from "../../layout/forms/payment";
import Address from "../../layout/forms/address";

const ChangeCheckoutDetail = ({
  type,
  data,
  selected,
  setIsChange,
  setIsLoading,
  setLoadingMessage,
  setIsError,
  setErrorDetails,
}) => {
  const [stage, setStage] = useState(0);
  const [detail, setDetail] = useState(selected);

  const changeDetail = (detail) => {
    setDetail(detail);
    setIsChange(false);
    setStage(0);
  };

  const onFail = (message) => {
    setIsError(true);
    setErrorDetails({
      message,
      action: () => setIsChange(false),
    });
  };

  const stages = [
    <SelectCheckoutChange
      {...{ type, data, selected, setIsChange, setStage, setDetail }}
    />,
    type === "payment" ? (
      <Payment
        onComplete={changeDetail}
        onCancel={() => setStage(0)}
        onFail={onFail}
        {...{ setIsLoading, setLoadingMessage }}
      />
    ) : type === "delivery" ? (
      <Address
        onComplete={changeDetail}
        onCancel={() => setStage(0)}
        onFail={onFail}
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
