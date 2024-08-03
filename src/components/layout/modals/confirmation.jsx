import { Backdrop, Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { Close, Info } from "@mui/icons-material";

const ConfirmationModal = ({confirmationModal, setConfirmationModal}) => {
  const theme = useTheme();

  const handleClose = () => {
    setConfirmationModal({on:false, message:""})
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 50 }}
      open={confirmationModal.on}
      onClick={handleClose}
    >
      <Box
        width={"min(400px, 90%)"}
        minHeight={"200px"}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"20px"}
        overflow={"hidden"}
        position={"relative"}
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-in-out`,
          transform: `scale(${confirmationModal.on ? 1 : 0})`,
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Info sx={{ color: "primary.main", fontSize: "1.8rem" }} />
          <IconButton>
            <Close />
          </IconButton>
        </Box>
        <Typography color={"black"} fontWeight={"bold"}>
          {confirmationModal.message}
        </Typography>
        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Button
            size="small"
            variant="outlined"
            onClick={confirmationModal.onCancel}
          >
            cancel
          </Button>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={confirmationModal.onConfirm}
          >
            confirm
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default ConfirmationModal;
