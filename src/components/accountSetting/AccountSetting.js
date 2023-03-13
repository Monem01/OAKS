import React, { useState } from "react";
import { Image, StyleSheet, View,Text,TouchableOpacity,ScrollView } from "react-native";
import Mystyles from "../../constantes/styles";
import back from "../../../assets/icon/Back.png"
import Password from "../../constantes/Password";
import ChangePassword from "../../constantes/ChangePAssword";
import AccountDeletion from "../../constantes/AccountDeletion";
const AccountSetting=()=>{
    const [show,setShow]=useState(true);
    const [bgPass,setbgPass]=useState("white");
    const [bgsetting,setbgSetting]=useState("#EDEEEF");
    return(
        <ScrollView style={{flex:1}}>
             <Image source={back} style={styles.icon}/>
        <View style={{marginLeft:10,}}>
        <Text style={Mystyles.title}>Account Settings</Text>
        </View>
        <View style={[styles.tabs,{backgroundColor:"#EDEEEF",}]}  >
        <TouchableOpacity  style={[styles.appButtonContainer,{backgroundColor:bgPass,}]} onPress={()=>{setShow(true);setbgPass("white");setbgSetting("#EDEEEF")}}>
          <Text style={styles.appButtonText}>Password</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.appButtonContainer,{backgroundColor:bgsetting}]} onPress={()=>{setShow(false);setbgPass("#EDEEEF");setbgSetting("white")}}>
          <Text style={styles.appButtonText}>Account Deletion</Text>
      </TouchableOpacity>
        </View>
        {
            show===true ? <ChangePassword/> : <AccountDeletion/>
        }
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    tabs:{
        
        flexDirection:"row",
        width:"98%",
        margin:4,
        alignItems:"center",
        borderRadius:10,
        marginTop:50,

    },
    appButtonContainer: {
        // elevation: 8,
        
        borderRadius:10,
        padding:10,
        height:45,
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
export  default AccountSetting