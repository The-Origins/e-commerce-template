import { createSlice } from "@reduxjs/toolkit";

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState: {
    on: false,
    type: "info",
    title: "",
    message: "",
  },
  reducers: {
    activateSnackBar: (state, action) => {
      state.on = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.type = action.payload.type || state.type;
    },
    deactivateSnackBar: (state) => {
      state.on = false;
      state.type = "info";
      state.title = "";
      state.message = "";
    },
  },
});

export const { activateSnackBar, deactivateSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;
