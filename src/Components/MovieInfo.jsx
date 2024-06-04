import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TMDB_API_OPTIONS } from '../../public/utils/Constants';
import VideoBg from './VideoBg';
import "../Stylesheets/MovieInfo.css"

const MovieInfo = () => {
    let{ id }= useParams();
    // useEffect(()=>{fetchMovieInfo(id),[]});

    // let fetchMovieInfo = async (id) =>{
    //     const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    //     let data = await fetch(url, TMDB_API_OPTIONS);
    //     let movieInfo =await data.json();
    //    console.log(movieInfo);




    // }
  return ( <div id="movieinfo">
        <VideoBg movieId={id}/>
        </div>
  )
}

export default MovieInfo