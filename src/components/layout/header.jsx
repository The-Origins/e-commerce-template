import React, { useEffect, useState } from "react";
import UserMenu from "./userMenu";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Link,
  TextField,
  InputAdornment,
  useMediaQuery,
  Skeleton,
  useTheme,
} from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import { navigate } from "gatsby";

const Header = (props) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const isUser = Object.keys(props.user).length;
  const [yScroll, setYScroll] = useState(0);
  const [isUp, setIsUp] = useState(true);
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [search, setSearch] = useState("");

  const switchIsUserMenu = (state) => {
    setIsUserMenu(state);
  };

  const handleSearch = () => {
    navigate(`/results?search=${search}`);
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
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
        boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
        padding: "10px",
        zIndex: 1,
      }}
    >
      <Box
        position={"relative"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          width={isNotPhone ? "80%" : "90%"}
        >
          {!props.isLoading && (
            <UserMenu
              isUserMenu={isUserMenu}
              switchIsUserMenu={switchIsUserMenu}
              user={props.user}
            />
          )}
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={isNotPhone ? undefined : "5px"}
          >
            <Box display={"flex"} alignItems={"center"}>
              {props.isLoading ? (
                <Skeleton
                  width={"clamp(100px, 5vw, 300px)"}
                  height={"30px"}
                  variant="rounded"
                />
              ) : (
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
              )}
            </Box>
            {isNotPhone &&
              (props.isLoading ? (
                <Skeleton width={"50%"} height={"30px"} variant="rounded" />
              ) : (
                <TextField
                  value={search}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disabled={!search.length}
                          onClick={handleSearch}
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  type="search"
                  placeholder="search for what you desire..."
                  sx={{ width: "50%", "& > div": { borderRadius: "25px" } }}
                />
              ))}
            <Box
              display={"flex"}
              gap={isNotPhone ? "20px" : "10px"}
              alignItems={"center"}
            >
              {props.isLoading ? (
                <Skeleton width={"30px"} height={"30px"} variant="circular" />
              ) : (
                <Link href="/cart">
                  <IconButton>
                    <Badge
                      color="primary"
                      badgeContent={
                        isUser ? Object.keys(props.user.cart.items).length : 0
                      }
                    >
                      <ShoppingCart
                        sx={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}
                      />
                    </Badge>
                  </IconButton>
                </Link>
              )}
              {props.isLoading ? (
                <Skeleton width={"30px"} height={"30px"} variant="circular" />
              ) : (
                <IconButton
                  onClick={() => {
                    switchIsUserMenu(true);
                  }}
                >
                  <Badge
                    color="primary"
                    variant="dot"
                    overlap="circular"
                    invisible={isUser ? !props.user.notifications.new : true}
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
              )}
            </Box>
          </Box>
          {!isNotPhone && (
            <Box
              mt={isUp ? "10px" : undefined}
              sx={{ transition: "0.2s" }}
              overflow={"hidden"}
              height={isUp ? "45px" : "0px"}
            >
              <TextField
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type="search"
                placeholder="search for what you desire..."
                sx={{
                  width: "100%",
                  "& > div": { borderRadius: "25px" },
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </header>
  );
};

export default Header;
