import {
  AddShoppingCart,
  ExitToApp,
  RemoveShoppingCart,
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
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProductCard from "../components/product/userProductCard";
import CheckoutDetail from "../components/checkout/checkoutDetail";
import SkeletonGroup from "../components/layout/skeletonGroup";
import EditModal from "../components/layout/modals/edit";
import ConfirmCheckout from "../components/checkout/confirm";
import NotLoggedInComponent from "../components/layout/notLoggedInComponent";
import { setSnackBar } from "../state/snackBar";
import ProductWorker from "../utils/productWorker";
import { Helmet } from "react-helmet";

const CheckoutPage = ({ location }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [isConfirm, setIsConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [checkoutDetails, setCheckoutDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const productWorker = new ProductWorker();

    setErrors((prev) =>
      productWorker.getCheckoutErrors(
        prev,
        {
          name: "items",
          value: checkoutDetails.items,
          message: "Add items to cart before checkout",
        },
        {
          name: "payment",
          value: checkoutDetails.payment?.details,
          message: "Select a payment method to checkout",
        },
        {
          name: "delivery",
          value: checkoutDetails.delivery?.details,
          message: "Select a delivery method to checkout",
        }
      )
    );
  }, [checkoutDetails]);

  useEffect(() => {
    if (!user.isFetching) {
      setIsLoading(false);
      if (user.isLoggedIn && !Object.keys(checkoutDetails).length) {
        setCheckoutDetails({
          total: user.data.addresses.saved[user.data.addresses.recent]
            ? user.data.cart.total +
              user.data.addresses.saved[user.data.addresses.recent].location
                .deliveryFee.amount
            : user.data.cart.total,
          itemsTotal: user.data.cart.total,
          items: user.data.cart.items,
          payment: {
            details: user.data.payments.saved[user.data.payments.recent],
            currency: currency.code,
          },
          delivery: {
            details: user.data.addresses.saved[user.data.addresses.recent],
          },
        });
      }
    }
  }, [user, checkoutDetails, currency.code]);

  const handleConfirm = () => {
    if (Object.keys(errors).length) {
      dispatch(
        setSnackBar({
          on: true,
          type: "ERROR",
          message: errors[Object.keys(errors)[0]],
        })
      );
    } else {
      setIsConfirm(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout | {theme.title}</title>
        <meta name="description" content="Checkout your items" />
      </Helmet>
      <Box minHeight={"100vh"} display={"flex"} justifyContent={"center"}>
        {!user.isFetching && !user.isLoggedIn && (
          <NotLoggedInComponent
            location={location}
            message={"login to check out"}
            size="large"
          />
        )}
        {(user.isLoggedIn || isLoading) && (
          <Box
            width={isNotPhone ? "80%" : "90%"}
            display={"flex"}
            gap={"30px"}
            alignItems={"flex-start"}
            mb={"50px"}
          >
            {!isLoading && (
              <EditModal
                width={"min(600px, 90%)"}
                height={"650px"}
                isEdit={isConfirm}
                handleClose={() => setIsConfirm(false)}
              >
                <ConfirmCheckout
                  {...{ currency, setIsConfirm, checkoutDetails }}
                />
              </EditModal>
            )}
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
                    sx={{ typography: "secondaryFont", fontWeight: "bold" }}
                  >
                    Summary
                  </Typography>
                  {isLoading ? (
                    <SkeletonGroup count={3} width={"200px"} />
                  ) : (
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      width={"100%"}
                    >
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography fontSize={"0.8rem"}>Subtotal</Typography>
                        <Typography fontSize={"0.8rem"}>
                          {currency.symbol} {user.data.cart?.total}
                        </Typography>
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Typography fontSize={"0.8rem"}>
                          Delivery charges
                        </Typography>
                        <Typography fontSize={"0.8rem"}>
                          {checkoutDetails.delivery.details
                            ? `${currency.symbol} ${checkoutDetails.delivery.details.location.deliveryFee.amount}`
                            : "$ 0"}
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
                    zIndex={1}
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
                    color: isLoading
                      ? "text.secondary"
                      : errors.items
                      ? theme.palette.error.main
                      : "text.secondary",
                    alignItems: "flex-end",
                  }}
                >
                  <ShoppingCart /> Items
                </Typography>
                <Box overflow={"hidden"} borderRadius={"25px"}>
                  <Box
                    border={`2px solid ${
                      isLoading
                        ? theme.palette.grey[400]
                        : errors.items
                        ? theme.palette.error.main
                        : theme.palette.grey[400]
                    }`}
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
                    ) : Object.keys(checkoutDetails.items).length ? (
                      <Box
                        width={"100%"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"20px"}
                        padding={"20px"}
                      >
                        {Object.keys(checkoutDetails.items).map((id) => (
                          <UserProductCard
                            {...{ id, user, currency, location }}
                            details={checkoutDetails.items[id]}
                            type="checkout"
                          />
                        ))}
                      </Box>
                    ) : (
                      <Box
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={"10px"}
                      >
                        <RemoveShoppingCart sx={{ fontSize: "2rem" }} />
                        <Typography>
                          Add items to your shopping cart to checkout
                        </Typography>
                        <Link to={`/cart`}>
                          <Button
                            variant="contained"
                            disableElevation
                            startIcon={<AddShoppingCart />}
                          >
                            back to cart
                          </Button>
                        </Link>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
              {isLoading ? (
                <SkeletonGroup
                  count={2}
                  flexDirection={"row"}
                  flexWrap={"wrap"}
                  height={"200px"}
                  style={{ flexBasis: 300, flexGrow: 1 }}
                />
              ) : (
                <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
                  <CheckoutDetail
                    type={"payment"}
                    {...{ user, errors, currency, setCheckoutDetails }}
                    content={
                      checkoutDetails.payment.details && {
                        title: checkoutDetails.payment.details.type,
                        description: checkoutDetails.payment.details.number,
                      }
                    }
                  />
                  <CheckoutDetail
                    type={"delivery"}
                    {...{ user, errors, currency, setCheckoutDetails }}
                    content={
                      checkoutDetails.delivery.details && {
                        title: `${checkoutDetails.delivery.details.name}`,
                        description: `${checkoutDetails.delivery.details.city}, ${checkoutDetails.delivery.details.country}`,
                        fee: checkoutDetails.delivery.details.location
                          .deliveryFee,
                      }
                    }
                  />
                </Box>
              )}
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
                <Typography
                  fontSize={"1.2rem"}
                  sx={{ typography: "secondaryFont", fontWeight: "bold" }}
                >
                  Summary
                </Typography>
                {isLoading ? (
                  <SkeletonGroup width={"200px"} count={2} />
                ) : (
                  <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Typography fontSize={"0.8rem"}>Subtotal</Typography>
                      <Typography fontSize={"0.8rem"}>
                        {currency.symbol} {user.data.cart.total}
                      </Typography>
                    </Box>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Typography fontSize={"0.8rem"}>
                        Delivery charges
                      </Typography>
                      <Typography fontSize={"0.8rem"}>
                        {checkoutDetails.delivery.details
                          ? `${currency.symbol} ${checkoutDetails.delivery.details.location.deliveryFee.amount}`
                          : "$ 0"}
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
        )}
      </Box>
    </>
  );
};

export default CheckoutPage;
