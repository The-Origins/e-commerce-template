import { useMediaQuery, useTheme, Box, Typography, Link } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";

const ProductCardContainer = (props) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      key={`container-${props.id}`}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      margin={"30px 0px"}
    >
      <Typography margin={"20px"} color={"text.secondary"}>
        {props.containerTitle}
      </Typography>
      {!props.isRecent && <Box
        position={"absolute"}
        bottom={18}
        height={"50px"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link
          href={`/results?search=${String(props.containerTitle)
            .split(" ")
            .join("+")}`}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "50px",
            textDecoration: "none",
          }}
        >
          View more
          <ArrowRightAlt sx={{ ml: "5px" }} />
        </Link>
      </Box>}
      <Box
        width={"100%"}
        borderRadius={"25px"}
        border={`1px solid ${theme.palette.grey[400]}`}
        display={"flex"}
        alignItems={"center"}
        justifyContent={isNotPhone ? "center" : "flex-start"}
        sx={{
          overflowX: "scroll",
          scrollbarWidth: isNotPhone ? 0 : undefined,
          "&::-webkit-scrollbar": {
            display: isNotPhone ? "none" : undefined,
          },
        }}
      >
        <Box
          whiteSpace={"nowrap"}
          display={"flex"}
          mt={"30px"}
          mb={"60px"}
          ml={isNotPhone ? undefined : "20px"}
          gap={"20px"}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCardContainer;
