import { createSlice } from "@reduxjs/toolkit";

const storeSLice = createSlice({
  name: "store",
  initialState: {
    user: {},
    location: { region: {}, coordinates: {} },
    modal: {
      on: false,
      message: { title: "", description: "" },
      modalType: "info",
    },
    isLoading: false,
    isContact: false,
  },
  reducers: {
    switchIsContact:(state) => {
      state.isContact = !state.isContact;
    },
    changeIsLoading: (state, payload) => {
      state.isLoading = !state.isLoading;
    },
    activateModal: (state, payload) => {
      state.modal.on = true;
      state.modal.message = payload.payload.message;
      state.modal.modalType =
        payload.payload.modalType || state.modal.modalType;
    },
    deactivateModal: (state) => {
      state.modal.on = false;
      state.modal.message = { title: "", description: "" };
      state.modal.modalType = "info";
    },
    setUser: (state, payload) => {
      state.user = payload;
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
  switchIsContact,
  changeIsLoading,
} = storeSLice.actions;

export default storeSLice.reducer;
