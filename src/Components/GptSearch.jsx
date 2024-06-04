import React, { useRef } from 'react';
import {Background} from "./Background";
import Search from './Search';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import "../Stylesheets/GptSearch.css"
const GptSearch = () => {
  let searchMovieList= useSelector((store)=>(store.movies.searchResult));

  
  return (
  
  <div id="gpt-page">
    <Background/>
    <Search/>
    <div id="search-results">
      {searchMovieList &&searchMovieList.map((list)=>(
        <MovieList movieList={list.results}/>
        
      
     )) }
    </div>
  </div>
  
  )
}

export default GptSearch