import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserProductCard from "../components/product/userProductCard";

const CheckoutPage = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const user = useSelector((state) => state.user);
  const [checkoutDetails, setCheckoutDetails] = useState({
    items: {},
    delivery: {},
    payment: {},
  });
  const [expandItems, setExpandItems] = useState(false);

  useEffect(() => {
    setCheckoutDetails({
      total: user.cart.total + user.recentDeliveryLocation.fee,
      items: user.cart.items,
      payment: user.recentPayment,
      delivery: user.recentDeliveryLocation,
    });
  }, [user]);

  const switchExpandItems = () => {
    setExpandItems((prev) => !prev);
  };

  return (
    <Box
      mt={"100px"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width={isNotPhone ? "80%" : "90%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            sx={{
              display: "flex",
              gap: "10px",
              color: "text.secondary",
              alignItems: "flex-end",
            }}
          >
            <ShoppingCart /> Items
          </Typography>
          <Box
            display={"flex"}
            border={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={"25px"}
            position={"relative"}
            height={expandItems ? "100%" : "50vh"}
            sx={{ overflow: "hidden", transition: "0.3s" }}
          >
            <Box display={"flex"} width={"100%"} flexDirection={"column"} gap={"20px"} padding={"20px"} mb={expandItems ? "50px" : undefined}>
              {Object.keys(checkoutDetails.items).map((key) => (
                <UserProductCard
                  item={checkoutDetails.items[key]}
                  user={user}
                  type="checkout"
                />
              ))}
            </Box>
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
              >
                {expandItems ? "colapse" : "expand"}
              </Button>
              <Box
                padding={"5px 10px"}
                bgcolor={"primary.main"}
                borderRadius={"10px"}
              >
                <Typography color={"white"}>
                  Subtotal:{" "}{user.region.currency}
                  {checkoutDetails.total - checkoutDetails.delivery.fee}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
