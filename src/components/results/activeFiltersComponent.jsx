import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";
import { convertHex } from "../../theme";

const ActiveFiltersComponent = ({
  resultCount,
  filters,
  price,
  currency,
  resetFilter,
}) => {
  const theme = useTheme();
  const handleReset = (filter) => {
    if (filter === "min" || filter === "max") {
      resetFilter("price");
    } else {
      resetFilter(filter);
    }
  };

  return (
    <Box
      padding={"5px 0px"}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      gap={"5px"}
    >
      <Box display={"flex"} gap={"5px"}>
        <Typography fontSize={"0.9rem"} color={"text.secondary"}>
          {Number(resultCount).toLocaleString("US")}
        </Typography>
        <Typography fontSize={"0.9rem"} color={"text.secondary"}>
          {`Result${resultCount === 1 ? "" : "s"}`}
        </Typography>
      </Box>
      <Box
        width={"100%"}
        padding={"0px 5px"}
        sx={{
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            height: "0px",
          },
        }}
      >
        <Box display={"flex"} gap={"10px"}>
          {Object.keys(filters).map((filter) => {
            if (
              filters[filter] === "All" ||
              (filter === "min" && filters.min === price.min) ||
              (filter === "max" && filters.max === price.max)
            ) {
              return <></>;
            }
            return (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                borderRadius={"10px"}
                padding={"0px 10px"}
                color={"primary.main"}
                bgcolor={`rgba(${convertHex(theme.palette.primary.main).join(
                  " "
                )} / 0.2)`}
              >
                <Typography fontSize={"0.75rem"}>
                  {filter}:{" "}
                  {(filter === "max" || filter === "min") && currency.symbol}
                  {filters[filter]}
                </Typography>
                <IconButton onClick={() => handleReset(filter)} size="small">
                  <Close sx={{ fontSize: "0.7rem" }} />
                </IconButton>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveFiltersComponent;
