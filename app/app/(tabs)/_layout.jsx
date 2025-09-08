
import React, { useEffect } from 'react'
import {  router, Tabs } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRated from '../../hooks/useTopRatedMovies';
import { auth } from '../../scripts/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';


import { addUser, removeUser } from '../../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const _layout = () => {
  const dispatch = useDispatch();
  const loadUserFromAsyncStorage = async () => {
    try {
        const user = await AsyncStorage.getItem('loggedInUser');
        if (user !== null) {
            return JSON.parse(user);
        }
    } catch (error) {
        console.error("Failed to load user from AsyncStorage", error);
    }
    return null;
};

useEffect(() => {
    const initializeUser  = async () => {
        const user = await loadUserFromAsyncStorage();
        console.log("loggedinuser => " + user);
        if (user) {
            dispatch(addUser(user));
            
        }else{
          router.replace("/(auth)")
        }
        
         
    };
    initializeUser ();
}, []);





  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  return (
    
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#e50914' ,
      tabBarStyle:{
        position:"absolute",
        backgroundColor:"black",
        borderTopWidth: 0,
        borderTopColor: "#e50914",
        height: 50,
        borderRadius:1,
        alignContent:'center',
        justifyContent:'center'
      }}}
    >
    <Tabs.Screen
      name="home"
      options={{
        title:"Home",
        headerShown:false,
        tabBarIcon: ({ color, focused }) => <Ionicons size={26} name={focused? "home" : "home-outline"} color={color} />,
      }}
    />
    <Tabs.Screen
      name="gptSearch"
      options={{
        headerShown:false,
        title:"GPT Search",
        tabBarIcon: ({ color ,focused }) =>  <Ionicons size={26} name={focused? "search" : "search-outline"} color={color} />,
      }}
    />
    
    
    </Tabs>
  )
}

export default _layout