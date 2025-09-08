import { useSelector } from "react-redux"

import VideoBg from "./VideoBg";
import { View } from "react-native";
import { Text } from "react-native";


const MainMovie = () => {
    
            // useEffect(()=>fetchData(id),[]) ;
    let movies = useSelector((store)=>store.movies.nowPlaying);
    if (!movies) return;
  
    // let  mainMovie =(movies[6]);

    let mainMovie = movies[5];
    let {title ,overview,id} =  mainMovie;
    
    
  return (
    
    
      <View id="main-movie" className="h-[70vh] relative w-[100vw] bg-black">
        <View id="movie-info" className="absolute  bottom-0 left-0 w-[99%] flex p-2  ">
            <View id="title"><Text className= "text-6xl font-bold  text-white">{title}</Text></View>
            <View id= "overview"><Text className="text-white">{overview}</Text></View>
            <View id="buttons" className="flex flex-row  gap-3 overflow-hidden mt-3">
                <View id="play" className="px-7 py-2 flex items-center justify-center bg-white rounded-2xl"><Text>▶ Play</Text></View>
                <View id="more" className="px-7 py-2 flex items-center justify-center bg-[#FCFCFC] rounded-2xl"><Text>More Info</Text></View>
            </View>
        </View>
        <VideoBg movieId={id}/>
        
    </View>
    
    
  
  )
}

export default MainMovie