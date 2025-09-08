import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchTxt : null,
    },
    reducers:{
        modifySearchTxt : (state,action) =>{
            
            state.searchTxt =  action.payload;
        }
     }
});

export default searchSlice.reducer;
export const {modifySearchTxt}  = searchSlice.actions;