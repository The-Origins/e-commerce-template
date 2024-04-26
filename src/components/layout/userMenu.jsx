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
  Cake,
  Favorite,
  NotificationsSharp,
} from "@mui/icons-material";
import data from "../../lib/data";
import { useSelector } from "react-redux";

const UserMenu = ({ isUserMenu, switchIsUserMenu, user }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
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

  return (
    <Box
      ref={userMenuRef}
      zIndex={4}
      className="user-menu"
      position={"absolute"}
      right={isNotPhone ? 0 : undefined}
      left={isNotPhone ? undefined : 0}
      top={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"20px"}
      height={isUserMenu ? "500px" : "0%"}
      width={"min(300px, 100%)"}
      borderRadius={"0px 0px 10px 10px"}
      bgcolor={"white"}
      boxShadow={`0px 5px 10px 0px ${theme.palette.grey[500]}`}
      overflow={"hidden"}
      sx={{ transition: "0.3s ease-in-out" }}
    >
      <Link
        href={"/user/#"}
        sx={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <MenuItem
          sx={{ display: "flex", flexDirection: "column" }}
          onClick={() => switchIsUserMenu(false)}
        >
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ fontSize: "15px" }} />
            <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
              {data.user.name.first} {data.user.name.last}
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
        <MenuItem onClick={() => switchIsUserMenu(false)}>
          <ListItemIcon>
            <Badge color="primary" variant="dot" overlap="circular" invisible={!user.notifications.new}>
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
        <MenuItem onClick={() => switchIsUserMenu(false)}>
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
        <MenuItem onClick={() => switchIsUserMenu(false)}>
          {" "}
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          My Favourites
        </MenuItem>
      </Link>
      <Link
        href={"/user/#custom-cakes"}
        sx={{
          textDecoration: "none",
          color: "black",
          ":hover": { color: "primary.main" },
        }}
      >
        <MenuItem onClick={() => switchIsUserMenu(false)}>
          {" "}
          <ListItemIcon>
            <Cake />
          </ListItemIcon>
          My Custom Cakes
        </MenuItem>
      </Link>

      <Divider />
      <Button
        onClick={() => switchIsUserMenu(false)}
        sx={{ alignSelf: "center" }}
        disableElevation
        variant="contained"
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
