import React, { useEffect, useRef, useState } from "react";
import UserMenu from "./userMenu";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Link,
  useMediaQuery,
  useTheme,
  LinearProgress,
  ClickAwayListener,
} from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import SearchBar from "./searchBar";

const Header = ({ user, setHeaderHeight, setConfirmationModal }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const mobileSearchRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.scrollHeight);
      }
    };

    // Initial check
    updateHeaderHeight();

    // Set up a ResizeObserver to watch for changes to the element's size
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (headerRef.current) {
        resizeObserver.unobserve(headerRef.current);
      }
    };
  }, [headerRef.current]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setIsMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
        transition: "0.3s",
        zIndex: 1,
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          width={isNotPhone ? "80%" : "90%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={isNotPhone ? undefined : "5px"}
          position={"relative"}
        >
          <UserMenu
            {...{
              isUserMenu,
              setIsUserMenu,
              user,
              setConfirmationModal,
            }}
          />
          <Box display={"flex"} alignItems={"center"}>
            <Link
              href="/"
              fontSize={"clamp(0.4rem, 5vw, 3rem)"}
              sx={{
                textDecoration: "none",
                color: "black",
                fontFamily: theme.fonts.secondary,
              }}
            >
              E-commerce
            </Link>
          </Box>
          {isNotPhone && (
            <Box width={"50%"} display={"flex"} flexDirection={"column"}>
              <SearchBar {...{ setConfirmationModal }} />
            </Box>
          )}
          <Box
            display={"flex"}
            gap={isNotPhone ? "20px" : "5px"}
            alignItems={"center"}
          >
            {!isNotPhone && (
              <IconButton
                onClick={() => {
                  setIsMobileSearch((prev) => !prev);
                }}
                sx={{ color: isMobileSearch ? "primary.main" : undefined }}
              >
                <Search />
              </IconButton>
            )}
            <Link href="/cart">
              <IconButton>
                <Badge
                  color="primary"
                  badgeContent={
                    user.isLoggedIn
                      ? Object.keys(user.data.cart.items).length
                      : 0
                  }
                >
                  <ShoppingCart
                    sx={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}
                  />
                </Badge>
              </IconButton>
            </Link>
            <ClickAwayListener onClickAway={() => setIsUserMenu(false)}>
              <Link href={isNotPhone ? undefined : "/user"}>
                <IconButton
                  onClick={() => {
                    setIsUserMenu((prev) => !prev);
                  }}
                >
                  <Badge
                    color="primary"
                    variant="dot"
                    overlap="circular"
                    invisible={
                      user.isLoggedIn ? !user.data.notifications.new : true
                    }
                    badgeContent=" "
                  >
                    <Avatar
                      alt="profile image"
                      sx={{
                        bgcolor: isUserMenu ? "primary.main" : undefined,
                        width: "clamp(1.8rem, 3vw, 2.3rem)",
                        height: "clamp(1.8rem, 3vw, 2.3rem)",
                      }}
                    />
                  </Badge>
                </IconButton>
              </Link>
            </ClickAwayListener>
          </Box>
        </Box>
        {!isNotPhone && (
          <Box
            position={"relative"}
            ref={mobileSearchRef}
            sx={{ transition: "0.2s" }}
            overflow={isMobileSearch ? undefined : "hidden"}
            height={isMobileSearch ? "45px" : "0px"}
            mt={isMobileSearch && "10px"}
          >
            <SearchBar
              searchFocus={isMobileSearch}
              {...{ setConfirmationModal }}
            />
          </Box>
        )}
        {user.isFetching && <LinearProgress sx={{ width: "100%" }} />}
      </Box>
    </header>
  );
};

export default Header;
