import { Add, Paid, Payment, Place } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const SelectCheckoutChange = ({
  type,
  data,
  setIsChange,
  setStage,
  setDetail,
}) => {
  const theme = useTheme();

  const handleSelect = ({ target }) => {
    setDetail(target.value);
    setIsChange(false);
  };

  return (
    <Box
      width={"min(400px, 90%)"}
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
      {data.map((element) => (
        <button
          onClick={handleSelect}
          value={element}
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
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Typography fontWeight={"bold"}>
                {type === "payment"
                  ? element.type
                  : type === "delivery"
                  ? `${element.address}, ${element.street}`
                  : ""}
              </Typography>
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
  );
};

export default SelectCheckoutChange;
