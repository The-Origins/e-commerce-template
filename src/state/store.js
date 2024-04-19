import { createSlice } from "@reduxjs/toolkit";

const storeSLice = createSlice({
  name: "store",
  initialState: {
    user: {
      name: {},
      phone: {},
      recentPayment: {},
      address: {},
      recentDeliveryLocation: {},
      region: {},
      notifications: {items:[]},
      favourites:[],
      cart:{items:[]} 
    },
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
  switchIsContact,
  changeIsLoading,
} = storeSLice.actions;

export default storeSLice.reducer;
