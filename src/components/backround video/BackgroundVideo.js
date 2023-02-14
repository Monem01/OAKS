import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import bg_video_min from "../../../assets/bg-video-min.mp4"
const BackgroundVideo = () => {
  const videoRef = useRef(null);

  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

export default BackgroundVideo;
