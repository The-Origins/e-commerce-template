import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AuthWorker from "../../scripts/authWorker";

const UserProfileDetail = ({
  title,
  icon,
  value,
  type,
  validator,
  editable,
}) => {
  const authWorker = new AuthWorker();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [detail, setDetail] = useState(value);
  const currencies = title === "Currency" ? authWorker.getCurrencies() : {};
  const callingCodes = type === "tel" ? authWorker.getCallingCodes() : {};

  const [isEdit, setIsEdit] = useState(false);

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleChange = ({ target }) => {
    setDetail((prev) => {
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
    setDetail((prev) => {
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
    setDetail(value);
  }, [value]);

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
        ":hover .profile-detail-title": {
          color: editable ? "primary.main" : "black",
        },
      }}
    >
      {isEdit && editable ? (
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          {type === "select" && title === "Currency" ? (
            <Select
              autoWidth
              name="code"
              value={detail}
              onChange={handleChange}
              renderValue={(value) => value}
            >
              {Object.keys(currencies).map((currency) => (
                <MenuItem value={currencies[currency].code}>
                  <Box
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    gap={"20px"}
                    alignItems={"center"}
                  >
                    <Typography>{currencies[currency].name}</Typography>
                    <Typography color={"primary.main"}>
                      {currencies[currency].symbol}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          ) : type === "tel" ? (
            <TextField
              type="tel"
              placeholder="phone number"
              name="number"
              value={detail.number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.number) && Boolean(errors.number)}
              helperText={(touched.number && errors.number) || " "}
              sx={{
                "& > div": { padding: 0 },
                "& > div > div": { marginRight: "5px" },
              }}
              InputProps={{
                startAdornment: (
                  <Select
                    autoWidth
                    name="code"
                    value={detail.code}
                    onChange={handleChange}
                    renderValue={(value) => value}
                  >
                    {Object.keys(callingCodes).map((code) => (
                      <MenuItem value={code}>
                        <Box
                          width={"100%"}
                          display={"flex"}
                          gap={"10px"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Typography>
                            {callingCodes[code].countryName}
                          </Typography>
                          <Typography color={"primary.main"}>{code}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                ),
              }}
            />
          ) : (
            <TextField
              name={title.toLowerCase()}
              type={type}
              label={title}
              value={detail}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                Boolean(touched[title.toLowerCase()]) &&
                Boolean(errors[title.toLowerCase()])
              }
              helperText={
                (touched[title.toLowerCase()] && errors[title.toLowerCase()]) ||
                " "
              }
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
            className="profile-detail-title"
            sx={{ transition: "0.3s" }}
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
          >
            {icon}
            <Typography>{title}</Typography>
          </Box>
          <Typography sx={{ transition: "0.3s" }} color={"text.secondary"}>
            {type === "tel" ? value.number : value}
          </Typography>
          {editable && (
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
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserProfileDetail;
