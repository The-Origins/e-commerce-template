import { createSlice } from "@reduxjs/toolkit";

const isFetchingSlice = createSlice({
  name: "isFetching",
  initialState: true,
  reducers: {
    setIsFetching: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsFetching } = isFetchingSlice.actions;

export default isFetchingSlice.reducer;
