import React from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

const RatingDistributionComponent = (props) => {
  const theme = useTheme();
  return (
    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
      <Box display={"flex"} gap={"3px"} alignItems={"center"}>
        <Typography>{props.rating}</Typography>
        <Star sx={{ color: "#FAAF00" }} />
        <Typography>({props.occurences})</Typography>
      </Box>
      <Box
        width={"100px"}
        height={"10px"}
        border={`1px solid ${theme.palette.grey[400]}`}
        borderRadius={"10px"}
        overflow={"hidden"}
      >
        <Box
          height={"100%"}
          bgcolor={"#FAAF00"}
          width={`${(props.occurences / props.totalVotes) * 100}%`}
        ></Box>
      </Box>
    </Box>
  );
};

export default RatingDistributionComponent;
