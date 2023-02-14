import React,{useState} from "react";
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity,TextInput } from "react-native";
import bg from '../../../assets/bg.png'
import MainLogo from '../../../assets/Oaks-Capital-Main-logo-light.png';
import Colors from "../../contants/Colors";
import LogoImg from '../../../assets/Oaks-Capital-Symbol-ligh.png';
import Icon from 'react-native-vector-icons/EvilIcons';
import { openInbox } from "react-native-email-link";
import BackgroundVideo from "../backround video/BackgroundVideo";
IconSize=32;
const SetPasswordPage=()=>{

    return(
      <View style={styles.container}>
        <View style={styles.firstView}>
            <Image source={LogoImg} style={styles.logo}/>
            <Image source={MainLogo} style={styles.MainLogo}/>
        </View>
      <View style={styles.secondView}>
        <Text style={styles.Text}>Set new password</Text>
        <View style={{marginLeft:'16%',marginRight:'16%',marginTop:'5%'}}>
          <Text style={styles.text}>Your new password must be different than </Text>
          <Text style={styles.text}> the previouse one </Text>
        </View>
        
        <View style={{marginTop:'6%'}}>
          <Text style={{color:'#111111',marginLeft:'10%'}}>New Password</Text>
            <TextInput style={styles.input} />
            <Text style={{color:'#111111',marginLeft:'10%'}}>Confirm New Password</Text>
            <TextInput style={styles.input} />
        </View>
        <TouchableOpacity  style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Save</Text>
        </TouchableOpacity>
        <Text style={{color:"#5729e9",textAlign:'center',textDecorationLine: 'underline',}}>Back to Login</Text>
      </View>
</View>
    );
}
const styles=StyleSheet.create({
  container:{
    flex:1
},
logo:{
  width:'25%',
  height:'25%',
  left:'35%',
  alignItems:'center',
  marginTop:'10%'
},
MainLogo:{
  width:'100%',
  height:'20%',
  alignItems:'center',
  marginTop:"10%"
},
secondView:{
  height:'60%',
  width:'100%',
  backgroundColor:'white',
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  // alignItems:'center',
},
firstView:{
  height:'40%',
  // justifyContent:'center'        
},
image:{
    flex:1,
    justifyContent:'center'
},
text: {
    fontFamily: 'Inter',
    fontSize: 13,
    alignSelf:'center',
    color:'#575655',
  },
  bottomView:{
    flex:1,
    // width: '100%',
    height: '60%',
    backgroundColor: 'white',
    // ---botom
    position: 'absolute', 
    bottom: 0, 
    // --bottom
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28
  },
  
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#111111",
    borderRadius:10,
    padding:10,
    height:60,
    margin:12,
    justifyContent:'center',
    alignItems:'center'
  },
  appButtonText: {
    color: Colors.white,
    fontFamily: 'Inter',
    fontSize: 16,
  },
  Text:{
    fontSize:32,
    top:10,
    color:'#111111',
    alignSelf:'center',
    fontFamily: 'Inter'

    
  },
 
  expireIn:{
    flexDirection:'row',
    justifyContent:'center',
  },
  input:{
    borderWidth:1,
    margin:12,
    borderRadius:8,
    padding:10,
    height:60,
    borderColor:'#5729e9',
    color:'black',
    width:'93%',
  },



})
export default SetPasswordPage;