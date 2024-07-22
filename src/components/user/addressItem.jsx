import { Delete, Place } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import React from "react";

const AddressItem = (props) => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={"100%"}
      display={"flex"}
      alignItems={"center"}
      padding={"20px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"10px"}
      sx={{
        ":hover .add-del-btn": {
          opacity: 1,
        },
      }}
    >
      <Place sx={{ fontSize: "30px" }} />
      <Box width={"100%"} display={"flex"} flexDirection={"column"}>
        <Typography fontWeight={"bold"}>
          {props.name}
        </Typography>
        <Typography color={"text.secondary"} ml={"4px"}>
          {props.country}, {props.city}
        </Typography>
      </Box>
      <Tooltip title="Delete address">
        <IconButton
          className="add-del-btn"
          sx={{ transition: "0.3s", opacity: 0 }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AddressItem;
