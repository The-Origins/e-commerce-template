import React, { useState } from "react";
import SelectPayment from "./select";
import CardPayment from "./card";
import MobilePayment from "./mobile";
import VerificationComponent from "../../auth/verificationComponent";
import Carousel from "../../layout/carousel";

const Payment = ({
  setStatus,
  mobileValues,
  onComplete,
  onCancel,
  enableSkip = false,
  onSkip,
}) => {
  const [stage, setStage] = useState(0);
  const [payment, setPayment] = useState({ details: {} });

  const handleComplete = () => {
    setPayment((prev) => {
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
      maxIndex={3}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SelectPayment {...{ setStage, onCancel, enableSkip, onSkip }} />
      <CardPayment
        {...{
          setStage,
          setPayment,
          handleComplete,
        }}
      />
      <MobilePayment {...{ mobileValues, setStage, setPayment }} />
      <VerificationComponent
        type="mobile"
        data={payment.details.number}
        setStatus={setStatus}
        onError={onCancel}
        onSuccess={handleComplete}
      />
    </Carousel>
  );
};

export default Payment;
