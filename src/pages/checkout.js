import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkout from "../components/checkoutPage";
import { useSelector } from "react-redux";
import { KeyboardArrowDown, KeyboardArrowUp, LocalShipping, Paid, Payments, Place, ShoppingCart } from "@mui/icons-material";
import UserProductCard from "../components/product/userProductCard";
import CheckoutDetail from "../components/checkoutPage/checkoutDetail";

const CheckoutPage = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  const [checkoutDetails, setCheckOutDetails] = useState({delivery:{}, payment:{details:{}}});
  const [isLoading, setIsLoading] = useState(true)
  const [expand, setExpand] = useState(false);

  const switchExpand = () => {
    setExpand((prev) => !prev);
  };

  const handleChange = ({ target }) => {
    setCheckOutDetails((prev) => ({ ...prev, [target.name]: target.value }));
  };

  useEffect(() => {
    setCheckOutDetails({
      total: 101000,
      ...user.cart,
      delivery: user.recentDeliveryLocation,
      payment: user.recentPayment,
    });
  }, [user]);

  console.log(checkoutDetails)

  return (
    <Box mt={"100px"} display={"flex"} justifyContent={"center"}>
      <Box width={isNotPhone ? "80%" : "90%"}>
        <Box
          maxWidth={"100%"}
          padding={"20px"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          sx={{ transition: "0.3s" }}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} gap={"10px"} color={"text.secondary"}>
              <ShoppingCart />
              <Typography>Items</Typography>
            </Box>
            <Box
              height={expand ? "100%" : "48vh"}
              overflow={"hidden"}
              position={"relative"}
              sx={{ transition: "0.3s" }}
              borderRadius={"20px"}
              border={`1px solid ${theme.palette.grey[400]}`}
            >
              <Box
                position={"absolute"}
                bottom={0}
                width={"100%"}
                maxWidth={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                padding={"10px"}
                bgcolor={"white"}
                zIndex={2}
              >
                <Button
                  onClick={switchExpand}
                  startIcon={
                    expand ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  sx={{ textTransform: "lowercase", "& > span": { margin: 0 } }}
                >
                  {expand ? "colapse" : "expand"}
                </Button>
                <Typography
                  height={"100%"}
                  padding={"5px 30px"}
                  borderRadius={"10px"}
                  bgcolor={"primary.main"}
                  color={"white"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  Sub-total: {user.region.currency}{" "}
                  {checkoutDetails.total}
                </Typography>
              </Box>
              <Box
                maxWidth={"100%"}
                padding={"20px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                pb={expand && "80px"}
              >
                {Object.keys(checkoutDetails.items || {}).map((id) => (
                  <UserProductCard item={checkoutDetails.items[id]} />
                ))}
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
            <Box
              flexBasis={300}
              display={"flex"}
              flexDirection={"column"}
              flexGrow={1}
            >
              <Box display={"flex"} gap={"10px"} color={"text.secondary"}>
                <LocalShipping />
                <Typography>Delivery Location</Typography>
              </Box>
              <Box
                maxWidth={"100%"}
                padding={"20px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                border={`1px solid ${theme.palette.grey[400]}`}
                borderRadius={"20px"}
              >
                <CheckoutDetail
                  title={`${checkoutDetails.delivery.address}, ${checkoutDetails.delivery.street}`}
                  value={`${checkoutDetails.delivery.country}, ${checkoutDetails.delivery.city}`}
                  fee={checkoutDetails.delivery.fee}
                  icon={<Place
                     sx={{ fontSize: "30px" }} />}
                />
              </Box>
            </Box>
            <Box
              flexBasis={300}
              display={"flex"}
              flexDirection={"column"}
              flexGrow={1}
            >
              <Box display={"flex"} gap={"10px"} color={"text.secondary"}>
                <Payments />
                <Typography>Payment Method</Typography>
              </Box>
              <Box
                maxWidth={"100%"}
                padding={"20px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                border={`1px solid ${theme.palette.grey[400]}`}
                borderRadius={"20px"}
              >
                <CheckoutDetail
                  title={`${checkoutDetails.payment.method}`}
                  value={`${checkoutDetails.payment.details["phone number"]}`}
                  icon={<Paid sx={{ fontSize: "30px" }} />}
                />
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button disableElevation variant="contained">
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
