import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { currencies } from "country-data";
import user from "../../lib/data/user.json";
import session from "../../lib/data/session.json";
import { activateSnackBar } from "./snackBar";

const currencySlice = createSlice({
  name: "currency",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      return currencies[action.payload]; // Update the state with the fetched user data
    });
  },
});

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (props, { dispatch }) => {
    try {
      // Simulate an API request with a setTimeout wrapped in a Promise
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(user.payments.currency || session.region.currency);
            clearTimeout(fetchingTimeOut);
          }, 2000);
        });
      };

      // Await the simulated API request
      const data = await simulateApiRequest();
      return data;
    } catch (error) {
      dispatch(
        activateSnackBar({
          on: true,
          type: "error",
          message: "error fetching currency data",
        })
      );
      return {}
    }
  }
);

export default currencySlice.reducer;
