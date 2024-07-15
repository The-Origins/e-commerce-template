import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import ProductWorker from "../../scripts/productWorker";
import { navigate } from "gatsby";
import { useSelector } from "react-redux";

const ConfirmCheckout = ({ currency, setIsConfirm, setStatus, checkoutDetails }) => {
  const theme = useTheme();
  const productWorker = new ProductWorker();

  const handlePayment = () => {
    setStatus({ on: true, type: "LOADING", message: "Awaiting payment" });
    const loadingTimeout = setTimeout(() => {
      setStatus({
        on: true,
        type: "SUCCESS",
        message: "order confirmed",
        action: () => {
          setIsConfirm(false);
          navigate("/user/#orders");
        },
        actionTitle: "done",
      });
      clearTimeout(loadingTimeout);
    }, 2000);
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Typography fontWeight={"bold"}>Confirm checkout</Typography>
      <Box
        height={"100%"}
        width={"100%"}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "25px",
            bgcolor: theme.palette.grey[300],
          },
          "&::-webkit-scrollbar-thumb:hover": {
            cursor: "pointer",
            bgcolor: theme.palette.grey[400],
          },
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          padding={"20px"}
        >
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            {Object.keys(checkoutDetails.items).map((item) => {
              const product = productWorker.findProduct(item);
              const { total, ...details } = checkoutDetails.items[item];
              return (
                <Box display={"flex"} width={"100%"} gap={"10px"}>
                  <Box
                    height={"50px"}
                    width={"50px"}
                    borderRadius={"10px"}
                    sx={{
                      backgroundImage: `url(${product.images[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                    <Typography fontSize={"0.8rem"}>{product.name}</Typography>
                    <Typography fontSize={"0.8rem"} color={"text.secondary"}>
                      {Object.keys(details)
                        .map(
                          (detail) =>
                            `${
                              detail.charAt(0).toUpperCase() +
                              detail.substring(1)
                            }: ${details[detail]}`
                        )
                        .join(", ")}
                    </Typography>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Typography fontSize={"0.8rem"} color={"primary.main"}>
                        total: {currency.symbol}
                        {checkoutDetails.items[item].total}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Typography fontSize={"0.9rem"}>Deliver to:</Typography>
            <Typography fontSize={"0.9rem"} color={"text.secondary"}>
              {checkoutDetails.delivery.details?.address},{" "}
              {checkoutDetails.delivery.details?.street}
            </Typography>
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Typography fontSize={"0.9rem"}>Pay using:</Typography>
            <Typography fontSize={"0.9rem"} color={"text.secondary"}>
              {checkoutDetails.payment.details?.number}
            </Typography>
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Typography fontWeight={"bold"}>Total:</Typography>
            <Typography>
              {currency.symbol}
              {checkoutDetails.total}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => setIsConfirm(false)}>
          back
        </Button>
        <Button variant="contained" disableElevation onClick={handlePayment}>
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmCheckout;
