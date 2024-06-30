import React, { useState } from "react";
import { AddCircle, Paid, Place } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import ProfileListElement from "./profileListElement";
import EditModal from "../layout/editModal";
import AddProfileListItem from "./addProfileListItem";

const UserProfileList = (props) => {
  const [isAdd, setIsAdd] = useState(false);
  const theme = useTheme();
  return (
    <Box
      flexBasis={300}
      flexGrow={1}
      maxWidth={"400px"}
      border={`1px solid ${theme.palette.grey[400]}`}
      borderRadius={"25px"}
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
    >
      <EditModal
        isEdit={isAdd}
        handleClose={() => setIsAdd(false)}
        width={"min(600px, 90%)"}
      >
        <AddProfileListItem type={props.type} setIsAdd={setIsAdd} />
      </EditModal>
      <Box
        padding={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={`1px solid ${theme.palette.grey[400]}`}
      >
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          {props.icon}
          {props.title}
        </Typography>
        <Tooltip title="add">
          <IconButton onClick={() => setIsAdd(true)}>
            <AddCircle />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        padding={"20px"}
      >
        {props.data.map((data) => (
          <ProfileListElement
            icon={props.type === "address" ? <Place /> : <Paid />}
            title={
              props.type === "address"
                ? `${data.address}, ${data.street}`
                : data.type
            }
            description={
              props.type === "address"
                ? `${data.country}, ${data.city}`
                : data.number
            }
            type={data.type}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UserProfileList;
