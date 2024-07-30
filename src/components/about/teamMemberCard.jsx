import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const TeamMemberCard = ({ image, title, description }) => {
  const theme = useTheme();
  return (
    <Box
      height={"300px"}
      width={"clamp(200px, 20vw, 225px)"}
      display={"inline-block"}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
        borderRadius={"20px"}
        overflow={"hidden"}
        sx={{
          cursor: "pointer",
          transition: "0.3s",
          ":hover": {
            boxShadow: `0px 0px 10px 0px ${theme.palette.primary.main}`,
          },
        }}
      >
        <Box
          height={"100%"}
          width={"100%"}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          padding={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
        >
          <Typography fontWeight={"bold"}>{title}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMemberCard;
