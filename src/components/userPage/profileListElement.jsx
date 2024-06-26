import React from "react";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { Business, Delete, Home, LocalShipping } from "@mui/icons-material";

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
        <Typography display={"flex"} gap={"10px"} alignItems={"center"}>
          {props.title}
          {props.type === "home" ? (
            <Tooltip title={props.type}>
              <Home sx={{ color: "text.secondary", fontSize: "1rem" }} />
            </Tooltip>
          ) : props.type === "office" ? (
            <Tooltip title={props.type}>
              {" "}
              <Business sx={{ color: "text.secondary", fontSize: "1rem" }} />
            </Tooltip>
          ) : props.type === "pick-up station" ? (
            <Tooltip title={props.type}>
              <LocalShipping
                sx={{ color: "text.secondary", fontSize: "1rem" }}
              />
            </Tooltip>
          ) : (
            ""
          )}
        </Typography>
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
