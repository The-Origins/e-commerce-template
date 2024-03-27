import React from "react";
import { useTheme, Box, Link, Typography } from "@mui/material";
import CategorizeComponent from "./categorizeComponent";

const ProductMenuItem = (props) => {
  const theme = useTheme();
  return (
    <Link
      href={`/cake?c=${props.id}`}
      sx={{
        textDecoration: "none",
        width: "min(400px,100%)",
        margin: "0px 5px",
      }}
    >
      <Box
        position={"relative"}
        boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
        borderRadius={"10px"}
        display={"flex"}
        width={"100%"}
        height={"40px"}
        justifyContent={"flex-start"}
        gap={"10px"}
        alignItems={"center"}
        overflow={"hidden"}
        sx={{
          transition: "0.3s",
          ":hover":{
            boxShadow:`0px 0px 10px 0px ${theme.palette.grey[400]}`
          },
        }}
      >
        <Typography marginLeft={"20px"}>{props.name}</Typography>
        <Box display={"flex"} gap={"5px"}>
          {props.categories.map((category, index) => (
            <CategorizeComponent category={category} id={index} />
          ))}
        </Box>
      </Box>
    </Link>
  );
};

export default ProductMenuItem;
