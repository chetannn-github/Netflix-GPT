import { Button, Image, ImageBackground, Pressable, RefreshControl, SafeAreaView, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import React, { useRef, useState } from "react"
import bgImage from"../../assets/photos/bg.jpg"
import logo from "../../assets/photos/logo.png"
import { Ionicons } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import ExploreMovies from "../../components/HomeSceeen/ExploreMovies"
import MovieList from "../../components/HomeSceeen/MovieList"
import { TMDB_API_OPTIONS } from "../../scripts/Constants"
import {modifySearchTxt} from "../../redux/searchSlice"
import {addSearchResult } from "../../redux/movieSlice"
import { openai } from "../../scripts/openai"
import useSignout from '../../hooks/useSignout'
import userIcon from "../../assets/photos/usericon.png"

const gptSearch = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    let searchInput = useRef(null);
    let searchMovieList= useSelector((store)=>(store.movies.searchResult));
    let dispatch = useDispatch();
    let handleLogout = useSignout();
    let loggedInUser = useSelector((store) => store.user)
    console.log(searchInput);
    
    let handleSearch = async(searchInput) =>{
        try {
            setIsLoading(true);
            dispatch(modifySearchTxt(searchInput));

            let apiInput = `Please provide a list of up to six movies based on the query "${searchInput}". The movies should be listed as a comma-separated string (e.g., "Sholay,Ready,Batman,Superman,Spiderman"). If the query includes the title of an actual movie, please return five movies featuring the same actor(s), including the queried movie.`;
    
            const gptResults= await openai.chat.completions.create({
              messages: [{ role: 'user', content: apiInput }],
              model: 'gpt-3.5-turbo',
            });
            let moviesListArray=  gptResults.choices[0].message.content.split(",");
            console.log(moviesListArray)
    
            let movie = moviesListArray.map(async(item,index) =>{
                const url = `https://api.themoviedb.org/3/search/movie?query=${moviesListArray[index]}&include_adult=false&page=1`;
                let data = await fetch(url,TMDB_API_OPTIONS);
                let json = await data.json();
                return json;
            }) 
        
            let searchResult=  await Promise.all(movie);
            dispatch(addSearchResult(searchResult));
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            
        }
      
    }

    return (
        <ScrollView 
            className="relative flex flex-col mt-2  bg-black " 
            keyboardShouldPersistTaps= "never"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <ImageBackground 
                resizeMode="cover"
                className="h-[100vh] w-full absolute opacity-50"
                source={bgImage}>
            </ImageBackground> 
            <SafeAreaView id="header" className="h-[12vh] w-full  relative bg-opacity-5 flex flex-row justify-between items-center ">
                <Image source={logo} resizeMode='contain' className="relative h-full w-[35%]"></Image>
                <View className="h-full w-[65%] flex flex-row items-center ">
                    <Image className=" w-[35px] h-[2.5vh]"   resizeMode='contain' source={userIcon}></Image>
                    <Text className="text-white mr-3">{`Hey!👋 ${loggedInUser?.displayName}`}</Text>
                    <Button onPress={()=>handleLogout()} color={"#e50914"}  title='Logout'></Button>
                </View>
            </SafeAreaView>
            
            <ScrollView  keyboardShouldPersistTaps="never"
                className="  relative  flex flex-col"
                style={{flex:1}}
            >
                <View className={`flex h-[8vh] flex-row w-full py-1  bg-black ${isFocused? "border-primary  border-2" : ""}`}>
                    <TextInput 
                    onChangeText={(text) => searchInput.current = text}
                    placeholder="🎬 What's Your Movie Pick Today ?🍿"
                    placeholderTextColor="#888" 
                    onFocus={()=>{setIsFocused(true)}}
                    onBlur={() => setIsFocused(false)}
                    className="h-[7vh] w-[85vw] bg-black px-2 text-white mb-4">
                    </TextInput>
                   <Pressable onPress={()=>handleSearch(searchInput.current)} className="relative min-h-[7vh] w-[12vw]  overflow-hidden">
                    <View className="h-[7vh] bg-black flex items-center justify-center ">
                        <Ionicons name="search" color={"#e50914"} size={25}> </Ionicons>
                    </View>
                    
                    </Pressable>
                </View>


                

                
            </ScrollView>

            <ScrollView 
                className="relative  flex flex-col pb-[80px] pt-5"
                style={{flex:1}}
            >
                <View className=" w-full h-fit ">
                    
                    {searchMovieList &&searchMovieList.map((list,index)=>(
                        <MovieList key={index} movieList={list.results}/>
                    ))}
                </View>
                  
                
                
            </ScrollView>
        
    
        </ScrollView>
    
        
        
        
       

    );
}


export default gptSearch;