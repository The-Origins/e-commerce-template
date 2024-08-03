import { Add, Paid, Place } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const SelectCheckoutChange = ({
  type,
  data,
  currency,
  setStage,
  handleSelect,
}) => {
  const theme = useTheme();
  return (
    <Box
      width={"min(400px, 100%)"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Typography fontWeight={"bold"}>
        Select your {type}{" "}
        {type === "payment" ? "method" : type === "delivery" ? "address" : ""}
      </Typography>
      <Box
        height={"100%"}
        width={"100%"}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "25px",
            bgcolor: theme.palette.grey[300],
          },
          "&::-webkit-scrollbar-thumb:hover": {
            cursor: "pointer",
            bgcolor: theme.palette.grey[400],
          },
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={"0px 10px"}
          gap={"20px"}
        >
          {data.map((element) => (
            <button
              onClick={() => handleSelect(element)}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                padding: "0px",
                textAlign: "start",
              }}
            >
              <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                padding={"20px"}
                gap={"10px"}
                boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
                borderRadius={"20px"}
                sx={{
                  transition: "0.3s",
                  ":hover": {
                    cursor: "pointer",
                    boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
                    color: "primary.main",
                  },
                }}
              >
                {type === "payment" ? (
                  <Paid color="text.secondary" />
                ) : (
                  <Place color="text.secondary" />
                )}
                <Box
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"5px"}
                >
                  <Box
                    display={"flex"}
                    gap={"5px"}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontWeight={"bold"}>
                      {type === "payment"
                        ? element.type
                        : type === "delivery"
                        ? `${element.name}`
                        : ""}
                    </Typography>
                    {type === "delivery" ? (
                      <Typography fontSize={"0.9rem"} color={"primary.main"}>
                        {currency.symbol}{" "}
                        {element.location.deliveryFee.amount}
                      </Typography>
                    ) : (
                      <Box></Box>
                    )}
                  </Box>
                  <Typography color={"text.secondary"}>
                    {type === "payment"
                      ? element.number
                      : type === "delivery"
                      ? `${element.country}, ${element.city}`
                      : ""}
                  </Typography>
                </Box>
              </Box>
            </button>
          ))}
          <button
            onClick={() => setStage(1)}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              padding: "0px",
              textAlign: "start",
            }}
          >
            <Box
              width={"100%"}
              padding={"30px"}
              display={"flex"}
              gap={"20px"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
              borderRadius={"20px"}
              sx={{
                transition: "0.3s",
                ":hover": {
                  cursor: "pointer",
                  boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
                  color: "primary.main",
                },
              }}
            >
              <Add />
              <Typography>add new {type}</Typography>
            </Box>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectCheckoutChange;
