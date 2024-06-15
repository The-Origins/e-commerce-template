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
import React from "react";

const AddressDetails = ({ address, setAddress, setStage }) => {
  const theme = useTheme();
  const handleChange = ({ target }) => {
    setAddress((prev) => ({ ...prev, [target.name]: target.value }));
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
              <RadioGroup
                name="type"
                value={address.type}
                onChange={handleChange}
              >
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
                {address.type !== "other"
                  ? address.type.charAt(0).toUpperCase() +
                    address.type.substring(1)
                  : "Location"}{" "}
                info:
              </Typography>
              <TextField
                name="locationInfo"
                value={address.locationInfo}
                onChange={handleChange}
                placeholder={
                  address.type === "home"
                    ? "House no, Floor no"
                    : address.type === "office"
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
          onClick={() => setStage(5)}
        >
          next
        </Button>
      </Box>
    </Box>
  );
};

export default AddressDetails;
