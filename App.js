import { NavigationContainer } from "@react-navigation/native";
import React, { useRef } from 'react';

import { View,Text,StyleSheet } from "react-native";
import AppHeader from './src/components/AppHeader'
import Home from "./src/screens/Home";
import Open_email_app from "./src/components/open-Email/Open_email_app";
import Double_authentication from "./src/components/Double authentication/Double_authentication";
  import SetPasswordPage from  "./src/components/setPasswordPage/SetPasswordPage";
import BackgroundVideo from "./src/components/backround video/BackgroundVideo";
import Video from 'react-native-video';
import bg_video_min from "./assets/bg-video-min.mp4";
import Password_reset from "./src/components/Password_reset/Password_reset";
const App=()=>{
  const videoRef = useRef(null);

  return(
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={bg_video_min}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
        playInBackground={false}
        playWhenInactive={false}
      />
        {/* <Password_reset/> */}
        {/* <Open_email_app/> */}
        {/* <Double_authentication/> */}
        <SetPasswordPage/>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
export default App;