import React, { useState } from "react";
import SelectAddress from "./select";
import AddressDetails from "./details";
import { Box } from "@mui/material";

const Address = ({ onComplete, onCancel, enableSkip = false, onSkip }) => {
  const [stage, setStage] = useState(0);
  const [address, setAddress] = useState({});

  const handleComplete = () => {
    setAddress((prev) => {
      onComplete(prev);
      return prev;
    });
    setStage(0);
  };

  const stages = [
    <SelectAddress
      {...{ setStage, setAddress, onCancel, enableSkip, onSkip }}
    />,
    <AddressDetails
      {...{
        setStage,
        address,
        setAddress,
        handleComplete,
      }}
    />,
  ];

  return (
    <Box width={"100%"} height={"100%"}>
      {stages[stage]}
    </Box>
  );
};

export default Address;
