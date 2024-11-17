import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import UserProductCard from "../product/userProductCard";
import { useDispatch } from "react-redux";
import FetchWorker from "../../utils/fetchWorker";
import { setSnackBar } from "../../state/snackBar";
import { Link } from "gatsby";

const UserOrders = ({ location, user, currency, setIsLoading }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchWorker = new FetchWorker();
    setIsLoading(true);
    if (!user.isFetching) {
      fetchWorker
        .fetchOrders(user.data.orders)
        .then((res) => {
          setOrders(res);
          setIsLoading(false);
        })
        .catch((err) => {
          dispatch(
            setSnackBar({
              on: true,
              type: "ERROR",
              message: `Error fetching orders: ${err}`,
            })
          );
          setIsLoading(false);
        });
    }
  }, [ user.data.orders, user.isFetching, dispatch, setIsLoading]);

  return (
    <Box
      padding={isNotPhone ? "20px" : "20px 0px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {orders.map((order) => (
        <Link
          to={`/user/order/${order.id}`}
          style={{ width:"100%", textDecoration: "none", color: "black" }}
        >
          <Box
            mb={"10px"}
            border={`1px solid ${theme.palette.grey[400]}`}
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"25px"}
            padding={"20px"}
            sx={{
              transition: "0.3s",
              ":hover": {
                boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
                cursor: "pointer",
              },
            }}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={"20px 0px"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <Box
                  width={"10px"}
                  height={"10px"}
                  borderRadius={"50%"}
                  bgcolor={theme.palette.status.order[order.status]}
                />
                <Typography color={theme.palette.status.order[order.status]}>
                  {order.status.charAt(0).toUpperCase() +
                    order.status.substring(1)}
                </Typography>
              </Box>
              <Box display={"flex"} gap={"1px"} alignItems={"center"}>
                <CalendarMonth
                  fontSize={"clamp(0.8rem, 3vw, 1rem)"}
                  sx={{ color: "text.secondary" }}
                />
                <Typography
                  color={"text.secondary"}
                  fontSize={"clamp(0.8rem, 3vw, 1rem)"}
                >
                  {order.dateCreated}
                </Typography>
              </Box>
            </Box>
            <Box
              width={"100%"}
              padding={"20px 0px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              {Object.keys(order.items).map((id) => {
                return (
                  <UserProductCard
                    {...{ id, user, currency, location}}
                    details={order.items[id]}
                    type={"orders"}
                  />
                );
              })}
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default UserOrders;
