import { CheckCircle, Close, NewReleases, Verified } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const StatusComponent = ({ status, setStatus, isAbsolute = false }) => {
  const { type, message, action, actionTitle } = status;

  const handleAction = () => {
    action();
    setStatus({ on: false });
  };

  return (
    <Box
      position={isAbsolute ? "absolute" : "static"}
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
      {type !== "LOADING" && (
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
      )}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"5px"}
      >
        {type === "LOADING" ? (
          <>
            <Typography>{message}</Typography>
            <CircularProgress />
          </>
        ) : (
          <>
            <Typography fontWeight={"bold"} fontSize={"2rem"}>
              {type.charAt() + type.substring(1).toLowerCase()}
            </Typography>
            <Typography>{message}</Typography>
          </>
        )}
      </Box>
      {type === "SUCCESS" ? (
        <Verified color="success" sx={{ fontSize: "3rem" }} />
      ) : type === "ERROR" ? (
        <NewReleases color="warning" sx={{ fontSize: "3rem" }} />
      ) : (
        <></>
      )}
      {type !== "LOADING" && (
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
      )}
    </Box>
  );
};

export default StatusComponent;
