import React from "react";
import store from "./src/state";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}> <CssBaseline />{element}</Provider>;
};
