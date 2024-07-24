import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; // Combined reducer

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
