import React ,{useState}from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
const Gradient = ({ text,size}) => {

  return (
    <MaskedView maskElement={<Text style={[{backgroundColor:'transparent'}]}>{text}</Text>}>
    <LinearGradient
    start={{x:0, y:0}}
    end={{x:1, y:0}}
    colors={['#3345E4', '#A133E4']}
    >
      <Text style={{opacity:0,fontSize:size,fontWeight:"500"}} >{text}</Text>
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