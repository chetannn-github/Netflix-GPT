import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"isGpt",
    initialState:false,
    reducers:{
        toggleGpt:(state, action) =>{
            return !state;
        }
    }
});

export const {toggleGpt} = gptSlice.actions;
export default gptSlice.reducer;