import React from "react";
import { store, persistor } from "./src/state";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@mui/material";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <CssBaseline />
          {element}
        </Layout>
      </PersistGate>
    </Provider>
  );
};
