import React from "react";
import { Box } from "@mui/material";
import NotificationElement from "./notificationElement";

const Notifications = ({user}) => {
  return (
    <Box
      maxWidth={"100%"}
      height={"100%"}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      sx={{ overflowY: "scroll" }}
      gap={"30px"}
    >
      {user.notifications &&
        user.notifications.items.map((notification) => (
          <NotificationElement {...notification} />
        ))}
    </Box>
  );
};

export default Notifications;
