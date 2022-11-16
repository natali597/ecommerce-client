import { createSlice } from "@reduxjs/toolkit";

export const cardlice = createSlice({
  name: "card",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    // logout: (state) => {
    //   state.value = { first_name: "", last_name: "", email: "" };
    // },
  },
});
export const { add } = cardlice.actions;
// export const { logout } = cardlice.actions;
export default cardlice.reducer;
