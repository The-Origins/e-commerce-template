import React from "react";
import { useTheme, Box, Typography, Avatar, Rating } from "@mui/material";

const ReviewComponent = (props) => {
  const theme = useTheme();
  return (
    <Box
      margin={"20px 0px"}
      display={"flex"}
      width={"90%"}
      alignItems={"center"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      borderRadius={"25px"}
    >
      <Box
        margin={"20px"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Avatar />
              <Typography>{props.userName}</Typography>
            </Box>
            <Rating readOnly value={props.rating} />
          </Box>
          <Typography color={"text.secondary"}>{props.dateCreated}</Typography>
        </Box>
        <Box width={"100%"}>
          <Typography margin={"20px"} fontWeight={"bold"}>{props.review.title}</Typography>
          <Typography margin={"20px"}>{props.review.body}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewComponent;
