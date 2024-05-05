import React from "react";
import { AddCircle, Paid, Place } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import ProfileListElement from "./profileListElement";

const UserProfileList = (props) => {
  const theme = useTheme();
  return (
    <Box
      flexBasis={300}
      flexGrow={1}
      maxWidth={"400px"}
      border={`1px solid ${theme.palette.grey[400]}`}
      borderRadius={"25px"}
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
    >
      <Box
        padding={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={`1px solid ${theme.palette.grey[400]}`}
      >
        <Typography sx={{ display: "flex", gap: "5px", alignItems: "center", color:"text.secondary" }}>
          {props.icon}
          {props.title}
        </Typography>
        <IconButton>
          <AddCircle />
        </IconButton>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"} padding={"20px"}>
        {props.data.map((data) => (
          <ProfileListElement
            icon={props.type === "address" ? <Place /> : <Paid />}
            title={props.type === "address" ? `${data.address}, ${data.street}` : data.type}
            description={props.type === "address" ? `${data.country}, ${data.city}` : data.details.number}
            type={props.type}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UserProfileList;
