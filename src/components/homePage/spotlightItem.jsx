import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const SpotlightItem = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      sx={{
        display: "inline-block",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={isNotPhone ? "row" : "column-reverse"}
      >
        <Box
          width={isNotPhone ? "50%" : "100%"}
          height={isNotPhone ? "100%" : "50%"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            width={isNotPhone ? "80%" : "90%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignItems={"flex-start"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={isNotPhone ? "20px" : "1px"}
            >
              <Typography
                variant="h3"
                fontSize={"clamp(1rem, 7vw, 2.5rem)"}
                fontWeight={"bold"}
              >
                {props.spotlight.title}
              </Typography>
              <Typography>{props.spotlight.description}</Typography>
            </Box>
            <Link
              href={props.spotlight.action.path}
              sx={{
                textDecoration:"none",
                fontSize: "clamp(0.2rem, 5vw, 0.9rem)",
                border: `1px solid ${theme.palette.primary.main}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                transition: "0.3s",
                ":hover": {
                  color: "white",
                  bgcolor: "primary.main",
                  border: "none",
                },
              }}
            >
              <Typography padding={"10px 30px"}>{props.spotlight.action.title}</Typography>
            </Link>
          </Box>
        </Box>
        <Box
          width={isNotPhone ? "50%" : "100%"}
          height={isNotPhone ? "100%" : "50%"}
          sx={{
            backgroundImage: `url(${props.spotlight.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default SpotlightItem;
