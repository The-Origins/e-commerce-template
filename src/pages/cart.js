import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Link,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import UserProductCard from "../components/product/userProductCard";
import {
  ShoppingCartCheckout,
} from "@mui/icons-material";
import SkeletonGroup from "../components/layout/skeletonGroup";
import products from "../../lib/data/products.json";
import ProductCardContainer from "../components/product/productCardContainer";
import NotLoggedInComponent from "../components/user/notLoggedInComponent";

const CartPage = ({ setConfirmationModal }) => {
  const currency = useSelector((state) => state.currency);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  useEffect(() => {
    document.title = "Cart | E-commerce";
  }, []);

  useEffect(() => {
    if (!user.isFetching) {
      setIsLoading(false);
    }
  }, [user.isFetching]);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box minHeight={"100vh"} width={isNotPhone ? "80%" : "90%"}>
        {!isLoading && !user.isLoggedIn ? (
          <NotLoggedInComponent message={"login to access cart"} size="large" />
        ) : (
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              width={"100%"}
              display={"flex"}
              gap={"40px"}
              alignItems={"flex-start"}
            >
              <Box
                width={isNotPhone ? "75%" : "100%"}
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
                      <SkeletonGroup count={2} width={"200px"} />
                    ) : (
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        width={"100%"}
                      >
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography fontSize={"0.8rem"}>Subtotal</Typography>
                          <Typography fontSize={"0.8rem"}>
                            {currency.symbol} {user.data.cart.total}
                          </Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"}>
                          <Typography fontSize={"0.8rem"}>
                            *Delivery charges not included
                          </Typography>
                        </Box>
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
                          SubTotal: {currency.symbol} {user.data.cart.total}
                        </Typography>
                      )}
                      <Link href="/checkout">
                        <Button
                          startIcon={<ShoppingCartCheckout />}
                          variant="contained"
                          disableElevation
                          disabled={isLoading}
                        >
                          Checkout
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                )}
                <Box
                  width={"100%"}
                  height={"80vh"}
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
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"20px"}
                    padding={"10px"}
                  >
                    {isLoading ? (
                      <SkeletonGroup count={4} width="100%" height={"100px"} />
                    ) : (
                      Object.keys(user.data.cart.items).map((cartItem) => {
                        return (
                          <UserProductCard
                            {...{ user, currency, setConfirmationModal }}
                            id={cartItem}
                            details={user.data.cart.items[cartItem]}
                            type="cart"
                            isLink
                          />
                        );
                      })
                    )}
                  </Box>
                </Box>
              </Box>
              {isNotPhone && (
                <Box
                  width={"300px"}
                  boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                  borderRadius={"25px"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  gap={"20px"}
                  padding={"20px 40px"}
                  bgcolor={"white"}
                >
                  <Typography
                    fontSize={"1.2rem"}
                    fontFamily={theme.fonts.secondary}
                  >
                    Summary
                  </Typography>
                  {isLoading ? (
                    <SkeletonGroup width={"200px"} count={2} />
                  ) : (
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      width={"100%"}
                    >
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
                        <Typography fontSize={"0.8rem"}>VAT:</Typography>
                        <Typography fontSize={"0.8rem"}>
                          {currency.symbol} 0.0
                        </Typography>
                      </Box>
                      <Typography
                        width={"100%"}
                        textAlign={"center"}
                        fontSize={"0.8rem"}
                        mt={"5px"}
                      >
                        *Delivery charges not included*
                      </Typography>
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
                        {currency.symbol} {user.data.cart.total}
                      </Typography>
                    </Box>
                  )}
                  <Link href="/checkout">
                    <Button
                      startIcon={<ShoppingCartCheckout />}
                      variant="contained"
                      disableElevation
                      disabled={isLoading}
                    >
                      Checkout
                    </Button>
                  </Link>
                </Box>
              )}
            </Box>
            <ProductCardContainer
              {...{ user, isLoading, currency, setConfirmationModal }}
              title={`Recently viewed`}
              products={products.slice(0, 4)}
              disableLink
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
