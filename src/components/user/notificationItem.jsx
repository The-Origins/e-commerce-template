import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const NotificationItem = (props) => {
  const theme = useTheme();
  const date = new Date(props.dateCreated);
  const time =
    `0${date.getHours()}`.slice(-2) + ":" + `0${date.getMinutes()}`.slice(-2);
  return (
    <Box
      width={"100%"}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      borderRadius={"25px"}
    >
      <Box
        display={"flex"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontWeight={"bold"}>{props.title}</Typography>
        {props.unread && (
          <Box
            width={"10px"}
            height={"10px"}
            borderRadius={"50%"}
            bgcolor={"primary.main"}
          />
        )}
      </Box>
      <Typography ml={"10px"}>{props.description}</Typography>
      <Typography
        fontSize={"0.8rem"}
        color={"text.secondary"}
        sx={{ display: "flex", gap: "5px", alignItems: "center" }}
      >
        {date.toLocaleDateString()}
        <Box
          width={"5px"}
          height={"5px"}
          borderRadius={"50%"}
          bgcolor={"text.secondary"}
        />
        {time}
      </Typography>
    </Box>
  );
};

export default NotificationItem;
