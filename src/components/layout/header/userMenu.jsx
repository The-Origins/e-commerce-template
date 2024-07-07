import React, { useEffect, useRef } from "react";
import {
  useTheme,
  MenuItem,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Typography,
  useMediaQuery,
  Avatar,
  Link,
  Badge,
} from "@mui/material";
import {
  BookmarkAdded,
  Favorite,
  NotificationsSharp,
  PersonOff,
} from "@mui/icons-material";
import data from "../../../lib/data";
import { useDispatch, useSelector } from "react-redux";
import {
  activateConfirmationModal,
  setIsAuth,
  setUser,
} from "../../../state/store";

const UserMenu = ({ isUserMenu, switchIsUserMenu, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        switchIsUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); //eslint: react-hooks/exhaustive-deps

  const handleClick = () => {
    switchIsUserMenu(false);
  };

  const handleLogout = () => {
    dispatch(
      activateConfirmationModal({
        message: "Are you sure you want to logout?",
        onConfirm: () => {
          handleClick();
          dispatch(setUser({}));
        },
        onCancel: () => {},
      })
    );
  };

  return (
    <Box
      ref={userMenuRef}
      zIndex={10}
      className="user-menu"
      position={"absolute"}
      right={0}
      top={"114%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"20px"}
      height={isUserMenu ? "400px" : "0%"}
      width={"min(300px, 100%)"}
      borderRadius={"0px 0px 10px 10px"}
      bgcolor={"white"}
      boxShadow={`0px 5px 10px 0px ${theme.palette.grey[500]}`}
      overflow={"hidden"}
      sx={{ transition: "0.3s ease-in-out" }}
    >
      {Object.keys(user).length ? (
        <>
          <Link
            href={"/user/#profile"}
            sx={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <MenuItem
              sx={{ display: "flex", flexDirection: "column" }}
              onClick={handleClick}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar sx={{ fontSize: "15px" }} />
                <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                  {user.name.first} {user.name.last}
                </Typography>
              </Box>
              <Typography fontSize={"0.5rem"} color={"text.secondary"}>
                logged in
              </Typography>
            </MenuItem>
          </Link>
          <Link
            href={"/user/#notifications"}
            sx={{
              textDecoration: "none",
              color: "black",
              ":hover": { color: "primary.main" },
            }}
          >
            <MenuItem onClick={handleClick}>
              <ListItemIcon>
                <Badge
                  color="primary"
                  variant="dot"
                  overlap="circular"
                  invisible={!user.notifications.new}
                >
                  <NotificationsSharp />
                </Badge>
              </ListItemIcon>
              My Notifications
            </MenuItem>
          </Link>
          <Link
            href={"/user/#orders"}
            sx={{
              textDecoration: "none",
              color: "black",
              ":hover": { color: "primary.main" },
            }}
          >
            <MenuItem onClick={handleClick}>
              <ListItemIcon>
                <BookmarkAdded />
              </ListItemIcon>
              My Orders
            </MenuItem>
          </Link>
          <Link
            href={"/user/#favourites"}
            sx={{
              textDecoration: "none",
              color: "black",
              ":hover": { color: "primary.main" },
            }}
          >
            <MenuItem onClick={handleClick}>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              My Favourites
            </MenuItem>
          </Link>
          <Divider />
          <Button
            onClick={handleLogout}
            sx={{ alignSelf: "center" }}
            disableElevation
            variant="contained"
          >
            Logout
          </Button>
        </>
      ) : (
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"20px"}
        >
          <PersonOff sx={{ fontSize: "2rem", color: "text.secondary" }} />
          <Button
            disableElevation
            variant="contained"
            onClick={() => {
              dispatch(setIsAuth(true));
            }}
          >
            Login/signup
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UserMenu;
