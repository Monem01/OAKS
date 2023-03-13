import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
const GradientButton = ({ text}) => {
    const [backgroundColorstart, setbackgroundColorstart] = useState('#FFFFFF');
    const [backgroundColorsend, setbackgroundColorsend] = useState('#FFFFFF');
    const [textcolor, settextcolor] = useState('#111');
    const hundelchange=()=>{
        setbackgroundColorstart('#3345E4');
        setbackgroundColorsend('#A133E4');
        console.log("myprofile")
    }
  return (
    <LinearGradient start={{x:0, y:0}}
                end={{x:1, y:0}}
                colors={[backgroundColorstart, backgroundColorsend]}style={{borderRadius:6,margin:10,height:38}} >
              <TouchableOpacity onPress={hundelchange} style={[styles.appButtonContainer,{borderWidth:2,borderColor:"#F5F4F4",borderRadius:6}]}>
                <Text style={{ fontWeight: '300',color:textcolor }}>{text}</Text>
              </TouchableOpacity>
              {/* Ajoutez ici le reste du contenu de votre application */}
            </LinearGradient>
  );
};
const styles=StyleSheet.create({
    appButtonContainer:{        
        height:38,
        justifyContent:"center",
        width:119,
        alignItems:"center"

    }
})
export default GradientButton;