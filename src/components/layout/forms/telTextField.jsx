import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import AuthWorker from "../../../scripts/authWorker";

const TelTextField = ({
  number,
  code,
  form,
  errors,
  touched,
  handleChange,
  handleBlur,
  style,
}) => {
  number = number || "number";
  code = code || "code";
  const authWorker = new AuthWorker();
  const callingCodes = authWorker.getCallingCodes();

  return (
    <TextField
      type="tel"
      placeholder="phone number"
      name={number}
      value={form[number]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={Boolean(touched[number]) && Boolean(errors[number])}
      helperText={(touched[number] && errors[number]) || " "}
      sx={{
        ...{ style },
        "& > div": { padding: 0 },
        "& > div > div": { marginRight: "5px" },
      }}
      InputProps={{
        startAdornment: (
          <Select
            autoWidth
            name={code}
            value={form[code]}
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
                  <Typography>{callingCodes[code].countryName}</Typography>
                  <Typography color={"primary.main"}>{code}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        ),
      }}
    />
  );
};

export default TelTextField;
