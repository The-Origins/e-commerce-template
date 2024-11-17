import React, { useEffect, useState } from "react";
import { Box, Typography, } from "@mui/material";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { setSnackBar } from "../state/snackBar";
import { Helmet } from "react-helmet";

const Page404 = () => {
  const [counter, setCounter] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSnackBar({
        on: true,
        type:"ERROR",
        title: "404 Error",
        message: "Couldn't find the page you're looking for",
      })
    );

    const counterInterval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    const counterTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(counterTimeout);
      clearInterval(counterInterval);
    };
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>404 Error</title>
        <meta name="description" content="404 Error| Page not found" />
      </Helmet>
      <Box
        height={"100vh"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">error</Typography>
        <Typography>redirecting in 00:0{counter}s</Typography>
      </Box>
    </>
  );
};

export default Page404;
