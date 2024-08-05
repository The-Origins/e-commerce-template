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
  const path = props.location.pathname;

  if (path.startsWith("/auth")) {
    return <AuthLayout>{element}</AuthLayout>;
  }

  return <Layout location={props.location}>{element}</Layout>;
};
