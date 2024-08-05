import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user";
import sessionReducer from "./session";
import snackBarReducer from "./snackBar";
import currencyReducer from "./currency";

const currencyPersistConfig = {
  key: "currency", // key for localStorage
  storage,
};

const storeReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  snackBar: snackBarReducer,
  currency: persistReducer(currencyPersistConfig, currencyReducer),
});

export default storeReducer;
