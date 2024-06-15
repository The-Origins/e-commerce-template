import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Badge,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Link,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  BookmarkAdded,
  ChevronRight,
  Favorite,
  Home,
  NotificationsSharp,
  Person,
  PersonOff,
} from "@mui/icons-material";
import SideBarElement from "../components/userPage/sideBarElement";
import UserOrders from "../components/userPage/orders";
import OrderDetails from "../components/userPage/orderDetails";
import UserFavourites from "../components/userPage/favourites";
import UserProfile from "../components/userPage/profile";
import Notifications from "../components/userPage/notifications";
import { activateConfirmationModal, setIsAuth, setUser } from "../state/store";

const UserPage = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [stages, setStages] = useState({});
  let stage = String(window.location.hash).includes("/")
    ? window.location.hash.substring(1, window.location.hash.indexOf("/"))
    : window.location.hash.substring(1);

  useEffect(() => {
    document.title = `My ${
      stage.charAt(0).toUpperCase() + stage.substring(1)
    } | E-commerce`;
  }, [stage]);

  useEffect(() => {
    const loadingTimout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimout);
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) {
      setStages({
        profile: <UserProfile user={user} />,
        orders: <UserOrders />,
        order: <OrderDetails />,
        favourites: <UserFavourites user={user} />,
        notifications: <Notifications user={user} />,
      });
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(setIsAuth(true));
  };

  const handleLogout = () => {
    dispatch(
      activateConfirmationModal({
        message: "Are you sure you want to logout?",
        onConfirm: () => {
          dispatch(setUser({}));
        },
        onCancel: () => {},
      })
    );
  };

  return (
    <Box
      mt={"60px"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={isNotPhone ? "80%" : "90%"}
        height={"80%"}
        display={"flex"}
        overflow={"hidden"}
        justifyContent={"center"}
      >
        {(isNotPhone || !stage) && (
          <Box
            overflow={"hidden"}
            width={stage ? "400px" : "100%"}
            maxWidth={"600px"}
            height={"100%"}
            border={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={stage ? "25px 0px 0px 25px" : "25px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            {!isLoading && !Object.keys(user).length ? (
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <PersonOff sx={{ fontSize: "2rem", color: "text.secondary" }} />
                {!stage && (
                  <>
                    <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
                      Login to access user info
                    </Typography>
                    <Button
                      disableElevation
                      variant="contained"
                      size="large"
                      startIcon={<Person />}
                      onClick={handleLogin}
                    >
                      Log in
                    </Button>
                  </>
                )}
              </Box>
            ) : isLoading ? (
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Link
                  href="/user/#profile"
                  sx={{
                    height: "40%",
                    color: "black",
                    textDecoration: "none",
                    bgcolor: stage === "profile" ? "#F5F5F5" : undefined,
                  }}
                >
                  <MenuItem
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Avatar />
                      <Typography fontWeight={"bold"} fontSize={"1.6rem"}>
                        {user.name.first} {user.name.last}
                      </Typography>
                    </Box>
                    <Typography fontSize={"0.8rem"} color={"text.secondary"}>
                      logged in
                    </Typography>
                  </MenuItem>
                </Link>
                <Box display={"flex"} flexDirection={"column"}>
                  <SideBarElement
                    path={"notifications"}
                    stage={stage}
                    title={"My notifications"}
                    icon={
                      <Badge
                        color="primary"
                        variant="dot"
                        overlap="circular"
                        invisible={!user.notifications.new}
                      >
                        <NotificationsSharp />
                      </Badge>
                    }
                  />
                  <SideBarElement
                    path={"orders"}
                    stage={stage}
                    title={"My orders"}
                    icon={<BookmarkAdded />}
                  />
                  <SideBarElement
                    path={"favourites"}
                    stage={stage}
                    title={"My favourites"}
                    icon={<Favorite />}
                  />
                  <Divider sx={{ margin: "30px" }} />
                  <Button
                    onClick={handleLogout}
                    sx={{ alignSelf: "center" }}
                    disableElevation
                    variant="contained"
                  >
                    Logout
                  </Button>
                </Box>
              </>
            )}
          </Box>
        )}
        {stage && (
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            {!isNotPhone && (
              <Box
                mb={"10px"}
                padding={"10px"}
                border={`1px solid ${theme.palette.grey[400]}`}
                borderRadius={"20px"}
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
              >
                <Link href="/user/#">
                  <IconButton>
                    <Home />
                  </IconButton>
                </Link>
                <ChevronRight />
                <Typography
                  padding={"5px 10px"}
                  bgcolor={theme.palette.grey[400]}
                  color={theme.palette.grey[800]}
                  borderRadius={"20px"}
                  fontSize={"0.9rem"}
                >
                  {stage}
                </Typography>
              </Box>
            )}
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={`1px solid ${theme.palette.grey[400]}`}
              overflow={"hidden"}
              borderRadius={isNotPhone ? "0px 25px 25px 0px" : "25px"}
            >
              {!isLoading && !Object.keys(user).length ? (
                <Box
                  width={"100%"}
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"20px"}
                >
                  <PersonOff
                    sx={{ fontSize: "3rem", color: "text.secondary" }}
                  />
                  <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
                    Login to access user info
                  </Typography>
                  <Button
                    disableElevation
                    variant="contained"
                    size="large"
                    startIcon={<Person />}
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                </Box>
              ) : isLoading ? (
                <CircularProgress />
              ) : (
                stages[stage]
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserPage;
