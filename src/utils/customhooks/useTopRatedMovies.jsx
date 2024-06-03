import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated} from "../reduxStore/movieSlice";
import { TMDB_API_OPTIONS } from "../../../public/utils/Constants";

const useTopRated = () =>{
    let dispatch = useDispatch();
    useEffect(()=>{fetchTopRatedMovies()},[]);

    let fetchTopRatedMovies = async()=>{
        let data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',TMDB_API_OPTIONS);
        let movieList = await data.json();

        dispatch(addTopRated(movieList.results))
        
  }

  return 
   

}
export default useTopRated;