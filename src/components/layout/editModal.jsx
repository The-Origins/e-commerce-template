import { Close } from "@mui/icons-material";
import { Backdrop, Box, Button, IconButton, useTheme } from "@mui/material";
import React from "react";

const EditModal = ({
  isEdit,
  width,
  height,
  handleConfirm,
  handleCancel,
  children,
}) => {
  const theme = useTheme();
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={isEdit}>
      <Box
        width={width || "min(300px, 90%)"}
        height={height}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color="black"
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-out`,
          transform: `scale(${isEdit ? 1 : 0})`,
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
          padding={"20px"}
        >
          <IconButton onClick={handleCancel}>
            <Close />
          </IconButton>
        </Box>
        <Box height={"100%"} width={"100%"} padding={"20px"}>
          {children}
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          padding={"30px"}
        >
          <Button variant="outlined" onClick={handleCancel}>
            cancel
          </Button>
          <Button variant="contained" onClick={handleConfirm}>
            confirm
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default EditModal;
