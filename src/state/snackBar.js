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
    setSnackBar: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;
