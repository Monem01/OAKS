import React, { useState } from 'react';
import { StyleSheet, View, Text ,} from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import thumbImage from "../../assets/icon/thumbImage.png"
const CustomSlider = ({ min, max, initialValue, onValueChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#3345E4', '#A133E4']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}> */}
        <Slider
          value={value}
          onValueChange={handleValueChange}
          minimumValue={min}
          maximumValue={max}
          minimumTrackTintColor="#3345E4"
          maximumTrackTintColor="#A133E4"
          thumbImage={thumbImage} 
          thumbStyle={styles.thumbStyle}
        //   trackStyle={{ height: 5 }}
          trackStyle={{ height: 10, borderRadius: 5 }}

          style={{ width: 300, height: 50,borderBottomWidth:0.5,borderBottomColor:"#111" }}
        />
      {/* </LinearGradient> */}
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    // backgroundColor:"red",
    flex:1,
  },
  gradient: {
    borderRadius: 20,
    overflow: 'hidden',
    width: '80%',
    marginTop:10,
  },
  slider: {
    height: 10,
  },
  valueText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color:"#111"
  },
  thumbStyle: {
    width: 100,
    height: 100,
  },
});

export default CustomSlider;
