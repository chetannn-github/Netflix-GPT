import React from 'react'
import "../Stylesheets/MainMovie.css";
import useTrailerVideo from '../utils/customhooks/useTrailerVideo';

const VideoBg = ({movieId}) => {
    const ytId = useTrailerVideo(movieId);
    if (!(ytId)) {return}
    console.log(ytId);
  return (
    <div id="bgvideo">
            
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${ytId}?si=Vr6smvqxcFIAGMU7&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=${ytId}`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBg