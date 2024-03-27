import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

const OrderElement = (props) => {
  const theme = useTheme();
  const statusColors = {
    processing: "#0382FF",
    fulfilling: "#FF9000",
    fulfilled: "#15FF02",
  };

  return (
    <Link
      href={`/orders/items?i=${props.id}`}
      width={"100%"}
      sx={{ textDecoration: "none", color: "black" }}
    >
      <Box
        width={"100%"}
        border={`1px solid ${theme.palette.grey[400]}`}
        display={"flex"}
        flexDirection={"column"}
        padding={"20px"}
        borderRadius={"25px"}
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
            <CalendarMonth />
            <Typography color={"text.secondary"}>
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
            <Box
            key={`order-item-${props.id}-item-${index}`}
              width={"90%"}
              minHeight={"100px"}
              display={"flex"}
              alignItems={"center"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
              borderRadius={"20px"}
              padding={"20px"}
              sx={{ transition: "0.3s" }}
            >
              <Box
                height={"90px"}
                width={"100px"}
                margin={"0px 20px"}
                sx={{
                  backgroundImage: `url(${item.product.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "5px",
                }}
              />
              <Box
                pl={"10px"}
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
                height={"100%"}
                justifyContent={"space-evenly"}
                gap={"5px"}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={"clamp(1rem, 6vw, 1.2rem)"}
                >
                  {item.product.name}
                </Typography>
                <Typography
                  key={`cartItem-details`}
                  fontSize={"clamp(0.7rem, 2vw, 0.9rem)"}
                  color={"text.secondary"}
                >
                  {Object.keys(item.details)
                    .map(
                      (detail) =>
                        `${
                          detail.charAt(0).toUpperCase() + detail.substring(1)
                        }: ${item.details[detail]}${
                          detail === "weight" && "Kg"
                        }`
                    )
                    .join(", ")}
                </Typography>
                <Typography>
                  {item.product.unitPrice.currency}{" "}
                  {item.details.weight * item.product.unitPrice.amount}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Link>
  );
};

export default OrderElement;
