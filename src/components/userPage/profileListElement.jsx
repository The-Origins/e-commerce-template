import React from "react";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { Delete } from "@mui/icons-material";

const ProfileListElement = (props) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"5px"}
      padding={"10px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"20px"}
    >
      {props.icon}
      <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"5px"}>
        <Typography>{props.title}</Typography>
        <Typography color={"text.secondary"}>{props.description}</Typography>
      </Box>
      <Tooltip title="delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ProfileListElement;
