import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NotificationItem from "./notificationItem";

const Notifications = ({ user }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      width={"100%"}
      height={"100%"}
      padding={isNotPhone ? "20px" : "20px 7px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: isNotPhone ? "10px" : 0,
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
