import { Box } from "@mui/material";
import React from "react";

const AuthModal = (props) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={props.isAuth}>
      <Box
        width={isNotPhone ? "70%" : "90%"}
        height={"500px"}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position={"relative"}
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-in-out`,
          transform: `scale(${props.isAuth ? 1 : 0})`,
        }}
      ></Box>
    </Backdrop>
  );
};

export default AuthModal;
