import { ArrowForward } from "@mui/icons-material";
import { useMediaQuery, useTheme, Box, Link, Typography } from "@mui/material";
import React from "react";

const CategoryCard = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      key={`category-${props.id}`}
      borderRadius={"25px"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
      flexBasis={300}
      height={isNotPhone ? "300px" : "200px"}
      flexGrow={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width="95%"
        height={"90%"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={isNotPhone ? "row" : "row-reverse"}
      >
        <Box
          ml={isNotPhone ? undefined : "10px"}
          width={isNotPhone ? "55%" : "65%"}
          height={"70%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={isNotPhone ? "10px" : "5px"}
          >
            <Typography
              color={"text.secondary"}
              fontSize={"clamp(0.4rem, 3vw, 0.8rem)"}
            >
              {props.incentive}
            </Typography>
            <Typography fontWeight={"bold"} fontSize={"24px"}>
              {props.title}
            </Typography>
            <Typography fontSize={"0.9rem"} fontWeight={"lighter"}>
              {props.description}
            </Typography>
          </Box>
          <Link
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
        <Box
          width={isNotPhone ? "45%" : "100px"}
          height={isNotPhone ? "70%" : "100px"}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default CategoryCard;
