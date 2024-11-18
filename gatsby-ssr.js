import React from "react";
import store from "./src/state/store";
import { persistor } from "./src/state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./src/theme";
import Layout from "./src/components/layout";
import AuthLayout from "./src/components/auth/layout";
import ProductPage from "./src/pages/product";
import UserPage from "./src/pages/user";
import LegalPage from "./src/pages/legal";

export function onRenderBody({ setHeadComponents }, pluginOptions) {
  setHeadComponents([
    // Add preconnects
    <link
      key="preconnect-google"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-google-2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,

    // Add font styles
    <link
      key="google-fonts"
      href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@300..700&display=swap"
      rel="stylesheet"
    />,
    <link
      key="pexels-images"
      rel="preconnect"
      href="https://images.pexels.com"
    />,

    <title key="title">E-Commerce</title>,
    <meta
      key="description"
      name="description"
      content="An e-commerce website template"
    />,
    <meta key="keywords" name="keywords" content="e-commerce, website" />,
    <meta key="author" name="author" content="Wega Studios" />,
  ]);
}

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
