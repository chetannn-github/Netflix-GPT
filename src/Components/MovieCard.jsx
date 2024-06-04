import { POSTER_URL } from "../../public/utils/Constants";
import "../Stylesheets/MovieCard.css"


const MovieCard = ({posterId,title,ratings,overview}) => {
  // console.log(posterId)
  if(!posterId){return}
  return (
    <div id="movie-card">
        <img src={`${POSTER_URL}${posterId}`} alt="" />
        <h5>{title}</h5>
    </div>
  )
}

export default MovieCard;