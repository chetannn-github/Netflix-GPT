import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../reduxStore/movieSlice";
import { TMDB_API_OPTIONS } from "../../../public/utils/Constants";

const usePopularMovies = () =>{
    let dispatch = useDispatch();
    useEffect(()=>{fetchNowPlayingMovies()},[]);

    let fetchNowPlayingMovies = async()=>{
        let data = await fetch('https://api.themoviedb.org/3/movie/popular?language=EN-IN&page=1',TMDB_API_OPTIONS);
        let movieList = await data.json();

        dispatch(addNowPlaying(movieList.results))
        
  }

  return 
   

}
export default usePopularMovies;