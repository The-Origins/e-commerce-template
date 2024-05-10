import React, { useEffect, useState } from "react";
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
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const changeIsContact = () => {
    dispatch(switchIsContact());
  };

  useEffect(() => {
    dispatch(setUser(data.user));
  }, []);

  useEffect(() => {
    if (Object.keys(user.payment)) {
      setIsLoading(false)
    }
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <SnackBarComponent />
      <Contact isContact={isContact} changeIsContact={changeIsContact} />
      <Header isLoading={isLoading} />
      {children}
      <Footer changeIsContact={changeIsContact} isLoading={isLoading} />
    </ThemeProvider>
  );
};

export default Layout;
