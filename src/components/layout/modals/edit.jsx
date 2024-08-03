import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import StatusComponent from "../statusComponent";

const EditModal = ({ isEdit, width, height, handleClose, children }) => {
  const theme = useTheme();
  const [status, setStatus] = useState({ on: false });

  const mappedChildren = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element and add props and loading, success and error info
      return React.cloneElement(child, {
        setStatus,
      });
    }
    // Return the child if it's not a React element (e.g., text nodes)
    return child;
  });

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 5}} open={isEdit}>
      <Box
        position={"relative"}
        width={width || "min(300px, 90%)"}
        height={height || (status.on ? "500px" : undefined)}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        color="black"
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-out`,
          transform: `scale(${isEdit ? 1 : 0})`,
        }}
        overflow={"hidden"}
      >
        {status.on && <StatusComponent {...{ status, setStatus }} isAbsolute />}
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
          padding={"20px"}
        >
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <Box
          height={"100%"}
          width={"100%"}
          padding={"0px 30px"}
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              bgcolor: "transparent",
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "25px",
              bgcolor: theme.palette.grey[300],
            },
            "&::-webkit-scrollbar-thumb:hover": {
              cursor: "pointer",
              bgcolor: theme.palette.grey[400],
            },
          }}
        >
          {mappedChildren}
        </Box>
      </Box>
    </Backdrop>
  );
};

export default EditModal;
