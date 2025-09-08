import { POSTER_URL } from "../../public/utils/Constants";
import "../Stylesheets/MovieCard.css"
import { Link } from "react-router-dom";

const MovieCard = ({posterId,title,ratings,overview,id}) => {
  // console.log(posterId)
  if(!posterId){return}
  return (
    <div id="movie-card">
       <Link to={`/${id}`}> 
        <img src={`${POSTER_URL}${posterId}`} alt="" />
        <h5>{title}</h5>
        </Link>
    </div>
  )
}

export default MovieCard;