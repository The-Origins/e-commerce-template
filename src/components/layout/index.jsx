import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Contact from "./contact";
import "../../index.css";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  activateSnackBar,
  setCurrency,
  setRegion,
  switchIsContact,
} from "../../state/store";
import SnackBarComponent from "./snackBar";
import Auth from "./auth";
import { currencies } from "country-data";
import ConfirmationModal from "./confirmationModal";


const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isContact = useSelector((state) => state.isContact);
  const user = useSelector((state) => state.user);
  const region = useSelector((state) => state.region);
  const [isLoading, setIsLoading] = useState(true);
  const changeIsContact = () => {
    dispatch(switchIsContact());
  };

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((res) => {
        dispatch(setRegion(res.data));
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
    dispatch(setCurrency(currencies[region.currency]))
  }, [region]);

  useEffect(() => {
    const loadingTimout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimout);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackBarComponent />
      <Contact isContact={isContact} changeIsContact={changeIsContact} />
      <ConfirmationModal />
      <Auth />
      <Header isLoading={isLoading} user={user} />
      {children}
      <Footer changeIsContact={changeIsContact} isLoading={isLoading} />
    </ThemeProvider>
  );
};

export default Layout;
