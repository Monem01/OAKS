import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
const Gradient = ({ text,colors}) => {
  return (
    <MaskedView maskElement={<Text style={[{backgroundColor:'transparent'}]}>{text}</Text>}>
    <LinearGradient
    start={{x:0, y:0}}
    end={{x:1, y:0}}
    colors={['blue', 'purple']}
    >
      <Text style={[{opacity:0}]} >{text}</Text>
    </LinearGradient>
    </MaskedView>
  );
};
const styles=StyleSheet.create({
  // Gradient:{
  //   fontWeight:'600',
  //   fontSize:30
  // }
})
export default Gradient;