import { createAction, createReducer } from "@reduxjs/toolkit";

export const changeFilter = createAction("filter/change", (value) => {
  return { payload: value.toLowerCase() };
});

const initialState = "";

export const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeFilter.type, (state, action) => {
    return `${state + action.payload}`;
  });
});
