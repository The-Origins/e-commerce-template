import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";
import UserProductCard from "../product/userProductCard";

const statusColors = {
  processing: "#0382FF",
  fulfilling: "#FF9000",
  fulfilled: "#15FF02",
};

const OrderElement = (props) => {
  const theme = useTheme();

  return (
    <Link
      href={`/user/orders/items?id=${props.id}`}
      width={"100%"}
      sx={{ textDecoration: "none", color: "black" }}
    >
      <Box
        maxWidth={"100%"}
        border={`1px solid ${theme.palette.grey[400]}`}
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"25px"}
        padding={"20px"}
        sx={{
          transition: "0.3s",
          ":hover": {
            boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
            cursor: "pointer",
          },
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"20px 0px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Box
              width={"10px"}
              height={"10px"}
              borderRadius={"50%"}
              bgcolor={statusColors[props.status]}
            />
            <Typography color={statusColors[props.status]}>
              {props.status.charAt(0).toUpperCase() + props.status.substring(1)}
            </Typography>
          </Box>
          <Box display={"flex"} gap={"1px"}>
            <CalendarMonth fontSize={"clamp(0.8rem, 3vw, 1rem)"} />
            <Typography
              color={"text.secondary"}
              fontSize={"clamp(0.8rem, 3vw, 1rem)"}
            >
              {props.dateCreated}
            </Typography>
          </Box>
        </Box>
        <Box
          width={"100%"}
          padding={"20px 0px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          {props.items.map((item, index) => (
            <UserProductCard id={index} item={item} />
          ))}
        </Box>
      </Box>
    </Link>
  );
};

export default OrderElement;
