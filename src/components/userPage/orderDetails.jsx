import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import data from "../../lib/data";
import {
  ArrowBackIosRounded,
  Explore,
  Paid,
  Payments,
  Place,
} from "@mui/icons-material";
import UserProductCard from "../product/userProductCard";

const orderStatusColors = {
  processing: "#0382FF",
  fulfilling: "#FF9000",
  fulfilled: "#15FF02",
};

const paymentStatusColors = {
  paid: "#15FF02",
  failed: "#FF0000",
  pending: "#FF9000",
};

const deliveryStatusColors = {
  pending: "#FF9000",
  delivered: "#15FF02",
  failed: "#FF0000",
};

const actionOptions = {
  processing: "cancel order",
  fulfilled: "rate products",
};

const OrderDetails = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [order, setOrder] = useState({
    status: "",
    items: [],
    payment: { details: {} },
    delivery: { location: {} },
  });

  useEffect(() => {
    const id = Number(
      String(window.location.hash).substring(
        String(window.location.hash).indexOf("/") + 1
      )
    );
    setOrder(data.orders.find((order) => order.id === id));
  }, []);

  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: isNotPhone ? "10px" : 0,
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
      padding={isNotPhone ? "20px" : "20px 0px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box width={"100%"} display={"flex"}>
        <Link href="/user/#orders" sx={{ mb: "10px" }}>
          <IconButton>
            <ArrowBackIosRounded />
          </IconButton>
        </Link>
      </Box>
      <Box
        borderRadius={"25px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        border={`1px solid ${theme.palette.grey[400]}`}
        padding="20px"
        position={"relative"}
      >
        {actionOptions[order.status] && (
          <Button
            disableElevation
            variant="contained"
            sx={{ position: "absolute", right: 20, top: 20 }}
            size={isNotPhone ? undefined : "small"}
          >
            {actionOptions[order.status]}
          </Button>
        )}
        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
          <Box
            width={"10px"}
            height={"10px"}
            borderRadius={"50%"}
            bgcolor={orderStatusColors[order.status]}
          />
          <Typography color={orderStatusColors[order.status]}>
            {order.status.charAt(0).toUpperCase() + order.status.substring(1)}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Typography fontWeight={"bold"}>Order No:</Typography>
            <Typography>{order.id}</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Typography fontWeight={"bold"}>Placed on:</Typography>
            <Typography>{order.dateCreated}</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Typography fontWeight={"bold"}>No of Items:</Typography>
            <Typography>{order.items.length}</Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Typography fontWeight={"bold"}>Total:</Typography>
            <Typography>
              {data.user.payments.currency} {order.total}
            </Typography>
          </Box>
        </Box>
        <Box width={"100%"} display={"flex"} flexDirection={"column"}>
          <Typography ml={"5px"} color={"text.secondary"}>
            Items
          </Typography>
          <Box
            maxWidth={"100%"}
            border={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={"20px"}
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
            padding={"20px"}
          >
            {order.items.map((item, index) => (
              <UserProductCard id={index} isLink={true} item={item} />
            ))}
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={"30px"}
        >
          <Box
            flexBasis={200}
            flexGrow={1}
            border={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={"25px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"40px"}
            padding={"40px 0px"}
          >
            <Typography display={"flex"} gap={"10px"}>
              <Payments /> Payment
            </Typography>
            <Box
              width={"90%"}
              padding={"10px"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              flexDirection={isNotPhone ? "row" : "column-reverse"}
              gap={"20px"}
            >
              <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                <Paid sx={{ fontSize: "2.6rem", color: "text.secondary" }} />
                <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                  <Typography ml={"5px"} color={"text.secondary"}>
                    {order.payment.method}
                  </Typography>
                  <Typography color={"text.secondary"}>
                    {order.payment.details.number}
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                <Box
                  width={"10px"}
                  height={"10px"}
                  borderRadius={"50%"}
                  bgcolor={paymentStatusColors[order.payment.status]}
                />
                <Typography color={paymentStatusColors[order.payment.status]}>
                  {order.payment.status}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            flexBasis={200}
            flexGrow={1}
            border={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={"25px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"40px"}
            padding={"40px 0px"}
          >
            <Typography display={"flex"} gap={"10px"}>
              <Explore /> Delivery Location
            </Typography>
            <Box
              width={"90%"}
              padding={"10px"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              flexDirection={isNotPhone ? "row" : "column-reverse"}
              gap={"20px"}
            >
              <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                <Place sx={{ fontSize: "2.6rem", color: "text.secondary" }} />
                <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                  <Typography color={"text.secondary"}>
                    {order.delivery.location.address},{" "}
                    {order.delivery.location.street}
                  </Typography>
                  <Typography ml={"3px"} color={"text.secondary"}>
                    {order.delivery.location.country},{" "}
                    {order.delivery.location.city}
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                <Box
                  width={"10px"}
                  height={"10px"}
                  borderRadius={"50%"}
                  bgcolor={deliveryStatusColors[order.delivery.status]}
                />
                <Typography color={deliveryStatusColors[order.delivery.status]}>
                  {order.delivery.status}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetails;
