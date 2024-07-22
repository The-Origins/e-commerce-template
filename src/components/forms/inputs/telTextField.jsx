import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import callingCodes from "../../../../lib/callingCodes.json";

const TelTextField = ({
  form,
  errors,
  touched,
  handleChange,
  handleBlur,
  style,
  size,
}) => {
  return (
    <TextField
      size={size || "medium"}
      type="tel"
      placeholder="phone number"
      name={"phoneNumber"}
      value={form.phoneNumber}
      onChange={handleChange}
      onBlur={handleBlur}
      error={Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)}
      helperText={(touched.phoneNumber && errors.phoneNumber) || " "}
      sx={{
        ...style,
        "& > div": { padding: 0 },
        "& > div > div": { marginRight: "5px" },
      }}
      InputProps={{
        startAdornment: (
          <Select
            autoWidth
            name={"phoneCode"}
            value={form.phoneCode}
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
