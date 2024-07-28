import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import NotificationItem from "./notificationItem";

const Notifications = ({ user }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      padding={isNotPhone ? "20px" : "20px 7px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {user.data.notifications.items.map((notification) => (
        <NotificationItem {...notification} />
      ))}
    </Box>
  );
};

export default Notifications;
