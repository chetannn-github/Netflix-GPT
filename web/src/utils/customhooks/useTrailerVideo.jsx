import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "../../../public/utils/Constants";


  
const useTrailerVideo =(id) =>{
  let [bgdata,setBgData] = useState(null);
  useEffect(()=>{fetchData(id)},[bgdata]);
    
  const fetchData = async(id)=>{
    let videoList=  await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, TMDB_API_OPTIONS);
    let json = await videoList.json();
    let videoData = json.results;  //array of object
    // console.log(videoData);
    
    let trailerData = videoData.filter((item)=>(item.type==="Trailer"));

    if (trailerData.length){
      trailerData = trailerData[0];
    }else{
      trailerData = videoData[0];
    }
   setBgData(trailerData.key);
  }

  return bgdata;
  
  } 

  export default useTrailerVideo;
 
    