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
} from "@mui/material";
import { BookmarkAdded, Cake, Favorite } from "@mui/icons-material";
import data from "../../lib/data";

const UserMenu = ({ isUserMenu, switchIsUserMenu }) => {
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
  }, []);

  return (
    <Box
      ref={userMenuRef}
      className="user-menu"
      position={"absolute"}
      right={isNotPhone ? 0 : undefined}
      left={isNotPhone ? undefined : 0}
      top={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"20px"}
      height={isUserMenu ? "400px" : "0%"}
      width={"min(300px, 100%)"}
      borderRadius={"0px 0px 10px 10px"}
      bgcolor={"white"}
      boxShadow={`0px 5px 10px 0px ${theme.palette.grey[400]}`}
      overflow={"hidden"}
      sx={{ transition: "0.3s ease-in-out", zIndex: 3 }}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Avatar sx={{ fontSize: "15px" }} />
          <Typography fontWeight={"bold"} fontSize={"1.2rem"}>
            {data.user.name.first} {data.user.name.last}
          </Typography>
        </Box>
        <Typography fontSize={"0.5rem"} color={"text.secondary"}>
          logged in
        </Typography>
      </Box>
      <Link href={"/orders"} sx={{ textDecoration: "none", color: "black", ":hover":{color:"primary.main"} }}>
        <MenuItem onClick={() => switchIsUserMenu(false)}>
          <ListItemIcon>
            <BookmarkAdded />
          </ListItemIcon>
          My Orders
        </MenuItem>
      </Link>
      <MenuItem onClick={() => switchIsUserMenu(false)}>
        {" "}
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
        My Favourites
      </MenuItem>
      <MenuItem onClick={() => switchIsUserMenu(false)}>
        {" "}
        <ListItemIcon>
          <Cake />
        </ListItemIcon>
        My Custom Cakes
      </MenuItem>
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
