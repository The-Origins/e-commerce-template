import React, { useState } from "react";
import { AddLocation, ChevronRight, Place, Search } from "@mui/icons-material";
import {
  Button,
  Box,
  Typography,
  InputAdornment,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useSelector } from "react-redux";

const SelectAddress = ({
  setStage,
  setAddress,
  onCancel,
  enableSkip,
  onSkip,
}) => {
  const region = useSelector((state) => state.region);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([
    {
      country: "Country 1",
      city: "City 1",
      street: "1st street",
      address: "Address 1",
      type: "home",
      locationInfo: "House no A5, 3rd floor",
      fee: { amount: 40, currency: "USD" },
    },
    {
      country: "Country 1",
      city: "City 1",
      street: "2nd street",
      address: "Address 2",
      type: "pick-up station",
      locationInfo: "4rd floor",
      fee: { amount: 20, currency: "USD" },
    },
    {
      country: "Country 1",
      city: "City 1",
      street: "3rd street",
      address: "Address 3",
      type: "office",
      locationInfo: "10th floor",
      fee: { amount: 50, currency: "USD" },
    },
  ]);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleAddressSelect = (address) => {
    setOpen(false);
    setAddress(address);
    setStage(1);
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
        <Autocomplete
          fullWidth
          name="search"
          autoHighlight
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          options={suggestions}
          inputValue={search}
          onInputChange={handleChange}
          onChange={(value) => handleAddressSelect(value)}
          getOptionLabel={(option) => option.address}
          renderOption={(props, option) => (
            <Box
              {...{ ...props, onClick: () => handleAddressSelect(option) }}
              component={"li"}
              display={"flex"}
              gap={"10px"}
            >
              <Place />
              <Box width={"100%"} display={"flex"} flexDirection={"column"}>
                <Typography>
                  {option.address}, {option.street}
                </Typography>
                <Typography color={"text.secondary"}>
                  {option.country}, {option.city}
                </Typography>
              </Box>
              <ChevronRight />
            </Box>
          )}
          renderInput={(props) => (
            <TextField
              {...props}
              name="search"
              placeholder={`${region.country}, ${region.city}`}
              fullWidth
              InputProps={{
                ...props.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={onCancel}>
          Cancel
        </Button>
        {enableSkip && (
          <Button onClick={onSkip} sx={{color:"text.secondary", textTransform:"none"}}>
            skip
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SelectAddress;
