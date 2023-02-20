import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity,Icon,TextInput, ScrollView } from "react-native";
import icon from "../../assets/icon/Icon.png";
import profileImg from "../../assets/icon/profile.png"

const Item=(props)=>{

    return(
        <View style={styles.secondView}>
        <TouchableOpacity  style={styles.appButtonContainer}>
            <View style={{right:10}}>
              <Image source={props.icon} style={styles.appButtonText}/>
            </View>
            <View style={{justifyContent:"center"}}>
              <Text style={{color:"black",fontSize:20,fontWeight:"400"}}>{props.name}</Text>
            </View> 
            <View style={{position:"absolute",right:10}}>
              <Image source={icon} style={{}}/>
            </View>
            </TouchableOpacity>
        </View>
    )   
}
const styles=StyleSheet.create({
    secondView:{
        marginTop:"1%",
        borderBottomWidth:1,
        borderBottomColor:"black",
        marginHorizontal:20,
      },
      appButtonContainer: {
        padding:10,
        height:60,
        // margin:12,
        // justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        // marginHorizontal:'-12%'
      
      
      },
      appButtonText: {
        // right:'250%',
      },
 
})
export default Item;