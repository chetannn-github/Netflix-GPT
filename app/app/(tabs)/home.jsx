import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import bgImage from"../../assets/photos/bg.jpg"
import { Image } from 'react-native'
import logo from "../../assets/photos/logo.png"
import userIcon from "../../assets/photos/usericon.png"
import ExploreMovies from '../../components/HomeSceeen/ExploreMovies'
import MainMovie from '../../components/HomeSceeen/MainMovie'
import { useSelector } from 'react-redux'
import { Button } from 'react-native'
import useSignout from '../../hooks/useSignout'



const home = () => {
    let loggedInUser = useSelector((store) => store.user)
    console.log(loggedInUser);
    let handleLogout = useSignout();
    
  return (
    <ScrollView
            className="relative flex flex-col mt-2  bg-black " 
            keyboardShouldPersistTaps= "never"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            {/* <ImageBackground 
                resizeMode="cover"
                className="h-[100vh] w-full absolute opacity-50"
                source={bgImage}>
            </ImageBackground>  */}
            <SafeAreaView id="header" className="h-[12vh] w-full  relative bg-opacity-5 flex flex-row justify-between items-center ">
                <Image source={logo} resizeMode='contain' className="relative h-full w-[35%]"></Image>
                <View className="h-full w-[65%] flex flex-row items-center ">
                    <Image className=" w-[35px] h-[2.5vh]"   resizeMode='contain' source={userIcon}></Image>
                    <Text className="text-white mr-3">{`Hey!👋 ${loggedInUser?.displayName}`}</Text>
                    <Button onPress={()=>handleLogout()} color={"#e50914"}  title='Logout'></Button>
                </View>
            </SafeAreaView>
            
            <MainMovie/>
            <ScrollView 
                className="relative  flex flex-col pb-[100px]"
                style={{flex:1}}
            >
                
                <ExploreMovies/>
                
            </ScrollView>
        
    
    </ScrollView>
  )
}

export default home