import React, { useEffect, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Contact from "./contact";
import "../../index.css";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { activateSnackBar, setRegion } from "../../state/store";
import SnackBarComponent from "./snackBar";
import ConfirmationModal from "./confirmationModal";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const region = useSelector((state) => state.region);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);

  // only as an example. Do this on the api.
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((res) => {
        if (!Object.keys(region) || region.ip !== res.data.ip) {
          dispatch(setRegion(res.data));
        }
      })
      .catch((err) => {
        dispatch(
          activateSnackBar({
            message: "Error fetching region",
            snackBarType: "error",
          })
        );
      });
  }, []);

  useEffect(() => {
    const loadingTimout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimout);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackBarComponent />
      <Contact />
      <ConfirmationModal />
      <Header {...{ isLoading, user, setHeaderHeight }} />
      <Box mt={`${headerHeight + 30}px`}>{children}</Box>
      <Footer {...{ isLoading }} />
    </ThemeProvider>
  );
};

export default Layout;
