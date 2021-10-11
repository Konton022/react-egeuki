import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "firms",
  initialState: {
    data: {},
  },
  reducers: {
    addFirm: (state, action) => ({ data: action.payload }),
  },
});
export const {} = slice.action;

export const selectFirm = (state) => state.firms.data;
