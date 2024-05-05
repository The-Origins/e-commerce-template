import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Contact from "./contact";
import "../../index.css";
import Header from "./header";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { switchIsContact, setUser } from "../../state/store";
import data from "../../lib/data";
import SnackBarComponent from "./snackBar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isContact = useSelector((state) => state.isContact);
  const changeIsContact = () => {
    dispatch(switchIsContact());
  };

  useEffect(() => {
    dispatch(setUser(data.user));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackBarComponent />
      <Contact isContact={isContact} changeIsContact={changeIsContact} />
      <Header />
      {children}
      <Footer changeIsContact={changeIsContact} />
    </ThemeProvider>
  );
};

export default Layout;
