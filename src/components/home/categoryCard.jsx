import { ArrowForward } from "@mui/icons-material";
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";
import React from "react";
import SkeletonGroup from "../layout/skeletonGroup";
import { Link } from "gatsby"; // Change this line

const CategoryCard = ({ isLoading, subTitle, title, image, description }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const search = new URLSearchParams(title.toLowerCase())
    .toString()
    .replace("=", "");

  return (
    <Box
      borderRadius={"25px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      padding={"30px 20px"}
      flexBasis={200}
      flexGrow={1}
      display={"flex"}
      alignItems={"center"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        gap={"20px"}
        flexDirection={isNotPhone ? "row" : "row-reverse"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          {isLoading ? (
            <SkeletonGroup count={3} width={"100%"} />
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
                {subTitle}
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"24px"}>
                {title}
              </Typography>
              <Typography fontSize={"0.9rem"} fontWeight={"lighter"}>
                {description}
              </Typography>
            </Box>
          )}
          <Link
            to={`/category?search=${search}`}
            style={{textDecoration: "none", color: "black"}}
          >
            <Box
              sx={{
                borderRadius: "25px",
                width: "160px",
                height: "50px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
            </Box>
          </Link>
        </Box>
        {isLoading ? (
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
              backgroundImage: `url(${image})`,
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
