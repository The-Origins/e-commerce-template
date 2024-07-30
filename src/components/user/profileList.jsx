import React, { useState } from "react";
import {
  Add,
  AddCircle,
  Explore,
  Paid,
  Payments,
  Place,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import ProfileListElement from "./profileListElement";
import EditModal from "../layout/modals/edit";
import AddProfileListItem from "./addProfileListItem";

const UserProfileList = ({ type, data, setConfirmationModal }) => {
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
        width={"min(500px, 90%)"}
        height={"600px"}
      >
        <AddProfileListItem type={type} setIsAdd={setIsAdd} />
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
          }}
        >
          {type === "payment" ? (
            <Payments />
          ) : type === "address" ? (
            <Explore />
          ) : (
            ""
          )}
          {type === "payment"
            ? "Saved payments"
            : type === "address"
            ? "Saved Addresses"
            : ""}
        </Typography>
        <Tooltip title="add">
          <IconButton onClick={() => setIsAdd(true)}>
            <AddCircle />
          </IconButton>
        </Tooltip>
      </Box>
      {data.length ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          padding={"20px"}
        >
          {data.map((data) => (
            <ProfileListElement
              path={
                type === "address"
                  ? "addresses"
                  : type === "payment"
                  ? "payments"
                  : ""
              }
              setConfirmationModal={setConfirmationModal}
              icon={type === "address" ? <Place /> : <Paid />}
              title={type === "address" ? data.name : data.type}
              description={
                type === "address"
                  ? `${data.country}, ${data.city}`
                  : data.number
              }
              addressType={type === "address" && data.location.type}
              type={type}
            />
          ))}
        </Box>
      ) : (
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
          padding={"10px"}
        >
          <AddCircle sx={{ color: "text.secondary" }} />
          <Typography>No {type} saved</Typography>
          <Button
            variant="contained"
            disableElevation
            startIcon={<Add />}
            onClick={() => setIsAdd(true)}
          >
            add new
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UserProfileList;
