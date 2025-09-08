import React, { useRef } from 'react';
import "../Stylesheets/Search.css"

import { useDispatch, useSelector } from 'react-redux';
import { modifySearchTxt } from '../utils/reduxStore/searchSlice';
import { openai } from '../utils/openai';
import { TMDB_API_OPTIONS } from '../../public/utils/Constants';

import { addSearchResult } from '../utils/reduxStore/movieSlice';



const Search = () => {
    let searchTxt = useRef(null);
    let dispatch = useDispatch();
  
 
    let handleSearch = async(searchTxt) =>{
        dispatch(modifySearchTxt(searchTxt));

        let apiInput = `Please provide a list of up to six movies based on the query "${searchTxt}". The movies should be listed as a comma-separated string (e.g., "Sholay,Ready,Batman,Superman,Spiderman"). If the query includes the title of an actual movie, please return five movies featuring the same actor(s), including the queried movie.`;

        const gptResults= await openai.chat.completions.create({
          messages: [{ role: 'user', content: apiInput }],
          model: 'gpt-3.5-turbo',
        });
       let moviesListArray=  gptResults.choices[0].message.content.split(",");
       console.log(moviesListArray)

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
        <input ref={searchTxt}  type="text" placeholder="🎬 What's Your Movie Pick Today ?🍿"/>
        <button onClick={()=>handleSearch(searchTxt.current.value)}>Search</button>

    </div>
    
    </>
  )
}

export default Search;