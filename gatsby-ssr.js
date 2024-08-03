import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/state/store";
import Layout from "./src/components/layout";
import AuthLayout from "./src/components/auth/layout";
import { CssBaseline } from "@mui/material";

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
