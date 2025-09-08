import { Image, ImageBackground, RefreshControl, ScrollView, TextInput, View } from "react-native"
import React, { useRef, useState } from "react"
import { Text } from "react-native"
import bgImage from"../../assets/photos/bg.jpg"
import logo from "../../assets/photos/logo.png"
import { Button } from "react-native"
import useHandleFormSubmit from "../../hooks/useHandleFormSubmit"


const index = () => {
    let [isLoginForm,setIsLoginForm] = useState(true);
    let handleToggleForm = ()=>{
        setIsLoginForm(!isLoginForm)
    }
    
    let inputs = useRef({email:"",password:"",username:"", confirmPassword:"" });
    let {handleSubmitForm ,errorMsg} = useHandleFormSubmit(inputs.current.email,inputs.current.password,isLoginForm,inputs.current.username);

    return (
        <ScrollView 
            className="relative flex flex-col   bg-black " 
            keyboardShouldPersistTaps= "never"
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <ImageBackground 
                resizeMode="cover"
                className="h-[100vh] w-full absolute opacity-50"
                source={bgImage}>
            </ImageBackground> 
            <View id="header" className="h-[12vh] w-full  relative bg-opacity-5">
                <Image source={logo} className="relative h-full w-1/2"></Image>
            </View>
            
            <ScrollView 
                className="  relative  flex flex-col"
                style={{flex:1}}
            >
                <View className="h-[60vh] flex justify-center items-center">
                    <View className="w-[90%]  relative min-h-fit p-3  bg-[#0000004e]">
                        <Text className="text-white text-4xl mb-5">{`${isLoginForm? "Login":"Signup"}`}</Text>

                        <TextInput 
                        onChangeText={(text) => inputs.current.email = text}
                        placeholder="email"
                        placeholderTextColor="#888" 
                        className="focus:border-primary focus:border-2 h-[7vh] w-full bg-black px-2 text-white mb-4">
                        </TextInput>

                        {!isLoginForm&&<TextInput
                        onChangeText={(text) => inputs.current.username = text} 
                        placeholder="username"
                        placeholderTextColor="#888" 
                        className="focus:border-primary focus:border-2 h-[7vh] w-full bg-black px-2 text-white mb-4">
                        </TextInput>}

                        <TextInput 
                        onChangeText={(text) => inputs.current.password = text}
                        placeholder="password"
                        placeholderTextColor="#888" 
                        className="focus:border-primary focus:border-2 h-[7vh] w-full bg-black px-2 text-white mb-4">
                        </TextInput>
                        
                        {!isLoginForm&&<TextInput 
                        onChangeText={(text) => inputs.current.confirmPassword = text}
                        placeholder="confirm Password"
                        placeholderTextColor="#888" 
                        className="focus:border-primary focus:border-2 h-[7vh] w-full bg-black px-2 text-white mb-4">
                        </TextInput>}
                        {errorMsg && <Text className="text-primary mb-3">{errorMsg}</Text>}

                        <Button onPress={()=>handleSubmitForm()} title={`${isLoginForm? "Login":"Signup"}`} color={"#e50914"}   ></Button>

                        <Text onPress={handleToggleForm} className="mt-2 text-white">{`${!isLoginForm? "Already user?  Sign in now":"New user?  Sign up now"}`}</Text>
                    </View>

                </View> 
                
                
            </ScrollView>
        
    
        </ScrollView>
    
        
        
        
       

    );
}


export default index;