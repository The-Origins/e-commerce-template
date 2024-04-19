import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CalendarMonth,
  KeyboardArrowDown,
  KeyboardArrowUp,
  LocalShipping,
  Paid,
  Payments,
  Place,
  ShoppingCart,
} from "@mui/icons-material";
import UserProductCard from "../product/userProductCard";
import CheckoutDetail from "./checkoutDetail";

const Checkout = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [expand, setExpand] = useState(false);

  const switchExpand = () => {
    setExpand((prev) => !prev);
  };

  return props.user.name && Object.keys(props.checkoutDetails).length ? (
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
              startIcon={expand ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
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
              Sub-total: {props.user.region.currency}{" "}
              {props.checkoutDetails.total}
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
            {Object.keys(props.checkoutDetails.items || {}).map((id) => (
              <UserProductCard item={props.checkoutDetails.items[id]} />
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
              title={`${props.checkoutDetails.delivery.address}, ${props.checkoutDetails.delivery.street}`}
              value={`${props.checkoutDetails.delivery.country}, ${props.checkoutDetails.delivery.city}`}
              fee={props.checkoutDetails.delivery.fee}
              icon={<Place sx={{ fontSize: "30px" }} />}
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
              title={`${props.checkoutDetails.payment.method}`}
              value={`${props.checkoutDetails.payment.details["phone number"]}`}
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
  ) : (
    <></>
  );
};

export default Checkout;
