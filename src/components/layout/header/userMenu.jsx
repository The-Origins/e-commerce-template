import React, { useEffect, useRef } from "react";
import {
  MenuItem,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Typography,
  Avatar,
  Badge,
  Paper,
} from "@mui/material";
import {
  BookmarkAdded,
  Favorite,
  NotificationsSharp,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../state/user";
import { Link } from "gatsby";

const UserMenu = ({ location, isUserMenu, user, setConfirmationModal }) => {
  const dispatch = useDispatch();
  const menuRef = useRef(null);

  const handleLogout = () => {
    setConfirmationModal({
      on: true,
      message: "Are you sure you want to logout?",
      onConfirm: () => {
        dispatch(logoutUser());
      },
      onCancel: () => {},
    });
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.height = isUserMenu
        ? `${menuRef.current.scrollHeight + 40}px`
        : "0px";
    }
  }, [isUserMenu]);

  return (
    <Paper
      elevation={2}
      ref={menuRef}
      sx={{
        height: "0px",
        position: "absolute",
        right: 0,
        top: "100%",
        transformOrigin: "top",
        padding: isUserMenu ? "20px" : "0px 20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transition: "0.3s ease-in-out",
      }}
    >
      {user.isLoggedIn ? (
        <>
          <Link
            to={`/user/profile`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar sx={{ fontSize: "15px" }} />
                <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
                  {user.data.name.first} {user.data.name.last}
                </Typography>
              </Box>
              <Typography fontSize={"0.5rem"} color={"text.secondary"}>
                logged in
              </Typography>
            </MenuItem>
          </Link>
          <Link
            to={`/user/notifications`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <MenuItem sx={{ ":hover": { color: "primary.main" } }}>
              <ListItemIcon>
                <Badge
                  color="primary"
                  variant="dot"
                  overlap="circular"
                  invisible={!user.data.notifications.new}
                >
                  <NotificationsSharp />
                </Badge>
              </ListItemIcon>
              My Notifications
            </MenuItem>
          </Link>
          <Link
            to={`/user/orders`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <MenuItem sx={{ ":hover": { color: "primary.main" } }}>
              <ListItemIcon>
                <BookmarkAdded />
              </ListItemIcon>
              My Orders
            </MenuItem>
          </Link>
          <Link
            to={`/user/favourites`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <MenuItem sx={{ ":hover": { color: "primary.main" } }}>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              My Favourites
            </MenuItem>
          </Link>
          <Divider sx={{ width: "300px" }} />
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
        <Box display={"flex"} gap={"20px"}>
          <Link to={`/auth/register?tab=${location.pathname}`}>
            <Button variant="outlined">Register</Button>
          </Link>
          <Link to={`/auth/login?tab=${location.pathname}`}>
            <Button variant="contained" disableElevation>
              login
            </Button>
          </Link>
        </Box>
      )}
    </Paper>
  );
};

export default UserMenu;
