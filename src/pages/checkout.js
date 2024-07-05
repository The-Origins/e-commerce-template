import {
  ExitToApp,
  KeyboardArrowDown,
  KeyboardArrowUp,
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
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProductCard from "../components/product/userProductCard";
import CheckoutElement from "../components/checkout/checkoutDetail";
import ProductWorker from "../scripts/productWorker";
import SkeletonGroup from "../components/product/skeletonGroup";
import { navigate } from "gatsby";
import { setIsAuth } from "../state/store";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const productWorker = new ProductWorker();
  const user = useSelector((state) => state.user);
  const itemsRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [checkoutDetails, setCheckoutDetails] = useState({
    items: [],
    delivery: {},
    payment: {},
  });
  const [expandItems, setExpandItems] = useState(false);

  useEffect(() => {
    document.title = "Checkout | E-commerce";
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      let items = [];
      Object.keys(user.cart.items).forEach((item) => {
        items.push({
          product: productWorker.findProduct(item),
          ...user.cart.items[item],
        });
      });
      setCheckoutDetails({
        total:
          user.cart.total + user.addresses.saved[user.addresses.recent].fee,
        items,
        payment: user.payments.saved[user.payments.recent],
        delivery: user.addresses.saved[user.addresses.recent],
      });
      setIsLoading(false);
    } else {
      navigate("/");
      dispatch(setIsAuth(true));
    }
  }, [user]);

  const switchExpandItems = () => {
    setExpandItems((prev) => {
      itemsRef.current.style.height = !prev
        ? `${itemsRef.current.scrollHeight + 70}px`
        : "50vh";
      return !prev;
    });
  };

  return (
    <Box
      mt={"120px"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width={isNotPhone ? "80%" : "90%"}
        display={"flex"}
        gap={"30px"}
        alignItems={"flex-start"}
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
                      {user.payments.currency.symbol} {user.cart.total}
                    </Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography fontSize={"0.8rem"}>
                      Delivery charges
                    </Typography>
                    <Typography fontSize={"0.8rem"}>
                      {user.payments.currency.symbol}{" "}
                      {checkoutDetails.delivery.fee}
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
                    {user.payments.currency.symbol} {checkoutDetails.total}
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
                    Total: {user.payments.currency.symbol}{" "}
                    {checkoutDetails.total}
                  </Typography>
                )}
                <Button
                  startIcon={<ExitToApp />}
                  variant="contained"
                  disableElevation
                  disabled={isLoading}
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
              ref={itemsRef}
              display={"flex"}
              border={`1px solid ${theme.palette.grey[400]}`}
              borderRadius={"25px"}
              position={"relative"}
              height={"50vh"}
              sx={{ overflow: "hidden", transition: "height 0.3s ease-out" }}
            >
              {isLoading ? (
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={"50vh"}
                ></Skeleton>
              ) : (
                <Box
                  display={"flex"}
                  width={"100%"}
                  flexDirection={"column"}
                  gap={"20px"}
                  padding={"20px"}
                  sx={{ transition: "0.3s" }}
                >
                  {checkoutDetails.items.map((item) => (
                    <UserProductCard item={item} user={user} type="checkout" />
                  ))}
                </Box>
              )}
              <Box
                position={"absolute"}
                bottom={0}
                width={"100%"}
                height={"50px"}
                bgcolor={"white"}
                zIndex={1}
                boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"20px"}
              >
                <Button
                  size="small"
                  variant="text"
                  startIcon={
                    expandItems ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  onClick={switchExpandItems}
                  sx={{ textTransform: "none" }}
                >
                  {expandItems ? "colapse" : "expand"}
                </Button>
                {isLoading ? (
                  <Skeleton
                    variant="rounded"
                    width={"200px"}
                    height={"20px"}
                  ></Skeleton>
                ) : (
                  <Box
                    padding={"5px 10px"}
                    bgcolor={"primary.main"}
                    borderRadius={"10px"}
                  >
                    <Typography color={"white"}>
                      Subtotal: {user.payments.currency.symbol}{" "}
                      {user.cart.total}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <CheckoutElement
              icon={<Payments />}
              type={"payment"}
              user={user}
              isLoading={isLoading}
              content={
                isLoading
                  ? undefined
                  : {
                      title: checkoutDetails.payment.type,
                      description: checkoutDetails.payment.number,
                      icon: <Paid sx={{ fontSize: "2rem" }} />,
                    }
              }
            />
            <CheckoutElement
              icon={<LocalShipping />}
              type={"delivery"}
              user={user}
              isLoading={isLoading}
              content={
                isLoading
                  ? undefined
                  : {
                      title: `${checkoutDetails.delivery.address}, ${checkoutDetails.delivery.street}`,
                      description: `${checkoutDetails.delivery.city}, ${checkoutDetails.delivery.country}`,
                      fee: checkoutDetails.delivery.fee,
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
                    {user.payments.currency.symbol} {user.cart.total}
                  </Typography>
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography fontSize={"0.8rem"}>Delivery charges</Typography>
                  <Typography fontSize={"0.8rem"}>
                    {user.payments.currency.symbol}{" "}
                    {checkoutDetails.delivery.fee}
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
                  {user.payments.currency.symbol} {checkoutDetails.total}
                </Typography>
              </Box>
            )}
            <Button
              startIcon={<ExitToApp />}
              variant="contained"
              disableElevation
              disabled={isLoading}
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
