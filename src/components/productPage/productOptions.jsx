import { useTheme } from "@emotion/react";
import { Favorite, MoreVert, Share } from "@mui/icons-material";
import { Box, IconButton, ListItemIcon, MenuItem } from "@mui/material";
import React, { useEffect, useRef } from "react";

const ProductOptions = (props) => {
    const theme = useTheme()
    const productOptionsRef = useRef(null)
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (productOptionsRef.current && !productOptionsRef.current.contains(event.target)) {
          props.switchIsProductOptions(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  return (
    <Box position={"relative"} ref={productOptionsRef}>
      <IconButton onClick={() => props.switchIsProductOptions(true)}>
        <MoreVert />
      </IconButton>
      <Box
        top={"100%"}
        right={0}
        position={"absolute"}
        display={props.isProductOptions ? "flex" : "none"}
        flexDirection={"column"}
        bgcolor={"white"}
        zIndex={1}
        boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
        overflow={"hidden"}
        borderRadius={"20px"}
      >
        <MenuItem sx={{ margin: "5px" }} onClick={() => props.switchIsProductOptions(false)}>
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          add to favourites
        </MenuItem>
        <MenuItem sx={{ margin: "5px" }} onClick={() => props.switchIsProductOptions(false)}>
          <ListItemIcon>
            <Share />
          </ListItemIcon>
          share
        </MenuItem>
      </Box>
    </Box>
  );
};

export default ProductOptions;
