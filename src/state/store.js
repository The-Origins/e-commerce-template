import { createSlice } from "@reduxjs/toolkit";

const storeSLice = createSlice({
  name: "store",
  initialState: {
    user: {},
    location: { region: {}, coordinates: {} },
    snackBar: {
      on: false,
      message: { title: "", description: "" },
      modalType: "info",
    },
    isContact: false,
    isAuth: false,
  },
  reducers: {
    switchIsContact: (state) => {
      state.isContact = !state.isContact;
    },
    switchIsAuth: (state, action) => {
      state.isAuth = action.payload || !state.isAuth;
    },
    activateModal: (state, action) => {
      state.modal.on = true;
      state.modal.message = action.payload.message;
      state.modal.modalType = action.payload.modalType || state.modal.modalType;
    },
    deactivateSnackBar: (state) => {
      state.snackBar.on = false;
      state.snackBar.message = { title: "", description: "" };
      state.snackBar.snackBarType = "info";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setlocation: (state, payload) => {
      state.location = payload;
    },
  },
});

export const {
  setUser,
  setlocation,
  activateSnackBar,
  deactivateSnackBar,
  switchIsContact,
  switchIsAuth
} = storeSLice.actions;

export default storeSLice.reducer;
