import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import storeReducer from "./store";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
