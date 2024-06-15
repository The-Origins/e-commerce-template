import { PhoneAndroid } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MobilePayment = ({ form, setPayment, setStage, country_codes }) => {
  const [details, setDetails] = useState({
    code: form.phoneCode,
    number: form.phoneNumber,
  });
  const [errors, setErrors] = useState({ number: "required" });
  const [touched, setTouched] = useState({});
  const handleChange = ({ target }) => {
    setErrors((prev) => ({
      ...prev,
      [target.name]: !target.value.length ? "required" : undefined,
    }));
    setDetails((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleBack = () => {
    setStage(5);
  };

  const handleBlur = () => {
    setTouched({ number: true });
  };

  const handleConfirm = () => {
    setPayment({ type: "mobile", details });
    setStage(8);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      width={"min(400px, 90%)"}
      height={"100%"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex" }}
        >
          <PhoneAndroid />
          Add your mobile number
        </Typography>
        <TextField
          type="tel"
          placeholder="phone number"
          name="number"
          value={details.number}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{
            flexBasis: 200,
            flexGrow: 1,
            "& > div": { padding: 0 },
            "& > div > div": { marginRight: "5px" },
          }}
          InputProps={{
            startAdornment: (
              <Select
                autoWidth
                name="code"
                value={details.code}
                onChange={handleChange}
                renderValue={(value) => value}
              >
                {country_codes.map((code) => (
                  <MenuItem value={code.code}>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography>{code.name}</Typography>
                      <Typography color={"primary.main"}>
                        {code.code}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            ),
          }}
        />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={handleBack}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={
            !Boolean(Object.keys(touched).length) ||
            Boolean(Object.keys(errors).length)
          }
          onClick={handleConfirm}
        >
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default MobilePayment;
