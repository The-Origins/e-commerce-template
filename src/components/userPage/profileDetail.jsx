import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const UserProfileDetail = (props) => {
  const [detail, setDetail] = useState(" ");
  const [isEdit, setIsEdit] = useState(false);
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  const handleChange = ({ target }) => {
    setDetail(target.value);
  };

  useEffect(() => {
    setDetail(props.value);
  }, [props.value]);

  return (
    <Box
      position={"relative"}
      flexBasis={300}
      flexGrow={1}
      maxWidth={"400px"}
      display={"flex"}
      flexDirection={"column"}
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
      {isEdit ? (
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <TextField
            value={detail}
            onChange={handleChange}
            type={props.type}
            label={props.title}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{props.icon}</InputAdornment>
              ),
            }}
          />
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Button
              onClick={() => setIsEdit(false)}
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsEdit(false)}
              disableElevation
              variant="contained"
              size="small"
            >
              Save
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            className="profile-detail-title"
            sx={{ transition: "0.3s" }}
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
          >
            {props.icon}
            <Typography>{props.title}</Typography>
          </Box>
          <Typography sx={{ transition: "0.3s" }} color={"text.secondary"}>
            {props.value}
          </Typography>
          <Tooltip title="edit" placement="right">
            <IconButton
              onClick={() => setIsEdit(true)}
              className="profile-detail-edit"
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                opacity: isNotPhone ? 0 : 1,
                transition: "0.3s",
              }}
            >
              <Edit />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default UserProfileDetail;
