import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import AuthWorker from "../../../scripts/authWorker";

const CurrencySelect = ({ form, handleChange }) => {
  const authWorker = new AuthWorker();
  const currencies = authWorker.getCurrencies();
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
