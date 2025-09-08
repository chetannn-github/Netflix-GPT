import React, { useEffect, useState } from 'react'

import { TMDB_API_OPTIONS } from '../../scripts/Constants';
import VideoBg from '../HomeSceeen/VideoBg';

import { Text, View } from 'react-native';

const MovieInfo = ({movieId}) => {
    let [movieInfo ,setMovieInfo] = useState(null);
    
    let id = movieId;
    useEffect(()=>{fetchMovieInfo(id),[]});

    let fetchMovieInfo = async (id) =>{
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        let data = await fetch(url, TMDB_API_OPTIONS);
        let movieInfo =await data.json();
        setMovieInfo(movieInfo);
       
}

    if (!movieInfo) return <Text> Searching.....</Text>
    let {title,overview,}= movieInfo;

return ( 
    <View id="main-movie" className="h-[98vh] relative w-[100vw]  ">
        <View id="movie-info" className="absolute  h-[40vh] bottom-0 left-0 w-[99%] flex p-2  ">
            <View id="title"><Text className= "text-6xl font-bold  text-white">{title}</Text></View>
            <View id= "overview"><Text className="text-white">{overview}</Text></View>
            <View id="buttons" className="flex flex-row  gap-3 overflow-hidden mt-3">
                <View id="play" className="px-7 py-2 flex items-center justify-center bg-white rounded-2xl"><Text>▶ Play</Text></View>
                <View id="more" className="px-7 py-2 flex items-center justify-center bg-[#FCFCFC] rounded-2xl"><Text>More Info</Text></View>
            </View>
        </View>
        <VideoBg movieId={id}/>
        
    </View>
    
)
  
}

export default MovieInfo