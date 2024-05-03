import { Box, Button, Skeleton, Typography, useTheme } from "@mui/material";
import React from "react";

const CheckoutElement = (props) => {
  const theme = useTheme();
  return (
    <Box display={"flex"} flexDirection={"column"} flexBasis={300} flexGrow={1}>
      <Typography
        sx={{
          display: "flex",
          gap: "10px",
          color: "text.secondary",
          alignItems: "flex-end",
        }}
      >
        {props.icon} {props.title}
      </Typography>
      <Box
        border={`1px solid ${theme.palette.grey[400]}`}
        borderRadius={"25px"}
        padding={"20px 40px"}
        display={"flex"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          padding={"20px"}
          borderRadius={"25px"}
          boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
        >
          {props.isLoading ? (
            <Skeleton
              variant="rounded"
              width={"100%"}
              height={"100px"}
              sx={{ mb: "10px" }}
            />
          ) : (
            <Box display={"flex"} gap={"5px"} alignItems={"center"}>
              {props.content.icon}
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Box display={"flex"} gap={"5px"}>
                  <Typography>{props.content.title}</Typography>
                  {props.content.fee && (
                    <Typography color={"primary.main"}>
                      (+{props.content.fee})
                    </Typography>
                  )}
                </Box>
                <Typography color={"text.secondary"}>
                  {props.content.description}
                </Typography>
              </Box>
            </Box>
          )}
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
              disabled={props.isLoading}
              variant="contained"
              disableElevation
            >
              change
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutElement;
