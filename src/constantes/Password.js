import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity,Icon,TextInput, ScrollView } from "react-native";
import hide from "../../assets/icon/eyeclose.png";
import show from "../../assets/icon/eyeopen.png";

const Password=()=>{
  const [hide1,setHide1]=useState(true);
  const [hide2,setHide2]=useState(true);
  const [iconshow1,setIconShow1]=useState(show);
  const [iconshow2,setIconShow2]=useState(show);
    const handelClick1=()=>{
      setHide1(!hide1);
      if(iconshow1==hide){
        setIconShow1(show)
      }
      else{
        setIconShow1(hide)
      }
      
    }

  
    return(
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <TextInput style={styles.input}  secureTextEntry={!hide1}/> 
      <TouchableOpacity onPress={handelClick1} style={{marginHorizontal:'-12%'}}>
      <Image source={iconshow1} style={styles.icon} />
      </TouchableOpacity>
    </View>
    )
}
const styles=StyleSheet.create({
  input:{
    borderWidth:1,
    margin:12,
    borderRadius:8,
    padding:10,
    height:55,
    borderColor:'#254EDB',
    color:'black',
    width:'95%',
  },
  icon:{
    width:30,
    height:30,
    left:-10

  },
})
export default Password;