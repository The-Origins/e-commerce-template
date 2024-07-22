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
import SideBarElement from "../components/user/sideBarElement";
import UserOrders from "../components/user/orders";
import OrderDetails from "../components/user/orderDetails";
import UserFavourites from "../components/user/favourites";
import UserProfile from "../components/user/profile";
import Notifications from "../components/user/notifications";
import { convertHex } from "../theme";
import { navigate } from "gatsby";
import NotLoggedInComponent from "../components/user/notLoggedInComponent";
import { logoutUser } from "../state/user";

const UserPage = ({ location, setConfirmationModal }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const currency = useSelector((state) => state.currency);
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
    if (!user.isFetching) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user.isLoggedIn) {
      setStages({
        profile: <UserProfile {...{ user, setConfirmationModal }} />,
        orders: <UserOrders {...{ user, currency }} />,
        order: <OrderDetails {...{ user, currency }} />,
        favourites: <UserFavourites {...{ user, currency }} />,
        notifications: <Notifications {...{ user }} />,
      });
    }
  }, [user]);

  const handleLogout = () => {
    setConfirmationModal({
      on: true,
      message: "Are you sure you want to log out ?",
      onConfirm: () => dispatch(logoutUser()),
      onCancel: () => {},
    });
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        height={"80vh"}
        mb={"10vh"}
        width={isNotPhone ? "80%" : "90%"}
        display={"flex"}
        overflow={isNotPhone ? "hidden" : undefined}
        justifyContent={"center"}
      >
        {(isNotPhone || !stage) && (
          <Box
            overflow={isNotPhone ? "hidden" : undefined}
            width={stage ? "400px" : "100%"}
            maxWidth={"600px"}
            height={"100%"}
            border={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={stage ? "25px 0px 0px 25px" : "25px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            {!isLoading && !user.isLoggedIn ? (
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
                      onClick={() =>
                        navigate(`/auth/login?tab=${location.pathname}`)
                      }
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
                    bgcolor:
                      stage === "profile" ? theme.palette.grey[300] : undefined,
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
                        {user.data.name.first} {user.data.name.last}
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
                        invisible={!user.data.notifications.new}
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
                <Link href="/user">
                  <IconButton>
                    <Home />
                  </IconButton>
                </Link>
                <ChevronRight />
                <Typography
                  padding={"5px 10px"}
                  bgcolor={`rgba(${convertHex(theme.palette.primary.main).join(
                    " "
                  )} / 0.2)`}
                  color={"primary.main"}
                  borderRadius={"20px"}
                  fontSize={"0.9rem"}
                >
                  {stage}
                </Typography>
              </Box>
            )}
            {isNotPhone ? (
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                border={`1px solid ${theme.palette.grey[400]}`}
                overflow={isNotPhone ? "hidden" : undefined}
                borderRadius={isNotPhone ? "0px 25px 25px 0px" : "25px"}
              >
                {isLoading ? (
                  <Box
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CircularProgress />
                  </Box>
                ) : !user.isLoggedIn ? (
                  <NotLoggedInComponent
                    message={"Login to access user info"}
                    size={"small"}
                  />
                ) : (
                  stages[stage]
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
            ) : !user.isLoggedIn ? (
              <NotLoggedInComponent
                message={"Login to access user info"}
                size={"small"}
              />
            ) : (
              stages[stage]
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserPage;
