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
import AuthWorker from "../../scripts/authWorker";
import TelTextField from "../layout/forms/telTextField";
import CurrencySelect from "../layout/forms/currencySelect";

const UserProfileDetail = ({
  title,
  description,
  details,
  icon,
  validator,
  editable,
}) => {
  const authWorker = new AuthWorker();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState(details);
  const callingCodes =
    title === "phone number" ? authWorker.getCallingCodes() : {};

  const [isEdit, setIsEdit] = useState(false);

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleChange = ({ target }) => {
    setForm((prev) => {
      if (target.name === "code") {
        return {
          ...prev,
          code: target.value,
          number: callingCodes[target.value].callingCode,
        };
      } else if (target.name === "number") {
        return {
          ...prev,
          number: authWorker.formatPhoneNumber(
            prev.number,
            target.value,
            prev.code
          ),
        };
      }
      return { ...prev, [target.name]: target.value };
    });
    setForm((prev) => {
      setErrors(
        authWorker.getErrors(
          errors,
          validator,
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
          color: editable ? "primary.main" : "black",
        },
      }}
    >
      {isEdit && editable ? (
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
          {editable && (
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
