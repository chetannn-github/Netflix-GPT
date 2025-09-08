import { Image, Text, View } from "react-native";
import { POSTER_URL } from "../../scripts/Constants";
import { Link } from "expo-router";



const MovieCard = ({posterId,title,ratings,overview,id}) => {
  // console.log(posterId)
  if(!posterId){return}
  return (
    
    <View className="h-[250px] w-[200px]   flex items-center justify-between mr-3">
          <Link
        href={{
          pathname: '/[movieId]',
          params: { movieId : id},
        }}>
          
          <Image className="relative h-[90%] w-full"  resizeMode="cover" source={{uri:`${POSTER_URL}${posterId}`}}  />
          <Text className="text-white">{title}</Text>
        </Link>
    </View>
  )
}

export default MovieCard;