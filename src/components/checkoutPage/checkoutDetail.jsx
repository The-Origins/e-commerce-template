import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const CheckoutDetail = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      height={"100px"}
      display={"flex"}
      gap={"5px"}
      padding={"20px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"25px"}
      sx={{
        transition: "0.3s",
        ":hover": {
          boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
        },
        ":hover .profile-detail-edit": { opacity: 1 },
        ":hover .profile-detail-title": { color: "primary.main" },
      }}
    >
      <Box height={"100%"} display={"flex"} alignItems={"center"}>
        {props.icon}
      </Box>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Box display={"flex"} gap={"10px"}>
          <Typography>{props.title}</Typography>
          {props.fee && <Typography color={"primary.main"}>(+{props.fee})</Typography>}
        </Box>
        <Typography sx={{ transition: "0.3s" }} color={"text.secondary"}>
          {props.value}
        </Typography>
      </Box>
      <Box height={"100%"} display={"flex"} alignItems={"flex-end"}>
        <Button variant="text" startIcon={<Edit />}>
          Change
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutDetail;
