import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import session from "../../lib/data/session.json";
import { activateSnackBar } from "./snackBar";

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
  async (props, { dispatch }) => {
    try {
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
      return data;
    } catch (error) {
      dispatch(
        activateSnackBar({
          on: true,
          type: "error",
          message: "error fetching session data",
        })
      );
      return {region:{}, recent:{}}
    }
  }
);

export default sessionSlice.reducer;
