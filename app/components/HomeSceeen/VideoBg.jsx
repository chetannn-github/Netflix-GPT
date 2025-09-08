import React from 'react'
import useTrailerVideo from '../../hooks/useTrailerVideo';
import { View } from 'react-native';
import WebView from 'react-native-webview';

const VideoBg = ({movieId}) => {
    const ytId = useTrailerVideo(movieId);
    if (!(ytId)) {return}
    console.log(ytId);
    let URL= `https://www.youtube.com/embed/${ytId}?si=Vr6smvqxcFIAGMU7&amp;controls=0&autoplay=1&loop=1&playlist=${ytId}&controls=0&showinfo=0&rel=0`;
  return (
    <View id="bgvideo" className="h-[65vh] flex justify-center   -z-10 absolute b w-[100vw] ">
        <WebView 
        source={{ uri: URL }}
        className="-z-10 "
        style={{height:1900, backgroundColor:"black"}}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
      /> 
        
    </View>
  )
}

export default VideoBg