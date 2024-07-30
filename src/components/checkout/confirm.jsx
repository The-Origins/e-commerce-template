import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { checkOutUser } from "../../state/user";
import FetchWorker from "../../utils/fetchWorker";
import { setSnackBar } from "../../state/snackBar";

const ConfirmCheckout = ({
  currency,
  setIsConfirm,
  setStatus,
  checkoutDetails,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWorker = new FetchWorker();
    fetchWorker
      .fetchProducts(Object.keys(checkoutDetails.items))
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        dispatch(
          setSnackBar({
            on: true,
            type: "ERROR",
            message: `Error fetching order items: ${err}`,
          })
        );
      });
  }, [checkoutDetails]);

  const handlePayment = () => {
    dispatch(
      checkOutUser({
        data: checkoutDetails,
        setStatus,
        onSuccess: () => {
          setIsConfirm(false);
          navigate("/");
        },
        onError: () => {
          setIsConfirm(false);
        },
      })
    );
  };

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
      padding={"20px 0px"}
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            gap={"10px"}
          >
            {products.map((product) => {
              const { total, ...details } = checkoutDetails.items[product.id];
              return (
                <Box display={"flex"} width={"100%"} gap={"10px"}>
                  <Box
                    height={"40px"}
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
                  </Box>
                  <Box display={"flex"} alignItems={"flex-start"}>
                    <Typography fontSize={"0.8rem"} color={"primary.main"}>
                      {currency.symbol}
                      {checkoutDetails.items[product.id].total}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Typography fontSize={"0.9rem"}>Deliver to:</Typography>
            <Typography fontSize={"0.9rem"} color={"text.secondary"}>
              {checkoutDetails.delivery.details?.name},{" "}
              {checkoutDetails.delivery.details?.city}
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
        <Button
          variant="contained"
          disableElevation
          disabled={!Object.keys(checkoutDetails.items || {}).length}
          onClick={handlePayment}
        >
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmCheckout;
