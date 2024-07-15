import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  MobileStepper,
  Skeleton,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

const Carousel = ({
  width,
  height,
  index,
  setIndex,
  interval,
  maxIndex,
  border = false,
  isAuto = false,
  isLoading = false,
  controls = false,
  swipeable = false,
  style,
  children,
}) => {
  const theme = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const mappedChildren = React.Children.map(children, (child, index) => (
    <Box
      key={`carousel-item-${index}`}
      sx={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "100%",
      }}
    >
      <Box position={"absolute"} width={"100%"} height={"100%"} sx={style}>
        {child}
      </Box>
    </Box>
  ));

  const next = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const back = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: swipeable ? next : () => {},
    onSwipedRight: swipeable ? back : () => {},
  });

  useEffect(() => {
    if (isAuto) {
      const nextInterval = setInterval(() => {
        if (!isHovering) {
          next();
        }
      }, interval || 5000);
      return () => clearInterval(nextInterval);
    }
  }, [index, isHovering, isAuto]);

  return (
    <Box
      {...swipeHandlers}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{
        width,
        height,
        borderRadius: "20px",
        boxShadow: border
          ? `0px 0px 10px 0px ${theme.palette.grey[400]}`
          : undefined,
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {isLoading ? (
        <Skeleton width={"100%"} height={"100%"} variant="rounded" />
      ) : (
        <>
          <Box
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            whiteSpace={"nowrap"}
            sx={{
              transition: "0.5s ease-in-out",
              transform: `translateX(-${index !== 0 ? index + "00%" : "0%"})`,
            }}
          >
            {mappedChildren}
          </Box>
          {controls && (
            <>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <IconButton onClick={back} disabled={index < 1}>
                  <ChevronLeft />
                </IconButton>
                <IconButton onClick={next} disabled={index >= maxIndex}>
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
                  steps={maxIndex + 1}
                  activeStep={index}
                  position="static"
                  sx={{ background: "transparent" }}
                />
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Carousel;
