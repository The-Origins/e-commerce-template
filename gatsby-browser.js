import React from "react";
import store from "./src/state/store";
import { persistor } from "./src/state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./src/theme";
import "./src/styles/index.css";
import Layout from "./src/components/layout";
import AuthLayout from "./src/components/auth/layout";
import UserPage from "./src/pages/user";
import ProductPage from "./src/pages/product";
import LegalPage from "./src/pages/legal";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {element}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  const path = props.location.pathname.replace(__PATH_PREFIX__, "");

  if (path.startsWith("/product")) {
    element = <ProductPage {...props} />;
  }

  if (path.startsWith("/user")) {
    element = <UserPage {...props} />;
  }

  if(path.startsWith("/legal")) {
    element = <LegalPage {...props} />;
  }

  if (path.startsWith("/auth")) {
    return <AuthLayout {...props}>{element}</AuthLayout>;
  }

  return <Layout {...props}>{element}</Layout>;
};
