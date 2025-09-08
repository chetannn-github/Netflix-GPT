import MovieCard from "./MovieCard"

import { ScrollView, Text, View } from "react-native";

const MovieList = ({movieList , title}) => {
  // let movieList = useSelector((store) =>store.movies.nowPlaying);
  // if(!movieList) return
  // console.log(movieList[0])
  
  
  return (
    <View className="mb-5 w-fit">
      <View id="title">
        <Text className="text-white">{title}</Text>
      </View>
      <ScrollView
        horizontal 
        showsHorizontalScrollIndicator={false} 
       
      >
        
        {movieList.map ((item,index)=>(<MovieCard id={item.id} key={index+29218} posterId={item.poster_path } overview = {item.overview} ratings = {item.vote_average} title = {item.title}/>))}
      
      </ScrollView>
    </View>
    
  )
}

export default MovieList;