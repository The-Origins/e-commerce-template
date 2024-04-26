import React, { useEffect, useRef, useState } from "react";
import data from "../../lib/data";
import {
  Box,
  Button,
  IconButton,
  Link,
  MobileStepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SpotlightItem from "./spotlightItem";

const SpotlightCarousel = (props) => {
  const theme = useTheme();
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const maxIndex = data.spotlights.length;
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (!startX) return;
    const currentX = event.touches[0].clientX;
    const diff = startX - currentX;
    carouselRef.current.scrollLeft += diff;
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setStartX(null);
    next();
  };

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
    <div
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
        width: "100%",
        height: "70%",
        borderRadius: "20px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
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
        {data.spotlights.map((spotlight) => (
          <SpotlightItem spotlight={spotlight} user={props.user}/>
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
    </div>
  );
};

export default SpotlightCarousel;
