import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import currencies from "../../../../lib/currencies.json"

const CurrencySelect = ({ form, handleChange }) => {
  return (
    <Select
      autoWidth
      name="currency"
      value={form.currency}
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
  );
};

export default CurrencySelect;
