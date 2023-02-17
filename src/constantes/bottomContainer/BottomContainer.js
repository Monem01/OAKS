import React from "react";
import { StyleSheet, View } from "react-native";

const BottomContainer=(props)=>{
    
    return(
    <View style={[styles.secondView,{flex:props.size},]}>
      {props.myView}
    </View>
    )
}
const styles=StyleSheet.create({
    secondView:{
        width:'100%',
        backgroundColor:'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom:0,
        justifyContent:'center',
        padding:'5%',
        marginTop:'5%',
        // position:'absolute'
        
    },
})
export default BottomContainer;