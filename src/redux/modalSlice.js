import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    status: false,
  },
  reducers: {
    modalState: (state) => {
      state.status = !state.status;
    },
  },
});

export default modalSlice.reducer;

export const { modalState } = modalSlice.actions;
