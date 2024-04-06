import React, { useEffect, useState } from "react";
import ProductMenuContainer from "../product/productMenuContainer";
import UserMenu from "./userMenu";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Link,
  useMediaQuery,
} from "@mui/material";
import {
  Cake,
  Close,
  MenuOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import data from "../../lib/data";
import { useTheme } from "@emotion/react";

const Header = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const [yScroll, setYScroll] = useState(0);
  const [isUp, setIsUp] = useState(true);
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isAllProducts, setIsAllProducts] = useState(false);

  const switchIsAllProducts = (state) => {
    setIsAllProducts(state);
  };

  const switchIsUserMenu = (state) => {
    setIsUserMenu(state);
  };

  useEffect(() => {
    window.onscroll = () => {
      setYScroll((prev) => {
        if (prev > window.scrollY) {
          setIsUp(true);
        } else {
          setIsUp(false);
        }
        return window.scrollY;
      });
    };
    return () => (window.onscroll = undefined);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        zIndex: 1,
      }}
    >
      <Box
        position={"relative"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <ProductMenuContainer
          isAllProducts={isAllProducts}
          switchIsAllProducts={switchIsAllProducts}
        />
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          width={isNotPhone ? "80%" : "90%"}
        >
          <UserMenu
            isUserMenu={isUserMenu}
            switchIsUserMenu={switchIsUserMenu}
          />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={isNotPhone ? undefined : "5px"}
          >
            <Box display={"flex"} alignItems={"center"}>
              {!isNotPhone && (
                <IconButton onClick={switchIsUserMenu}>
                  {isUserMenu ? <Close /> : <MenuOutlined />}
                </IconButton>
              )}
              <Link
                href="/"
                fontSize={"clamp(0.2rem, 5vw, 3rem)"}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "Pacifico",
                }}
              >
                Wendoh Cakes
              </Link>
            </Box>
            {isNotPhone && (
              <input
                type="search"
                placeholder="search for what you desire..."
                style={{
                  width: "40%",
                  height: "50px",
                  backgroundColor: theme.palette.grey,
                }}
              />
            )}
            <Box
              display={"flex"}
              gap={isNotPhone ? "20px" : undefined}
              alignItems={"center"}
            >
              <IconButton
                onClick={() => switchIsAllProducts(true)}
                sx={{ color: isAllProducts ? "primary.main" : undefined }}
              >
                <Cake />
              </IconButton>
              <Link href="/cart">
                <IconButton>
                  <Badge
                    color="primary"
                    badgeContent={data.user.cart.items.length}
                  >
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
              {isNotPhone && (
                <Badge
                  color="primary"
                  variant="dot"
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <IconButton
                    onClick={() => {
                      switchIsUserMenu(true);
                    }}
                  >
                    <Avatar
                      alt="profile image"
                      sx={{ bgcolor: isUserMenu ? "primary.main" : undefined }}
                    />
                  </IconButton>
                </Badge>
              )}
            </Box>
          </Box>
          {!isNotPhone && (
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ transition: "0.2s" }}
              overflow={"hidden"}
              height={isUp ? "45px" : "0px"}
            >
              <input
                className="searchbar"
                type="search"
                placeholder="search for what you desire..."
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "25px",
                  textAlign: "center",
                  backgroundColor: theme.palette.grey,
                }}
              />
              <IconButton>
                <Search />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </header>
  );
};

export default Header;
