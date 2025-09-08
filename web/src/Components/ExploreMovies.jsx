import { useSelector } from "react-redux";
import "../Stylesheets/MovieList.css"
import MovieList from "./MovieList";


const ExploreMovies = () => {
  let movieList = useSelector((store) =>store.movies.nowPlaying);
  let popular = useSelector((store) =>store.movies.popular);
  let topRated = useSelector((store) =>store.movies.topRated);
  if(!(movieList && popular && topRated)) return
  // console.log(movieList[0])
  return (
    <div id="explore">
      <MovieList title="Now Playing" movieList={movieList}/>
      <MovieList title = "Popular "  movieList={popular}/>
      <MovieList title = "TopRated"  movieList={topRated}/>
    </div>
  )
}

export default ExploreMovies