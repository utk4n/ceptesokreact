import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name : "modal",
    initialState: {
        status : true
    },
    reducers:{
        modalState : (state, action) => {
           state.status = !state.status
        }
    }
})

export default modalSlice.reducer

export const {modalState} = modalSlice.actions