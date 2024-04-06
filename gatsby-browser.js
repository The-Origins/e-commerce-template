import React from "react";
import store from "./src/state";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <Layout>
        <CssBaseline />
        {element}
      </Layout>
    </Provider>
  );
};
