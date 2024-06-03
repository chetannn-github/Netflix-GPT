import { useSelector } from "react-redux"
import "../Stylesheets/MainMovie.css";
import "../Stylesheets/Background.css";

import VideoBg from "./VideoBg";


const MainMovie = () => {
    
            // useEffect(()=>fetchData(id),[]) ;
    let movies = useSelector((store)=>store.movies.nowPlaying);
    if (!movies) return;
  
    let  mainMovie =(movies[0]);

    // mainMovie = movies[Math.floor(Math.random() * 20)];
    let {title ,overview,id} =  mainMovie;
    
    
  return (
    <>
    <div id="overlay">
      <div id="main-movie">
        <div id="movie-info">
            <div id="title">{title}</div>
            <div id= "overview">{overview}</div>
            <div id="buttons">
                <div id="play">▶   Play</div>
                <div id="more">More Info</div>
            </div>
        </div>
        <VideoBg movieId={id}/>
        
    </div></div>
    
    
    
    
    </>

  )
}

export default MainMovie