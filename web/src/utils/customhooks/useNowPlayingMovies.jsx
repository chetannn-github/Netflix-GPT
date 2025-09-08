import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../reduxStore/movieSlice";
import { TMDB_API_OPTIONS } from "../../../public/utils/Constants";

const useNowPlayingMovies = () =>{

  let dispatch = useDispatch();

    
    useEffect(()=>{fetchNowPlayingMovies()},[]);

    let fetchNowPlayingMovies = async()=>{
        let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',TMDB_API_OPTIONS);
        let movieList = await data.json();

        dispatch(addMovies(movieList.results))
        
  }

  return 

}
export default useNowPlayingMovies;