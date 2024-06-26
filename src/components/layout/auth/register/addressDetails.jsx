import { Business, Home, LocalShipping, Place } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const AddressDetails = ({ setStage, registerForm, setRegisterForm }) => {
  const theme = useTheme();
  const address = registerForm.addresses.saved[0];
  const [form, setForm] = useState({
    type: registerForm.addresses.saved[0].type || "other",
    locationInfo: registerForm.addresses.saved[0].locationInfo,
  });

  const handleChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleNext = () => {
    setRegisterForm((prev) => ({
      ...prev,
      addresses: {saved:[{...prev.addresses.saved[0], ...form}]},
    }));
    setStage(5);
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
        <Box
          display={"flex"}
          gap={"10px"}
          width={"100%"}
          border={`1px solid ${theme.palette.grey[400]}`}
          padding={"20px 10px"}
          borderRadius={"10px"}
        >
          <Place sx={{ color: "text.secondary" }} />
          <Box display={"flex"} flexDirection={"column"}>
            <Typography>
              {address.address}, {address.street}
            </Typography>
            <Typography fontSize={"0.8rem"} color={"text.secondary"}>
              {address.city}, {address.country}
            </Typography>
          </Box>
        </Box>
        {address.type !== "pick-up station" ? (
          <>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Typography fontWeight={"bold"}>Address type:</Typography>
              <RadioGroup name="type" value={form.type} onChange={handleChange}>
                <FormControlLabel
                  value={"home"}
                  control={<Radio />}
                  label={
                    <Typography display={"flex"} gap={"5px"}>
                      <Home sx={{ color: theme.palette.grey[500] }} />
                      Home
                    </Typography>
                  }
                />
                <FormControlLabel
                  value={"office"}
                  control={<Radio />}
                  label={
                    <Typography display={"flex"} gap={"5px"}>
                      <Business sx={{ color: theme.palette.grey[500] }} />
                      Office
                    </Typography>
                  }
                />
                <FormControlLabel
                  value={"other"}
                  control={<Radio />}
                  label={
                    <Typography display={"flex"} gap={"5px"}>
                      <Place sx={{ color: theme.palette.grey[500] }} />
                      Other
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Typography fontWeight={"bold"}>
                {form.type !== "other"
                  ? form.type.charAt(0).toUpperCase() + form.type.substring(1)
                  : "Location"}{" "}
                info:
              </Typography>
              <TextField
                name="locationInfo"
                value={form.locationInfo}
                onChange={handleChange}
                placeholder={
                  form.type === "home"
                    ? "House no, Floor no"
                    : form.type === "office"
                    ? "Business name, Floor no"
                    : "Location details"
                }
              />
            </Box>
          </>
        ) : (
          <Box
            display={"flex"}
            gap={"10px"}
            width={"100%"}
            border={`1px solid ${theme.palette.grey[400]}`}
            padding={"20px 10px"}
            borderRadius={"10px"}
          >
            <LocalShipping
              sx={{ fontSize: "2rem", color: theme.palette.grey[500] }}
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontWeight={"bold"}>Pick-up station</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Opening hours: 8:00 - 17:00
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Monday - friday
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(3)}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={handleNext}
        >
          next
        </Button>
      </Box>
    </Box>
  );
};

export default AddressDetails;
