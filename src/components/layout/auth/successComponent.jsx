import { Check, CheckCircle, Close, Verified } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { switchIsAuth } from "../../../state/store";

const SuccessComponent = ({ details, resetDetails }) => {
  const { message, action, actionTitle } = details;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(switchIsAuth());
  };

  const handleAction = () => {
    action();
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
        <IconButton sx={{ m: "10px" }} onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"5px"}
      >
        <Typography fontFamily={"pacifico"} fontSize={"2rem"}>
          Success
        </Typography>
        <Typography>{message}</Typography>
      </Box>
      <Verified color="success" sx={{ fontSize: "3rem" }} />
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
          {actionTitle}
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessComponent;
