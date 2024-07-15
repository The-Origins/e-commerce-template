import { createSlice } from "@reduxjs/toolkit";

const storeSLice = createSlice({
  name: "store",
  initialState: {
    user: {},
    currency: {},
    region: {},
    isContact: false,
    recentSearches: [],
    snackBar: {
      on: false,
      title: "",
      message: "",
      modalType: "info",
    },
    confirmationModal: {
      on: false,
      message: "",
      onConfirm: () => {},
      onCancel: () => {},
    },
  },
  reducers: {
    setIsContact: (state, action) => {
      state.isContact = action.payload;
    },
    addRecentSearch: (state, action) => {
      if (state.recentSearches.length > 10) {
        state.recentSearches.pop();
      }
      if (state.recentSearches.includes(action.payload)) {
        state.recentSearches = state.recentSearches.filter(
          (element) => element !== action.payload
        );
      }
      state.recentSearches.unshift(action.payload);
    },
    removeRecentSearch: (state, action) => {
      state.recentSearches = state.recentSearches.filter(
        (element) => element !== action.payload
      );
    },
    resetRecent: (state) => {
      state.recentSearches = [];
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
      state.snackBar.on = true;
      state.snackBar.title = action.payload.title;
      state.snackBar.message = action.payload.message;
      state.snackBar.snackBarType =
        action.payload.snackBarType || state.snackBar.snackBarType;
    },
    deactivateSnackBar: (state) => {
      state.snackBar.on = false;
      state.snackBar.title = "";
      state.snackBar.message = "";
      state.snackBar.snackBarType = "info";
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.currency = action.payload?.payments?.currency || state.currency;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const {
  setUser,
  setRegion,
  setCurrency,
  setIsContact,
  addRecentSearch,
  removeRecentSearch,
  activateConfirmationModal,
  deactivateConfirmationModal,
  activateSnackBar,
  deactivateSnackBar,
  resetRecent,
} = storeSLice.actions;

export default storeSLice.reducer;
