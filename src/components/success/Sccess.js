import React,{useState} from "react";
import {View,TouchableOpacity,Text,StyleSheet} from "react-native";
import SuccessPopUp from "../../constantes/SuccesPopUp";
import Mystyles from "../../constantes/styles";
const Sccess=()=>{
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <SuccessPopUp/>
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={()=>{console.log('go to platform')}}>
              <Text style={styles.appButtonText}>Go to the platform</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles=StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#111111",
        borderRadius:10,
        padding:10,
        height:60,
        marginTop:10,
        // margin:12,
        justifyContent:'center',
        alignItems:'center',
        width:"90%"
      },
      appButtonText: {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 16,
      },
})
export default Sccess;