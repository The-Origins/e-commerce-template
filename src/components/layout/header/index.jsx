import React, { useEffect, useRef, useState } from "react";
import UserMenu from "./userMenu";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  LinearProgress,
  ClickAwayListener,
  Tooltip,
  Typography,
} from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import SearchBar from "./searchBar";
import { navigate, Link } from "gatsby";

const Header = ({ location, user, setConfirmationModal }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const searchButtonRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [headerRef]);

  const handleClickAway = (event) => {
    if (
      searchButtonRef.current &&
      searchButtonRef.current.contains(event.target)
    ) {
      return; // Do nothing if the click is on the button
    }
    setIsMobileSearch(false);
  };

  return (
    <>
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
            padding={"10px 0px"}
            position={"relative"}
          >
            <UserMenu
              {...{
                location,
                isUserMenu,
                setIsUserMenu,
                user,
                setConfirmationModal,
              }}
            />
            <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
              <Typography
                fontSize={"clamp(0.5rem, 5vw, 2.2rem)"}
                sx={{
                  typography: "secondaryFont",
                  fontWeight: "bold",
                }}
              >
                {theme.title}
              </Typography>
            </Link>
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
                  ref={searchButtonRef}
                  onClick={() => {
                    setIsMobileSearch((prev) => !prev);
                  }}
                  sx={{ color: isMobileSearch ? "primary.main" : undefined }}
                >
                  <Search />
                </IconButton>
              )}
              <Link to={`/cart`}>
                <Tooltip title="cart">
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
                </Tooltip>
              </Link>
              <ClickAwayListener onClickAway={() => setIsUserMenu(false)}>
                <IconButton
                  disabled={user.isFetching}
                  onClick={() => {
                    if (isNotPhone) {
                      setIsUserMenu((prev) => !prev);
                    } else {
                      navigate("/user");
                    }
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
              </ClickAwayListener>
            </Box>
          </Box>
          {!isNotPhone && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box
                width={"100%"}
                sx={{ transition: "0.2s" }}
                overflow={"hidden"}
                height={isMobileSearch ? "45px" : "0px"}
                display={"flex"}
                alignItems={"center"}
                padding={"0px 5px"}
              >
                <SearchBar
                  searchFocus={isMobileSearch}
                  {...{ setConfirmationModal }}
                />
              </Box>
            </ClickAwayListener>
          )}
          {user.isFetching && <LinearProgress sx={{ width: "100%" }} />}
        </Box>
      </header>
      <Box width={"100%"} height={`${headerHeight + 20}px`} />
    </>
  );
};

export default Header;
