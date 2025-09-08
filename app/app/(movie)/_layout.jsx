import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Image } from 'react-native'
import logo from "../../assets/photos/logo.png"

const _layout = () => {
  return (
    <ScrollView
    className="relative flex flex-col mt-2 mb-2 bg-black " 
    keyboardShouldPersistTaps= "never"
    contentContainerStyle={{ flexGrow: 1 }}
>
    
    <View id="header" className="h-[12vh] w-full  relative bg-opacity-5">
        <Image source={logo} className="relative h-full w-1/2"></Image>
    </View>
    
    <Slot/>
    


    </ScrollView>
  )
}

export default _layout