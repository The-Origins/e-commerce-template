import { createSlice } from "@reduxjs/toolkit";

const storeSLice = createSlice({
  name: "store",
  initialState: {
    user: {},
    region: {},
    snackBar: {
      on: false,
      message: { title: "", description: "" },
      modalType: "info",
    },
    isContact: false,
    isAuth: false,
    confirmationModal: {
      on: false,
      message: "",
      onConfirm: () => {},
      onCancel: () => {},
    },
  },
  reducers: {
    switchIsContact: (state) => {
      state.isContact = !state.isContact;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    changeIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    activateConfirmationModal: (state, action) => {
      state.confirmationModal.on = true;
      state.confirmationModal.message = action.payload.message;
      state.confirmationModal.onConfirm = action.payload.onConfirm;
      state.confirmationModal.onCancel = action.payload.onCancel;
    },
    deactivateConfirmationModal: (state) => {
      state.confirmationModal.on = false;
      state.confirmationModal.message = "";
      state.confirmationModal.onConfirm = () => {};
      state.confirmationModal.onCancel = () => {};
    },
    activateSnackBar: (state, action) => {
      state.modal.on = true;
      state.modal.message = action.payload.message;
      state.modal.snackBarType =
        action.payload.snackBarType || state.modal.snackBarType;
    },
    deactivateSnackBar: (state) => {
      state.snackBar.on = false;
      state.snackBar.message = { title: "", description: "" };
      state.snackBar.snackBarType = "info";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const {
  setUser,
  setRegion,
  activateConfirmationModal,
  deactivateConfirmationModal,
  activateSnackBar,
  deactivateSnackBar,
  switchIsContact,
  setIsAuth,
} = storeSLice.actions;

export default storeSLice.reducer;
