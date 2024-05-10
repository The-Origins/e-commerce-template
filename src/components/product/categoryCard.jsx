import { ArrowForward } from "@mui/icons-material";
import {
  useMediaQuery,
  useTheme,
  Box,
  Link,
  Typography,
  Skeleton,
} from "@mui/material";
import React from "react";

const CategoryCard = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      maxWidth={"400px"}
      borderRadius={"25px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      padding={"30px 20px"}
      flexBasis={300}
      flexGrow={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        gap={"20px"}
        flexDirection={isNotPhone ? "row" : "row-reverse"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          {props.isLoading ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={isNotPhone ? "20px" : "5px"}
            >
              <Skeleton variant="rounded" />
              <Skeleton variant="rounded" />
              <Skeleton variant="rounded" />
            </Box>
          ) : (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={isNotPhone ? "15px" : "5px"}
            >
              <Typography
                color={"text.secondary"}
                fontSize={"clamp(0.4rem, 3vw, 0.8rem)"}
              >
                {props.subTitle}
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"24px"}>
                {props.title}
              </Typography>
              <Typography fontSize={"0.9rem"} fontWeight={"lighter"}>
                {props.description}
              </Typography>
            </Box>
          )}
          <Link
            href={`/results?search=${props.title
              .split(" ")
              .join("+")
              .toLowerCase()}`}
            sx={{
              borderRadius: "25px",
              color: "black",
              width: "160px",
              height: "50px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              ":hover .shop-now-btn": {
                width: "100%",
                justifyContent: "flex-end",
              },
              ":hover": { color: "white", cursor: "pointer" },
              ":hover .arrow": { margin: "10px" },
            }}
          >
            Shop now
            <Box
              className={"shop-now-btn"}
              bgcolor={"primary.main"}
              position={"absolute"}
              left={0}
              zIndex={-1}
              width={"40px"}
              height={"40px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ transition: "0.3s", transformOrigin: "left" }}
              borderRadius={"25px"}
            >
              <ArrowForward className="arrow" />
            </Box>
          </Link>
        </Box>
        {props.isLoading ? (
          <Skeleton
            width={isNotPhone ? "150px" : "100px"}
            height={isNotPhone ? "150px" : "100px"}
            variant="rounded"
          />
        ) : (
          <Box
            width={isNotPhone ? "150px" : "100px"}
            height={isNotPhone ? "150px" : "100px"}
            sx={{
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CategoryCard;
