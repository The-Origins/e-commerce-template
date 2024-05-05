import { createSlice } from "@reduxjs/toolkit";

const storeSLice = createSlice({
  name: "store",
  initialState: {
    user: {
      name: {},
      phone: {},
      addresses:{},
      payment:{},
      recentPayment: {},
      address: {},
      recentDeliveryLocation: {},
      region: {},
      notifications: { items: [] },
      favourites: [],
      cart: { items: [] },
    },
    location: { region: {}, coordinates: {} },
    modal: {
      on: false,
      message: { title: "", description: "" },
      modalType: "info",
    },
    snackBar: {
      on: false,
      message: { title: "", description: "" },
      modalType: "info",
    },
    isLoading: false,
    isContact: false,
  },
  reducers: {
    switchIsContact: (state) => {
      state.isContact = !state.isContact;
    },
    changeIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    activateModal: (state, action) => {
      state.modal.on = true;
      state.modal.message = action.payload.message;
      state.modal.modalType = action.payload.modalType || state.modal.modalType;
    },
    deactivateModal: (state) => {
      state.modal.on = false;
      state.modal.message = { title: "", description: "" };
      state.modal.modalType = "info";
    },
    activateSnackBar: (state, action) => {
      state.snackBar.on = true;
      state.snackBar.message = action.payload.message;
      state.snackBar.snackBarType = action.payload.snackBarType || state.snackBar.snackBarType;
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
  activateModal,
  deactivateModal,
  activateSnackBar,
  deactivateSnackBar,
  switchIsContact,
  changeIsLoading,
} = storeSLice.actions;

export default storeSLice.reducer;