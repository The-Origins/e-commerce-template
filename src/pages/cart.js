import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import data from "../lib/data";
import UserProductCard from "../components/product/userProductCard";

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  return (
    <Box
      mt={"100px"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      {user.name && (
        <Box width={isNotPhone ? "80%" : "90%"} display={"flex"}>
          <Box
            width={isNotPhone ? "75%" : "100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            {!isNotPhone && (
              <Box
                width={"100%"}
                boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                borderRadius={"25px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                padding={"20px 0px"}
              >
                <Box display={"flex"} flexDirection={"column"} width={"80%"}>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Typography>Subtotal</Typography>
                    <Typography>{user.cart.total}</Typography>
                  </Box>
                </Box>
                <Typography fontSize={"0.7rem"}>
                  *delivery charges not included
                </Typography>
                <Box
                  position={"fixed"}
                  width={"100%"}
                  height={"50px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  bottom={0}
                  zIndex={5}
                  bgcolor={"white"}
                  boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                >
                  <Typography>
                    {user.region.currency} {user.cart.total}
                  </Typography>
                  <Button variant="contained" disableElevation>
                    Checkout
                  </Button>
                </Box>
              </Box>
            )}
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              width={"90%"}
            >
              {Object.keys(user.cart.items).map((cartItem, index) => (
                <UserProductCard
                  item={user.cart.items[cartItem]}
                  isLink={true}
                  type={"cart"}
                  id={index}
                />
              ))}
            </Box>
            <Link href="/" sx={{ alignSelf: "center", margin: "50px 0px" }}>
              <Button variant="contained" disableElevation>
                Continue Shopping
              </Button>
            </Link>
          </Box>
          {isNotPhone && (
            <Box
              width={"25%"}
              height={"250px"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
              borderRadius={"25px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              padding={"20px 0px"}
            >
              <Typography fontSize={"1.2rem"} fontFamily={"pacifico"}>
                Summary
              </Typography>
              <Box display={"flex"} flexDirection={"column"} width={"80%"}>
                <Box
                  display={"flex"}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Typography>Subtotal</Typography>
                  <Typography>{user.cart.total}</Typography>
                </Box>
                <Box
                  display={"flex"}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Typography>VAT</Typography>
                  <Typography>0.0</Typography>
                </Box>
              </Box>
              <Typography fontSize={"0.7rem"}>
                *delivery charges not included
              </Typography>
              <Button variant="contained" disableElevation>
                Checkout
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
