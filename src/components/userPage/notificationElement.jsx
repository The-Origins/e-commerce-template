import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const NotificationElement = (props) => {
  const theme = useTheme();
  //temporary as the database will store an actual date object
  const date = new Date(props.dateCreated);
  return (
    <Box
      maxWidth={"100%"}
      display={"flex"}
      flexDirection={"column"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"25px"}
      padding={"20px"}
      gap={"20px"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={"bold"}>{props.title}</Typography>
        {props.unread && (
          <Box
            width={"10px"}
            height={"10px"}
            bgcolor={"primary.main"}
            borderRadius={"50%"}
          />
        )}
      </Box>
      <Typography fontWeight={"0.9rem"}>{props.description}</Typography>
      <Box display={"flex"} alignItems={"center"} gap={"5px"}>
        <Typography
          fontWeight={"300"}
          color={"text.secondary"}
          fontSize={"0.8rem"}
        >
          {date.toLocaleDateString()}
        </Typography>
        <Box
          width={"5px"}
          height={"5px"}
          bgcolor={"text.secondary"}
          borderRadius={"50%"}
        />
        <Typography
          fontWeight={300}
          color={"text.secondary"}
          fontSize={"0.8rem"}
        >
          {("0" + date.getHours()).slice(-2)}:{("0" + date.getMinutes()).slice(-2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationElement;
