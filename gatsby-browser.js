import React from "react";
import store from "./src/state/store";
import { persistor } from "./src/state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@mui/material";
import Layout from "./src/components/layout";
import AuthLayout from "./src/components/auth/layout";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{element}</PersistGate>
    </Provider>
  );
};

export const wrapPageElement = ({ element, props }) => {
  const path = props.location.pathname;

  if (path.startsWith("/auth")) {
    return (
      <AuthLayout>
        <CssBaseline />
        {element}
      </AuthLayout>
    );
  }

  return (
    <Layout>
      <CssBaseline />
      {element}
    </Layout>
  );
};
