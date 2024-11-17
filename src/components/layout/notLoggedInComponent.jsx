import { PersonOff } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "gatsby";

const NotLoggedInComponent = ({location, message, size }) => {
  return (
    <Box
      width={"100%"}
      height={size === "small" ? "100%" : "60vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"20px"}
    >
      <PersonOff sx={{ fontSize: "3rem" }} />
      <Typography>{message}</Typography>
      <Box display={"flex"} gap={"20px"}>
        <Link to={`/auth/register?tab=${location.pathname}`}>
          <Button size={size} variant="outlined">
            register
          </Button>
        </Link>
        <Link to={`/auth/login?tab=${location.pathname}`}>
          <Button size={size} variant="contained" disableElevation>
            Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotLoggedInComponent;
