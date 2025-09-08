import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        popular:null,
        topRated:null,
        searchResult :null,
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlaying = action.payload;

        },
        addNowPlaying:(state,action)=>{
            state.popular = action.payload;
        },
        addTopRated:(state,action) =>{
            state.topRated = action.payload;
        },
        addSearchResult :(state, action) =>{
            state.searchResult = action.payload;
        }
        
    }
});

export const {addMovies , addNowPlaying,addTopRated ,addSearchResult} = movieSlice.actions;
export default movieSlice.reducer;