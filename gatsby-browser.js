import React from "react";
import Layout from "./src/components/layout";
import store from "./src/state";
import { Provider } from "react-redux";

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
