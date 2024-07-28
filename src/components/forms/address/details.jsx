import React, { useState } from "react";
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

const AddressDetails = ({
  setStage,
  address,
  setAddress,
  handleComplete,
}) => {
  const theme = useTheme();
  const [form, setForm] = useState({
    type: "other",
    info: "",
  });

  const handleChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddress((prev) => ({
      ...prev,
      location: { ...prev.location, ...form },
    }));
    handleComplete();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        gap: "20px",
        height: "100%",
      }}
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
            <Typography>{address.name}</Typography>
            <Typography fontSize={"0.8rem"} color={"text.secondary"}>
              {address.city}, {address.country}
            </Typography>
          </Box>
        </Box>
        {address.location?.type !== "pick-up station" ? (
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
                name="info"
                value={form.info}
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
        <Button variant="outlined" disableElevation onClick={() => setStage(0)}>
          Back
        </Button>
        <Button type="submit" variant="contained" disableElevation>
          confirm
        </Button>
      </Box>
    </form>
  );
};

export default AddressDetails;
