import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TMDB_API_OPTIONS } from '../../public/utils/Constants';
import VideoBg from './VideoBg';
import "../Stylesheets/MovieInfo.css"
import "../Stylesheets/MainMovie.css"

const MovieInfo = () => {
    let [movieInfo ,setMovieInfo] = useState(null);
    let{ id }= useParams();
    useEffect(()=>{fetchMovieInfo(id),[]});

    let fetchMovieInfo = async (id) =>{
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        let data = await fetch(url, TMDB_API_OPTIONS);
        let movieInfo =await data.json();
        setMovieInfo(movieInfo);
       
}

    if (!movieInfo) return
    let {title,overview,}= movieInfo;

return ( <div id="movieinfo-container">
        <VideoBg movieId={id}/>
        <div id="movie-info">
            <div id="title">{title}</div>
            <div id= "overview">{overview}</div>
            <div id="buttons">
                <div id="play">▶   Play</div>
                <div id="more">More Info</div>
            </div>
        </div>
        </div>
  )
}

export default MovieInfo