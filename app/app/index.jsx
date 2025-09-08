import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';


const index = () => {
  const loadUserFromAsyncStorage = async () => {
    try {
        const user = await AsyncStorage.getItem('loggedInUser');
        if (user !== null) {
           router.replace("/(tabs)/home")
            return JSON.parse(user);
        }else{
          router.replace("/(auth)");
        }
    } catch (error) {
        console.error("Failed to load user from AsyncStorage", error);
    }
    return null;
};
useEffect(()=>{loadUserFromAsyncStorage()},[]);
  return (
      <View>
        <Link href={"/(auth)"} ><Text>Go to auth</Text></Link>
        <Link href={"/(tabs)/home"} ><Text>Go tab </Text></Link>
      </View>
 
  )
}

export default index