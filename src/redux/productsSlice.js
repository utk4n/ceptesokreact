import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await axios
      .get(
        "https://api.ceptesok.com/api/customlists/95/products?stock=true&page=1"
      )
      .then((response) => response.data.payload.products);
  }
);

const initialState = {
  products: [],
  status: "idle",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "Pending...";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = [action.payload];
      state.status = "Loading...";
    },
    [getProducts.rejected]: (state, action) => {
      state.status = action.error.message;
    },
  },
});

export default productSlice.reducer;
