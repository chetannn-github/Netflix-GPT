import React, { useRef } from 'react';
import "../Stylesheets/Search.css"
import "../Stylesheets/MovieList.css"
import { useDispatch, useSelector } from 'react-redux';
import { modifySearchTxt } from '../utils/reduxStore/searchSlice';
import { openai } from '../utils/openai';
import { TMDB_API_OPTIONS } from '../../public/utils/Constants';

import { addSearchResult } from '../utils/reduxStore/movieSlice';
import MovieCard from './MovieCard';

const Search = () => {
    let searchTxt = useRef(null);
    let dispatch = useDispatch();
   let searchMovieList= useSelector((store)=>(store.movies.searchResult));
  //  console.log(searchMovieList);
    let handleSearch = async(searchTxt) =>{
        dispatch(modifySearchTxt(searchTxt));

        let apiInput = `Give an output of only 5 movies for this query -${searchTxt} in the form of string separated by commas eg- "sholay,ready,batman,superman,spiderman"`;
        const gptResults= await openai.chat.completions.create({
          messages: [{ role: 'user', content: apiInput }],
          model: 'gpt-3.5-turbo',
        });
       let moviesListArray=  gptResults.choices[0].message.content.split(",");

    let movie = moviesListArray.map(async(item,index) =>{
      const url = `https://api.themoviedb.org/3/search/movie?query=${moviesListArray[index]}&include_adult=false&page=1`;
      let data = await fetch(url,TMDB_API_OPTIONS );
      let json = await data.json();
      return json;
    }) 
    
    let searchResult=  await Promise.all(movie);
    dispatch(addSearchResult(searchResult));

    }

  return (<>
    <div id="search">
        <input ref={searchTxt}  type="text" placeholder='What do you want to watch?'/>
        <button onClick={()=>handleSearch(searchTxt.current.value)}>Search</button>

    </div>
    
      {
       searchMovieList &&searchMovieList.map((list)=>(
        
        <div id="movielist">
        {list.results.map ((item)=>(<MovieCard  posterId={item.poster_path} overview = {item.overview} ratings = {item.vote_average} title = {item.title}/>))}
      </div>
      
     )) }
    


    
    
      
   
    
    </>
  )
}

export default Search