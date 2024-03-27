import React, { useEffect, useRef } from "react";
import { useMediaQuery, Box, IconButton, Typography } from "@mui/material";
import data from "../../lib/data";
import CakeComponent from "./productMenuItem";
import { Cake, Close, Whatshot } from "@mui/icons-material";

const ProductMenuContainer = (props) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const productsMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target)) {
        props.switchIsAllProducts(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      ref={productsMenuRef}
      position={"absolute"}
      width={"100%"}
      zIndex={1}
      bgcolor={"white"}
      top={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        transition: "0.3s ease-in-out",
        transform: props.isAllProducts ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
      }}
    >
      {!isNotPhone && (
        <Box
          position={"absolute"}
          top={0}
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <IconButton
            sx={{ mr: "20px" }}
            onClick={() => props.switchIsAllProducts(false)}
          >
            <Close />
          </IconButton>
        </Box>
      )}
      <Box
        position={"relative"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        maxHeight={"100vh"}
        sx={{ overflowY: "scroll" }}
        width={"80%"}
        margin={"40px"}
      >
        {isNotPhone && (
          <Box
            position={"absolute"}
            top={0}
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <IconButton
              sx={{ mr: "20px" }}
              onClick={() => props.switchIsAllProducts(false)}
            >
              <Close />
            </IconButton>
          </Box>
        )}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          width={"100%"}
        >
          <Typography color={"text.secondary"}>
            Trending <Whatshot sx={{ ml: "4px", fontSize: "13px" }} />
          </Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
            {data.products.map((cake, index) => {
              if (cake.categories.includes("trending")) {
                return <CakeComponent id={index} {...cake} />;
              }
              return undefined;
            })}
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          width={"100%"}
        >
          <Typography color={"text.secondary"}>
            All products <Cake sx={{ ml: "4px", fontSize: "13px" }} />
          </Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={"20px"} mb={"20px"}>
            {data.products.map((cake, index) => (
              <CakeComponent id={index} {...cake} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductMenuContainer;
