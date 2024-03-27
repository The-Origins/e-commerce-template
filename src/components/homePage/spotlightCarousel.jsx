import React, { useEffect, useState } from "react";
import data from "../../lib/data";
import { Box, Button, IconButton, Link, MobileStepper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const SpotlightCarousel = (props) => {
  const theme = useTheme();
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const maxIndex = data.spotlights.length;

  const isNotPhone = useMediaQuery("(min-width:1000px)");

  const next = () => {
    if (spotlightIndex < maxIndex - 1) {
      setSpotlightIndex((prev) => prev + 1);
    } else {
      setSpotlightIndex(0);
    }
  };

  const back = () => {
    if (spotlightIndex !== 0) {
      setSpotlightIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const spotlightInterval = setInterval(() => next(), 5000);
    return () => clearInterval(spotlightInterval);
  }, [spotlightIndex]);
  return (
    <Box
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      overflow={"hidden"}
      width={"100%"}
      height={"70%"}
      borderRadius={"20px"}
      position={"relative"}
      display={"flex"}
      alignItems={"center"}
    >
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        whiteSpace={"nowrap"}
        sx={{
          transition: "0.5s ease-in-out",
          transform: `translateX(-${
            spotlightIndex !== 0 ? spotlightIndex + "00%" : "0%"
          })`,
        }}
      >
        {data.spotlights.map((highlight, index) => (
          <Box
            key={index}
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
                      {highlight.spotlight.title}
                    </Typography>
                    <Typography>{highlight.spotlight.description}</Typography>
                    <Typography fontSize={"1.4rem"}>
                      {highlight.unitPrice.currency}{" "}
                      {highlight.unitPrice.amount}
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Link
                      href={`/product?p=${highlight.id}`}
                      sx={{
                        textDecoration: isNotPhone ? "none" : "underline",
                        fontSize: "clamp(0.2rem, 5vw, 0.9rem)",
                        height: "50px",
                        width: isNotPhone ? "200px" : undefined,
                        border: isNotPhone ? `1px solid #FF2681` : undefined,
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
                      View Details
                    </Link>
                    {highlight.spotlight.type === "product" && (
                      <Button disableElevation variant="contained">
                        + add to cart
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                width={isNotPhone ? "50%" : "100%"}
                height={isNotPhone ? "100%" : "50%"}
                sx={{
                  backgroundImage: `url(${highlight.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
        <IconButton onClick={back} disabled={spotlightIndex < 1}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={next} disabled={spotlightIndex >= maxIndex - 1}>
          <ChevronRight />
        </IconButton>
      </Box>
      <Box
        position={"absolute"}
        bottom={0}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <MobileStepper
          variant="dots"
          steps={maxIndex}
          activeStep={spotlightIndex}
          position="static"
          sx={{ background: "transparent" }}
        />
      </Box>
    </Box>
  );
};

export default SpotlightCarousel;
