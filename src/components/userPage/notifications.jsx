import React from "react";
import { Box, useTheme } from "@mui/material";
import NotificationItem from "./notificationItem";

const Notifications = ({ user }) => {
  const theme = useTheme()
  return (
    <Box
      width={"100%"}
      height={"100%"}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      sx={{
        overflowY: "scroll",
        scrollbarWidth:"0px",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          height: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "25px",
          bgcolor: theme.palette.grey[300],
        },
        "&::-webkit-scrollbar-thumb:hover": {
          cursor: "pointer",
          bgcolor: theme.palette.grey[400],
        },
      }}
    >
      {user.notifications.items.map((notification) => (
        <NotificationItem {...notification} />
      ))}
    </Box>
  );
};

export default Notifications;
