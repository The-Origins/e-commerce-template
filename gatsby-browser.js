import React from "react";
import store from "./src/state/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import Layout from "./src/components/layout";
import AuthLayout from "./src/components/auth/layout";

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
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
