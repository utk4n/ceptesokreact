import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { UserAuth } from "../hooks/userAuth";


const initialState = {
  name: "",
  userBasket: [],
  userFavs:[]
}


const favSlice = createSlice({
  name: "favs",
  initialState,
  reducers:{
    userInfos: (state, action) => {
       state.name = action.payload?.name
       state.userBasket = action.payload?.userBasket
       state.userFavs = action.payload?.userFavs
    }
  }
});

export default favSlice.reducer;
export const {userInfos} = favSlice.actions
