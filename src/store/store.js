import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/productsSlice";
import modalSlice from "../redux/modalSlice";
import favSlice from "../redux/favSlice";
export const store = configureStore({
  reducer: {
    products: productSlice,
    modal: modalSlice,
    favs: favSlice,
  },
});
