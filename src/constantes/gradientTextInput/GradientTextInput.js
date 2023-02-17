import React from 'react';
import { TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientTextInput = (props) => {
  return (
    <View style={{ borderRadius: 10, overflow: 'hidden' }}>
      <LinearGradient
        colors={['#FFA07A', '#FF4500']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 5 }}>
        <TextInput  style={{ color: 'white' }} />
      </LinearGradient>
    </View>
  );
};

export default GradientTextInput;
