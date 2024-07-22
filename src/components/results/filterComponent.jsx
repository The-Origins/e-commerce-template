import { RotateLeft } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const FilterComponent = ({
  option,
  filterOptions,
  filters,
  handleFilterChange,
  resetFilter,
}) => {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={"20px"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        position={"relative"}
        justifyContent={"center"}
      >
        <Typography padding={"10px"} fontWeight={"bold"}>
          {option.charAt(0).toUpperCase() + option.substring(1)}
        </Typography>
        <Tooltip title={"reset filter"}>
          <IconButton
            disabled={filters[option] === "All"}
            onClick={() => resetFilter(option)}
            sx={{
              opacity: filters[option] === "All" ? 0 : 1,
              position: "absolute",
              right: 0,
              m: "5px",
            }}
          >
            <RotateLeft />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        padding={"0px 20px 20px 20px"}
        gap={"10px"}
        maxHeight={"250px"}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "25px",
            bgcolor: theme.palette.grey[300],
            transition: "0.3s",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            cursor: "pointer",
            bgcolor: theme.palette.grey[400],
          },
        }}
      >
        <RadioGroup
          row
          aria-labelledby={`result-filters-group`}
          name={option}
          value={filters[option]}
          onChange={handleFilterChange}
          sx={{
            width: "90%",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          {filterOptions[option].map((item) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item.charAt(0).toUpperCase() + item.substring(1)}
              checked={filters[option] === item}
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default FilterComponent;
