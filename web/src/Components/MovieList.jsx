import MovieCard from "./MovieCard"
import "../Stylesheets/MovieList.css"

const MovieList = ({movieList , title}) => {
  // let movieList = useSelector((store) =>store.movies.nowPlaying);
  // if(!movieList) return
  // console.log(movieList[0])
  
  
  return (
    <div id="movie-list-container">
      <div id="title">
        <h5>{title}</h5>
      </div>
      <div id="movielist">
        {movieList.map ((item,index)=>(<MovieCard id={item.id} key={index} posterId={item.poster_path } overview = {item.overview} ratings = {item.vote_average} title = {item.title}/>))}
      </div>
    </div>
    
  )
}

export default MovieList;