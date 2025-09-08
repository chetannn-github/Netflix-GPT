import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { Provider } from "react-redux"
import appStore from "../redux/appstore.js"
import { StatusBar } from 'expo-status-bar';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

 
  return (
    
      <Provider  store={appStore}>

     <StatusBar backgroundColor='#000000'></StatusBar>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="(movie)" options={{headerShown: false}} />
      </Stack>
       </Provider>
   
  );
}
