import {
  Box,
  Button,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import EditModal from "../layout/modals/edit";
import ChangeCheckoutDetail from "./changeCheckoutDetail";
import { LocalShipping, Paid, Payments, Place } from "@mui/icons-material";

const CheckoutDetail = ({
  type,
  user,
  errors,
  currency,
  content,
  setCheckoutDetails,
}) => {
  user = user.data;
  const theme = useTheme();
  const [isChange, setIsChange] = useState(false);

  const changePayment = (payment) => {
    setCheckoutDetails((prev) => ({
      ...prev,
      payment: { ...prev.payment, details: payment },
    }));
  };

  const changeAddress = (address) => {
    setCheckoutDetails((prev) => ({
      ...prev,
      delivery: { ...prev.address, details: address },
      total: prev.itemsTotal + address.location.deliveryFee.amount,
    }));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} flexBasis={300} flexGrow={1}>
      <EditModal
        width={"min(500px, 90%)"}
        height={"600px"}
        isEdit={isChange}
        handleClose={() => setIsChange(false)}
      >
        <ChangeCheckoutDetail
          {...{ type, currency, setIsChange, changeAddress, changePayment }}
          data={
            type === "payment"
              ? user.payments.saved
              : type === "delivery"
              ? user.addresses.saved
              : []
          }
        />
      </EditModal>
      <Typography
        sx={{
          ml: "10px",
          display: "flex",
          gap: "10px",
          color: errors[type] ? theme.palette.error.main : "text.secondary",
          alignItems: "flex-end",
        }}
      >
        {type === "delivery" ? (
          <LocalShipping />
        ) : type === "payment" ? (
          <Payments />
        ) : (
          ""
        )}{" "}
        {type.charAt(0).toUpperCase() + type.substring(1)}
      </Typography>
      <Box
        border={`1px solid ${
          errors[type] ? theme.palette.error.main : theme.palette.grey[400]
        }`}
        borderRadius={"25px"}
        padding={"20px 40px"}
        display={"flex"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          padding={"20px"}
          borderRadius={"25px"}
          boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
        >
          <Box display={"flex"} gap={"5px"} alignItems={"center"}>
            {type === "payment" ? (
              <Paid sx={{ fontSize: "2rem" }} />
            ) : type === "delivery" ? (
              <Place sx={{ fontSize: "2rem" }} />
            ) : (
              ""
            )}
            {content ? (
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                gap={"5px"}
              >
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography>{content.title}</Typography>
                  {content.fee && (
                    <Tooltip title="fee" placement="left">
                      <Typography color={"primary.main"}>
                        +{currency.symbol}
                        {content.fee.amount}
                      </Typography>
                    </Tooltip>
                  )}
                </Box>
                <Typography color={"text.secondary"}>
                  {content.description}
                </Typography>
              </Box>
            ) : (
              <Typography padding={"13px 0px"}>None selected</Typography>
            )}
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => setIsChange(true)}
            >
              {content ? "change" : "select"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutDetail;
