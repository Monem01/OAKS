import React from "react";
import { Image, StyleSheet, View,Text,TouchableOpacity } from "react-native";
// import Mystyles from "../../constantes/styles";
import Mystyles from "./styles";
import back from "../../assets/icon/Back.png"
import Password from "./Password";
const ChangePassword=()=>{
    return(
        <View style={{flex:1,}}>
       
        <View style={{borderWidth:1,margin:10,borderRadius:10,borderColor:"#EDEEEF"}}>
        <Text style={{color:'#111111',marginLeft:'10%',fontWeight:'500'}}>Enter the current Password</Text>
            <Password/>
            <Text style={{color:'#111111',marginLeft:'10%',fontWeight:'500'}}>New Password</Text>
            <Password/>
            <Text style={{color:'#111111',marginLeft:'10%',fontWeight:'500'}}>Confirm New Password</Text>
            <Password/>
            <TouchableOpacity  style={Mystyles.appButtonContainer}>
          <Text style={Mystyles.appButtonText}>Save</Text>
      </TouchableOpacity>
        </View>
    </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    tabs:{
        backgroundColor:"#EDEEEF",
        flexDirection:"row",
        width:"98%",
        margin:4,
        alignItems:"center",
        borderRadius:10,
        marginTop:50,

    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#FFF",
        borderRadius:10,
        padding:10,
        height:60,
        margin:2,
        justifyContent:'center',
        alignItems:'center',
        width:"49%"
      },
      appButtonText: {
        color: '#111',
        fontFamily: 'Inter',
        fontSize: 16,
      },
      icon:{
        marginTop:50,
        marginLeft:16,
      }
})
export default ChangePassword;