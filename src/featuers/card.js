import { createSlice } from "@reduxjs/toolkit";

export const cardlice = createSlice({
  name: "card",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});
export const { add } = cardlice.actions;
export default cardlice.reducer;
