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
import AuthWorker from "../../utils/authWorker";
import TelTextField from "../forms/inputs/telTextField";
import CurrencySelect from "../forms/inputs/currencySelect";
import callingCodes from "../../../lib/callingCodes.json";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user";

const UserProfileDetail = ({
  title,
  description,
  details,
  icon,
  disableEdit = false,
}) => {
  const authWorker = new AuthWorker();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState(details);
  const [isEdit, setIsEdit] = useState(false);

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleChange = ({ target }) => {
    setForm((prev) => {
      if (target.name === "phoneCode") {
        return {
          ...prev,
          phoneCode: target.value,
          phoneNumber: callingCodes[target.value].callingCode,
        };
      } else if (target.name === "phoneNumber") {
        return {
          ...prev,
          phoneNumber: authWorker.formatPhoneNumber(
            prev.phoneNumber,
            target.value,
            prev.phoneCode
          ),
        };
      }
      return { ...prev, [target.name]: target.value };
    });
    setForm((prev) => {
      setErrors(
        authWorker.getErrors(
          errors,
          { name: target.name, value: prev[target.name] },
          prev
        )
      );
      return prev;
    });
  };

  useEffect(() => {
    setForm(details);
  }, [details]);

  const handleSave = () => {
    setIsEdit(false);
    dispatch(
      updateUser({ path: title.split(" ")[0], action: "EDIT", data: form })
    );
  };

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
        ":hover .profile-form-edit": { opacity: 1 },
        ":hover .profile-form-title": {
          color: !disableEdit ? "primary.main" : "black",
        },
      }}
    >
      {isEdit && !disableEdit ? (
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          {title === "currency" ? (
            <CurrencySelect {...{ form, handleChange }} />
          ) : title === "phone number" ? (
            <TelTextField
              {...{ form, errors, touched, handleBlur, handleChange }}
            />
          ) : (
            <TextField
              name={title}
              type={title}
              label={title.charAt(0).toUpperCase() + title.substring(1)}
              value={form[title]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched[title]) && Boolean(errors[title])}
              helperText={(touched[title] && errors[title]) || " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
              }}
            />
          )}
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Button
              onClick={() => setIsEdit(false)}
              variant="outlined"
              size="small"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disableElevation
              variant="contained"
              size="small"
              disabled={
                (!Boolean(Object.keys(touched).length) &&
                  Boolean(Object.keys(errors).length)) ||
                Boolean(Object.keys(errors).length)
              }
            >
              Save
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            className="profile-form-title"
            sx={{ transition: "0.3s" }}
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
          >
            {icon}
            <Typography>
              {title.charAt(0).toUpperCase() + title.substring(1)}
            </Typography>
          </Box>
          <Typography sx={{ transition: "0.3s" }} color={"text.secondary"}>
            {description}
          </Typography>
          {!disableEdit && (
            <Tooltip title="edit" placement="right">
              <IconButton
                onClick={() => setIsEdit(true)}
                className="profile-form-edit"
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
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserProfileDetail;
