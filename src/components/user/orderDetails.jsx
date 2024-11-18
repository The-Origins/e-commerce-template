import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ArrowBackIosRounded,
  Explore,
  Paid,
  Payments,
  Place,
} from "@mui/icons-material";
import UserProductCard from "../product/userProductCard";
import FetchWorker from "../../utils/fetchWorker";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../../state/snackBar";
import { Link } from "gatsby";

const OrderDetails = ({location, user, currency, setIsLoading }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [order, setOrder] = useState();

  useEffect(() => {
    const [id] = location.pathname.replace(__PATH_PREFIX__, "").split("/").slice(3)
    const fetchWorker = new FetchWorker();
    setIsLoading(true);
    fetchWorker
      .fetchOrder(id)
      .then((res) => {
        setOrder(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(
          setSnackBar({
            on: true,
            type: "ERROR",
            message: `Error fetching order: ${err}`,
          })
        );
      });
  }, [location, dispatch, setIsLoading]);

  return (
    <Box
      padding={isNotPhone ? "20px" : "20px 0px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box width={"100%"} display={"flex"}>
        <Link to={`/user/orders`} style={{ mb: "10px" }}>
          <IconButton>
            <ArrowBackIosRounded />
          </IconButton>
        </Link>
      </Box>
      {order && (
        <Box
          borderRadius={"25px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          border={`1px solid ${theme.palette.grey[400]}`}
          padding="20px"
          position={"relative"}
        >
          {(order.status === "fulfilling" || order.status === "fulfilled") && (
            <Button
              disableElevation
              variant="contained"
              sx={{ position: "absolute", right: 20, top: 20 }}
              size={isNotPhone ? "medium" : "small"}
            >
              {order.status === "fulfilling"
                ? "cancel order"
                : order.status === "fulfilled"
                ? "return products"
                : ""}
            </Button>
          )}
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Box
              width={"10px"}
              height={"10px"}
              borderRadius={"50%"}
              bgcolor={theme.palette.status.order[order.status]}
            />
            <Typography color={theme.palette.status.order[order.status]}>
              {order.status.charAt(0).toUpperCase() + order.status.substring(1)}
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontWeight={"bold"}>Order Id:</Typography>
              <Typography>{order.id}</Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontWeight={"bold"}>Placed on:</Typography>
              <Typography>{order.dateCreated}</Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontWeight={"bold"}>No of Items:</Typography>
              <Typography>{Object.keys(order.items).length}</Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"5px"}>
              <Typography fontWeight={"bold"}>Total:</Typography>
              <Typography>
                {currency.symbol} {order.total}
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
              {Object.keys(order.items).map((id) => {
                return (
                  <UserProductCard
                    {...{ id, user, currency, location }}
                    details={order.items[id]}
                    type={"orders"}
                  />
                );
              })}
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
                      {order.payment.details.type}
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
                    bgcolor={theme.palette.status.payment[order.payment.status]}
                  />
                  <Typography
                    color={theme.palette.status.payment[order.payment.status]}
                  >
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
                      {order.delivery.details.name}
                    </Typography>
                    <Typography ml={"3px"} color={"text.secondary"}>
                      {order.delivery.details.country},{" "}
                      {order.delivery.details.city}
                    </Typography>
                  </Box>
                </Box>
                <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                  <Box
                    width={"10px"}
                    height={"10px"}
                    borderRadius={"50%"}
                    bgcolor={
                      theme.palette.status.delivery[order.delivery.status]
                    }
                  />
                  <Typography
                    color={theme.palette.status.delivery[order.delivery.status]}
                  >
                    {order.delivery.status}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OrderDetails;
