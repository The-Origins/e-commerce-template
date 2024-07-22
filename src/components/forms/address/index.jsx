import React, { useState } from "react";
import SelectAddress from "./select";
import AddressDetails from "./details";
import Carousel from "../../layout/carousel";

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

  return (
    <Carousel
      width={"100%"}
      height={"100%"}
      index={stage}
      setIndex={setStage}
      maxIndex={2}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SelectAddress
        {...{ setStage, setAddress, onCancel, enableSkip, onSkip }}
      />
      <AddressDetails
        {...{
          setStage,
          address,
          setAddress,
          handleComplete,
        }}
      />
    </Carousel>
  );
};

export default Address;
