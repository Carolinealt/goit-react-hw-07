import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (state, { payload }) => payload.toLowerCase(),
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;