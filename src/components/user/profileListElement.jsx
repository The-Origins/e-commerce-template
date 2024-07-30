import React from "react";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { Business, Delete, Home, LocalShipping } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user";

const ProfileListElement = ({
  path,
  type,
  addressType,
  title,
  icon,
  description,
  setConfirmationModal,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDelete = () => {
    setConfirmationModal({
      on: true,
      message: `Are you sure you want to remove this ${type}`,
      onConfirm: () =>
        dispatch(updateUser({ path, action: "DELETE", data: type })),
      onCancel: () => {},
    });
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"5px"}
      padding={"10px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"20px"}
    >
      {icon}
      <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"5px"}>
        <Typography display={"flex"} gap={"10px"} alignItems={"center"}>
          {title}
          {addressType === "home" ? (
            <Tooltip title={addressType}>
              <Home sx={{ color: "text.secondary", fontSize: "1rem" }} />
            </Tooltip>
          ) : addressType === "office" ? (
            <Tooltip title={addressType}>
              {" "}
              <Business sx={{ color: "text.secondary", fontSize: "1rem" }} />
            </Tooltip>
          ) : addressType === "pick-up station" ? (
            <Tooltip title={addressType}>
              <LocalShipping
                sx={{ color: "text.secondary", fontSize: "1rem" }}
              />
            </Tooltip>
          ) : (
            ""
          )}
        </Typography>
        <Typography color={"text.secondary"}>{description}</Typography>
      </Box>
      <Tooltip title="delete">
        <IconButton onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ProfileListElement;
