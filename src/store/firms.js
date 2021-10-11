import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "firms",
  initialState: {
    data: [],
  },
  reducers: {
    updateFirms: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

// console.log(slice);
export const { updateFirms } = slice.actions;

export const selectFirm = (state) => state.firms.data;

export default slice.reducer;
