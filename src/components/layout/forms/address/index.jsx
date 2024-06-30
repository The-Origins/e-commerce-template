import React, { useState } from "react";
import { Box } from "@mui/material";
import SelectAddress from "./select";
import AddressDetails from "./details";

const Address = ({ onFail, onComplete, onCancel }) => {
  const [stage, setStage] = useState(0);
  const [address, setAddress] = useState({});

  const handleFail = (message) => {
    onFail(message);
  };

  const handleComplete = () => {
    setAddress((prev) => {
      onComplete(prev);
      return prev
    });
  };

  const stages = [
    <SelectAddress {...{ setStage, setAddress, onCancel }} />,
    <AddressDetails {...{ setStage, address, setAddress, handleComplete, handleFail }} />,
  ];
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
    >
      {stages[stage]}
    </Box>
  );
};

export default Address;
