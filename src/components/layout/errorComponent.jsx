import { CheckCircle, Close, NewReleases } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";

const ErrorComponent = ({ details, resetDetails }) => {
  const theme = useTheme();
  const { message, action, actionTitle} = details;

  const handleAction = () => {
    action()
    resetDetails();
  };

  return (
    <Box
      position={"absolute"}
      bgcolor={"white"}
      color={"black"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={5}
    >
      <Box
        position={"absolute"}
        width={"100%"}
        top={0}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <IconButton sx={{ m: "10px" }} onClick={handleAction}>
          <Close />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"5px"}
      >
        <Typography fontFamily={theme.fonts.secondary} fontSize={"2rem"}>
          Error
        </Typography>
        <Typography>{message}</Typography>
      </Box>
      <NewReleases color="warning" sx={{ fontSize: "3rem" }} />
      <Box
        position={"absolute"}
        bottom={100}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button
          disableElevation
          variant="contained"
          sx={{ mt: "50px" }}
          onClick={handleAction}
          startIcon={<CheckCircle />}
        >
          {actionTitle || "ok"}
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorComponent;
