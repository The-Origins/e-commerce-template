import { Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import React from "react";

const UserProfileDetail = (props) => {
  const theme = useTheme();
  return (
    <Box
      position={"relative"}
      flexBasis={200}
      height={"100px"}
      flexGrow={1}
      maxWidth={"40%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"5px"}
      padding={"20px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"25px"}
      sx={{
        transition: "0.3s",
        ":hover": {
          boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
        },
        ":hover .profile-detail-edit": { opacity: 1 },
        ":hover .profile-detail-title": { color: "primary.main" },
      }}
    >
      <Box
        className="profile-detail-title"
        sx={{ transition: "0.3s" }}
        display={"flex"}
        gap={"10px"}
        alignItems={"center"}
      >
        {props.icon}
        <Typography>{props.title}</Typography>
      </Box>
      <Typography sx={{ transition: "0.3s" }} color={"text.secondary"}>
        {props.value}
      </Typography>
      <Tooltip title="edit" placement="right">
        <IconButton
          className="profile-detail-edit"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            opacity: 0,
            transition: "0.3s",
          }}
        >
          <Edit />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UserProfileDetail;
