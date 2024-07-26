import { Error, Replay } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";

const IsErrorComponent = ({
  width,
  height,
  message,
  flexDirection,
  onReload,
  size,
}) => {
  return (
    <Box
      width={width || "100%"}
      height={height || "100%"}
      display={"flex"}
      flexDirection={flexDirection || "column"}
      gap={"10px"}
    >
      <Error
        sx={{
          color: "warning.main",
          fontSize:
            size === "large" ? "3rem" : size === "small" ? " 1rem" : "2rem",
        }}
      />
      <Typography>{message || "Error"}</Typography>
      <Tooltip title="reload">
        <IconButton onClick={onReload}>
          <Replay />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default IsErrorComponent;
