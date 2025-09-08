import { useSelector } from "react-redux";

import MovieList from "./MovieList";
import { View } from "react-native";



const ExploreMovies = () => {
  let movieList = useSelector((store) =>store.movies.nowPlaying);
  let popular = useSelector((store) =>store.movies.popular);
  let topRated = useSelector((store) =>store.movies.topRated);

  if(!(movieList && popular && topRated)) return
  // console.log(movieList[0])
  return (
    <View className=" w-full h-fit ">
      <MovieList title="Now Playing" movieList={movieList}/>
      <MovieList title = "Popular "  movieList={popular}/>
      <MovieList title = "TopRated"  movieList={topRated}/>
    </View>
  )
}

export default ExploreMovies