import {
  ExitToApp,
  LocalShipping,
  Paid,
  Payments,
  Place,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserProductCard from "../components/product/userProductCard";
import CheckoutDetail from "../components/checkout/checkoutDetail";
import SkeletonGroup from "../components/layout/skeletonGroup";
import { navigate } from "gatsby";
import EditModal from "../components/layout/editModal";
import ConfirmCheckout from "../components/checkout/confirm";

const CheckoutPage = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const currency = useSelector((state) => state.currency);
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [isConfirm, setIsConfirm] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState({
    items: [],
    delivery: {},
    payment: {},
  });

  useEffect(() => {
    document.title = "Checkout | E-commerce";
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      setCheckoutDetails({
        total:
          user.cart.total +
          user.addresses.saved[user.addresses.recent].fee.amount,
        items: user.cart.items,
        payment: {
          details: user.payments.saved[user.payments.recent],
          currency: currency.code,
        },
        delivery: { details: user.addresses.saved[user.addresses.recent] },
      });
      setIsLoading(false);
    } else {
      navigate("/auth/login");
    }
  }, [user]);

  const handleConfirm = () => {
    setIsConfirm(true);
  };

  return (
    <Box
      mt={"120px"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <EditModal
        width={"min(600px, 90%)"}
        height={"650px"}
        isEdit={isConfirm}
        handleClose={() => setIsConfirm(false)}
      >
        <ConfirmCheckout {...{ currency, setIsConfirm, checkoutDetails }} />
      </EditModal>
      <Box
        width={isNotPhone ? "80%" : "90%"}
        display={"flex"}
        gap={"30px"}
        alignItems={"flex-start"}
        mb={"50px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          {!isNotPhone && (
            <Box
              mt={"20px"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
              borderRadius={"25px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              gap={"20px"}
              padding={"20px 40px"}
            >
              <Typography
                fontSize={"1.2rem"}
                fontFamily={theme.fonts.secondary}
              >
                Summary
              </Typography>
              {isLoading ? (
                <SkeletonGroup count={3} width={"200px"} />
              ) : (
                <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography fontSize={"0.8rem"}>Subtotal</Typography>
                    <Typography fontSize={"0.8rem"}>
                      {currency.symbol} {user.cart.total}
                    </Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography fontSize={"0.8rem"}>
                      Delivery charges
                    </Typography>
                    <Typography fontSize={"0.8rem"}>
                      {currency.symbol}{" "}
                      {checkoutDetails.delivery.details.fee.amount}
                    </Typography>
                  </Box>
                </Box>
              )}
              {isLoading ? (
                <Skeleton width={"200px"} variant="rounded" />
              ) : (
                <Box
                  display={"flex"}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={"bold"}>Total</Typography>
                  <Typography fontWeight={"bold"}>
                    {currency.symbol} {checkoutDetails.total}
                  </Typography>
                </Box>
              )}
              <Box
                position={"fixed"}
                bottom={0}
                width={"100%"}
                padding={"20px"}
                boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                zIndex={2}
                bgcolor={"white"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                borderRadius={"25px 25px 0px 0px"}
              >
                {isLoading ? (
                  <Skeleton variant="rounded" width={"200px"} />
                ) : (
                  <Typography
                    padding={"10px"}
                    border={`1px solid ${theme.palette.grey[400]}`}
                    borderRadius={"10px"}
                    fontSize={"0.9rem"}
                  >
                    Total: {currency.symbol} {checkoutDetails.total}
                  </Typography>
                )}
                <Button
                  startIcon={<ExitToApp />}
                  variant="contained"
                  disableElevation
                  disabled={isLoading}
                  onClick={handleConfirm}
                >
                  Confirm
                </Button>
              </Box>
            </Box>
          )}
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                ml: "10px",
                display: "flex",
                gap: "10px",
                color: "text.secondary",
                alignItems: "flex-end",
              }}
            >
              <ShoppingCart /> Items
            </Typography>
            <Box
              border={`1px solid ${theme.palette.grey[400]}`}
              borderRadius={"25px"}
              height={"50vh"}
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
              {isLoading ? (
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={"50vh"}
                ></Skeleton>
              ) : (
                <Box
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"20px"}
                  padding={"20px"}
                >
                  {Object.keys(checkoutDetails.items).map((item) => (
                    <UserProductCard
                      id={item}
                      details={checkoutDetails.items[item]}
                      user={user}
                      currency={currency}
                      type="checkout"
                    />
                  ))}
                </Box>
              )}
            </Box>
          </Box>
          <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <CheckoutDetail
              icon={<Payments />}
              type={"payment"}
              {...{ user, currency, isLoading }}
              content={
                isLoading
                  ? undefined
                  : {
                      title: checkoutDetails.payment.details.type,
                      description: checkoutDetails.payment.details.number,
                      icon: <Paid sx={{ fontSize: "2rem" }} />,
                    }
              }
            />
            <CheckoutDetail
              icon={<LocalShipping />}
              type={"delivery"}
              {...{ user, currency, isLoading }}
              content={
                isLoading
                  ? undefined
                  : {
                      title: `${checkoutDetails.delivery.details.address}, ${checkoutDetails.delivery.details.street}`,
                      description: `${checkoutDetails.delivery.details.city}, ${checkoutDetails.delivery.details.country}`,
                      fee: checkoutDetails.delivery.details.fee,
                      icon: <Place sx={{ fontSize: "2rem" }} />,
                    }
              }
            />
          </Box>
        </Box>
        {isNotPhone && (
          <Box
            mt={"20px"}
            boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
            borderRadius={"25px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            gap={"20px"}
            padding={"20px 40px"}
            width={"300px"}
          >
            <Typography fontSize={"1.2rem"} fontFamily={theme.fonts.secondary}>
              Summary
            </Typography>
            {isLoading ? (
              <SkeletonGroup width={"200px"} count={2} />
            ) : (
              <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography fontSize={"0.8rem"}>Subtotal</Typography>
                  <Typography fontSize={"0.8rem"}>
                    {currency.symbol} {user.cart.total}
                  </Typography>
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography fontSize={"0.8rem"}>Delivery charges</Typography>
                  <Typography fontSize={"0.8rem"}>
                    {currency.symbol}{" "}
                    {checkoutDetails.delivery.details.fee.amount}
                  </Typography>
                </Box>
              </Box>
            )}
            {isLoading ? (
              <Skeleton variant="rounded" width={"200px"} />
            ) : (
              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Typography fontWeight={"bold"}>Total</Typography>
                <Typography fontWeight={"bold"}>
                  {currency.symbol} {checkoutDetails.total}
                </Typography>
              </Box>
            )}
            <Button
              startIcon={<ExitToApp />}
              variant="contained"
              disableElevation
              disabled={isLoading}
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CheckoutPage;
