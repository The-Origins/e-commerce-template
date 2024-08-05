import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import session from "../../lib/data/session.json";
import { setSnackBar } from "./snackBar";
import { setCurrency } from "./currency";
import { currencies } from "country-data";

const sessionSlice = createSlice({
  name: "session",
  initialState: { isFetching: true, region: {}, recent: {} },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSession.fulfilled, (state, action) => {
        state.region = action.payload.region;
        state.recent = action.payload.recent;
        state.isFetching = false;
      })
      .addCase(fetchSession.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchSession.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const fetchSession = createAsyncThunk(
  "session/fetchSession",
  async (props, { dispatch, getState }) => {
    try {
      const state = getState();
      // Simulate an API request with a setTimeout wrapped in a Promise
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(session);
            clearTimeout(fetchingTimeOut);
          }, 2000);
        });
      };
      // Await the simulated API request
      const data = await simulateApiRequest();
      //set currency to the region's currency if it doesn't already have a value
      if (Object.keys(state.currency).length < 5) {
        dispatch(setCurrency(currencies[data.region.currency]));
      }
      return data;
    } catch (error) {
      dispatch(
        setSnackBar({
          on: true,
          type: "ERROR",
          message: "error fetching session data",
        })
      );
      return { region: {}, recent: {} };
    }
  }
);

export default sessionSlice.reducer;
