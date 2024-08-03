import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { navigate } from "gatsby";

const Page404 = ({ setConfirmationModal }) => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    document.title = "404 Error | Wendoh Cakes";
  }, []);

  setConfirmationModal({
    title: "404 Error",
    message: "Couldn't find the page you're looking for",
    snackBarType: "error",
  });
  useEffect(() => {
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
  }, []);

  return (
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
  );
};

export default Page404;
