import React, { useEffect, useState } from "react";
import Carousel from "../layout/carousel";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import FetchWorker from "../../utils/fetchWorker";
import IsErrorComponent from "../layout/isError";
import { Link } from "gatsby";

const Spotlights = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [spotlights, setSpotlights] = useState([]);
  const [reloadCounter, setReloadCounter] = useState(0);

  useEffect(() => {
    const fetchWorker = new FetchWorker();
    fetchWorker
      .fetchSpotlights()
      .then((res) => {
        setSpotlights(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [reloadCounter]);

  return (
    <Carousel
      width={"100%"}
      height={"60vh"}
      index={spotlightIndex}
      setIndex={setSpotlightIndex}
      maxIndex={spotlights.length - 1}
      isLoading={isLoading}
      border
      isAuto
      controls
      swipeable
    >
      {isError ? (
        <IsErrorComponent setReloadCounter={setReloadCounter} />
      ) : (
        spotlights.map((spotlight) => (
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
                    {spotlight.title}
                  </Typography>
                  <Typography>{spotlight.description}</Typography>
                </Box>
                <Link to={spotlight.action.path}>
                  <Button variant="outlined">{spotlight.action.title}</Button>
                </Link>
              </Box>
            </Box>
            <Box
              width={isNotPhone ? "50%" : "100%"}
              height={isNotPhone ? "100%" : "50%"}
              sx={{
                backgroundImage: `url(${spotlight.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
        ))
      )}
    </Carousel>
  );
};

export default Spotlights;
