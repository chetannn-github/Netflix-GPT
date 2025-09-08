// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjWFUFu4jxoPVCRZ0tRVvxcjWYWF52xq0",
  authDomain: "netflixgpt-7ee6b.firebaseapp.com",
  projectId: "netflixgpt-7ee6b",
  storageBucket: "netflixgpt-7ee6b.appspot.com",
  messagingSenderId: "19829683023",
  appId: "1:19829683023:web:de711d8820d5b5a0a98b3a",
  measurementId: "G-GTJRVZ0HBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth();


