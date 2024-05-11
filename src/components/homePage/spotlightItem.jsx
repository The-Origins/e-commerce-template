import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
                {props.title}
              </Typography>
              <Typography>{props.description}</Typography>
            </Box>
            <Link href={props.action.path}>
              <Button variant="outlined">{props.action.title}</Button>
            </Link>
          </Box>
        </Box>
        <Box
          width={isNotPhone ? "50%" : "100%"}
          height={isNotPhone ? "100%" : "50%"}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default SpotlightItem;
