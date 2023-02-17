import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity,Icon,TextInput, ScrollView } from "react-native";
const InputEmail=()=>{

    return(
      <View >
      <Text style={styles.title}>Email</Text>
      <TextInput style={styles.input} /> 
      </View>
    )
}
const styles=StyleSheet.create({
  input:{
    borderWidth:1,
    margin:12,
    borderRadius:8,
    padding:10,
    height:50,
    borderColor:'#254EDB',
    color:'black',
    width:'95%',
  },
  title:{
    left:25,
    color:"#111"
   }
 
})
export default InputEmail;