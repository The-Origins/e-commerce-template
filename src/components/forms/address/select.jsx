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

const SelectAddress = ({
  setStage,
  setAddress,
  onCancel,
  enableSkip,
  onSkip,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([
    {
      name: "My address 1",
      region: "region 1",
      country: "Country 1",
      city: "City 1",
      street: "1st street",
      address: "Address 1",
      location: {
        type: "home",
        info: "House no A5, 3rd floor",
        deliveryFee: { amount: 40, currency: "USD" },
      },
    },
    {
      name: "Pick up station 1",
      region: "region 2",
      country: "Country 1",
      city: "City 1",
      street: "2nd street",
      address: "Address 2",
      location: {
        type: "pick-up station",
        info: "4rd floor",
        deliveryFee: { amount: 20, currency: "USD" },
      },
    },
    {
      name: "My address 3",
      region: "region 3",
      country: "Country 1",
      city: "City 1",
      street: "3rd street",
      address: "Address 3",
      location: {
        type: "office",
        info: "10th floor",
        deliveryFee: { amount: 50, currency: "USD" },
      },
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
                <Typography>{option.name}</Typography>
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
              placeholder={`Search`}
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
          <Button
            onClick={onSkip}
            sx={{ color: "text.secondary", textTransform: "none" }}
          >
            skip
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SelectAddress;
