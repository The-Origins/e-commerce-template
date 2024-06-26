import React, { useState } from "react";
import { AddLocation, ChevronRight, Place, Search } from "@mui/icons-material";
import {
  Button,
  Box,
  Typography,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import AuthWorker from "../../../../scripts/authWorker";

const Address = ({ region, setStage, setRegisterForm }) => {
  const theme = useTheme();
  const authWorker = new AuthWorker();
  const [search, setSearch] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({ address: "required" });
  const validator = {
    address: [{ key: (value) => value.length, message: "required" }],
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleSearchChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, validator, target));
    setSearch(target.value);
    if (!search && !searchSuggestions.length) {
      setSearchSuggestions([
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Karen",
          address: "The hub karen",
          type: "home",
          locationInfo: "House no A5, 3rd floor",
          fee: 400,
        },
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Kilimani",
          address: "Adams arcade",
          locationInfo: "4th floor",
          type: "pick-up station",
          fee: 300,
        },
        {
          country: "Kenya",
          city: "Nairobi",
          street: "Ngong",
          address: "Milele mall",
          locationInfo: "My business, 10th floor",
          type: "other",
          fee: 600,
        },
      ]);
    }
    if (!target.value.length && searchSuggestions.length) {
      setSearchSuggestions([]);
    }
  };

  const handleAddressSelect = (address) => {
    setRegisterForm((prev) => ({
      ...prev,
      addresses: { saved: [{ ...address }] },
    }));
    setStage(4);
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
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AddLocation />
          Add your adress
        </Typography>
        <Box display={"flex"} flexDirection={"column"}>
          <TextField
            type="search"
            placeholder={`${region.city}, ${region.country_name}`}
            name="address"
            value={search}
            onChange={handleSearchChange}
            onBlur={handleBlur}
            error={Boolean(touched.address) && Boolean(errors.address)}
            helperText={(touched.address && errors.address) || ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"10px"}
            height={searchSuggestions.length ? "260px" : "0px"}
            overflow={"hidden"}
            sx={{
              transition: "0.3s",
            }}
          >
            {searchSuggestions.map((suggestion, index) => (
              <Box
                width={"100%"}
                padding={"10px"}
                boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
                borderRadius={"20px"}
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                position={"relative"}
                sx={{
                  transition: "0.3s",
                  ":hover": {
                    bgcolor: theme.palette.grey[200],
                    cursor: "pointer",
                  },
                  ":active": {
                    bgcolor: "white",
                  },
                }}
              >
                <button
                  onClick={() => handleAddressSelect(searchSuggestions[index])}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    padding: 0,
                    border: "none",
                    color: "transparent",
                  }}
                >
                  .
                </button>
                <Place sx={{ color: "text.secondary", fontSize: "2rem" }} />
                <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                  <Typography fontWeight={"bold"}>
                    {suggestion.address}, {suggestion.street}
                  </Typography>
                  <Typography>
                    {suggestion.city}, {suggestion.country}
                  </Typography>
                </Box>
                <ChevronRight />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(2)}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default Address;
