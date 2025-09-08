import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, Slot } from 'expo-router'
import { useEffect } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  const loadUserFromAsyncStorage = async () => {
    try {
        const user = await AsyncStorage.getItem('loggedInUser');
        if (user !== null) {
           router.replace("/(tabs)/home")
            return JSON.parse(user);
        }
    } catch (error) {
        console.error("Failed to load user from AsyncStorage", error);
    }
    return null;
};
useEffect(()=>{loadUserFromAsyncStorage()},[]);
  return ( 
  <SafeAreaView className="h-full bg-red-500 w-fit">
   
    <Slot/>
  </SafeAreaView>
  )
}

export default _layout