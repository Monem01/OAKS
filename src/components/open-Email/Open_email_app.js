import React from "react";
import * as OpenAnything from "react-native-openanything";
import { Alert, Linking } from 'react-native';
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity } from "react-native";
import bg from '../../../assets/bg.png'
import MainLogo from '../../../assets/Oaks-Capital-Main-logo-light.png';
import Colors from "../../contants/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { Icon } from 'react-native-gradient-icon';
import LogoImg from '../../../assets/Oaks-Capital-Symbol-ligh.png';
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { openInbox } from "react-native-email-link";
import { Video } from "react-native-video";
IconSize=32;
const Open_email_app=()=>{
  
const openPhoneDialer = () => {
        return openInbox();
    } 
    return(
        <View style={styles.container}>
                <View style={styles.firstView}>
                    <Image source={LogoImg} style={styles.logo}/>
                    <Image source={MainLogo} style={styles.MainLogo}/>
                </View>
                <View style={styles.secondView}>
                <View style={styles.center}>
                <Icon name="envelope" size={50}  style={styles.icon}/>
                <Text style={styles.Text}>Check your Email</Text>
                <Text>We sent a password reset link to anderson@gmail.com</Text>
                </View>
                <TouchableOpacity  style={styles.appButtonContainer} onPress={openPhoneDialer} >
                    <Text style={styles.appButtonText}>Open email app</Text>
                </TouchableOpacity>
                <Text style={{color:Colors.black,fontSize:14,textAlign:'center'}}>Didn’t receive your code?</Text>
                <Text style={{color:"#5729e9",textAlign:'center',textDecorationLine: 'underline',}}>Generate new code</Text>
                </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{flex:1},
    imageBackground:{
        flex:1,
        justifyContent:'center',
        alignItems:'center' 
    },
    firstView:{
        height:'40%',
        width:'100%',
        alignItems:'center',
        backgroundColor:'red',
    },
    secondView:{
        height:'60%',
        width:360,
        backgroundColor:'white',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        // alignItems:'center',
    },
    logo:{
        width:'20%',
        height:'20%',
        alignItems:'center',
        marginTop:'10%'
      },
      MainLogo:{
        width:'100%',
        height:'20%',
        alignItems:'center',
        marginTop:"10%"
      },
      icon:{
        color:'#5729e9',
        alignItems:'center',
        marginTop:'10%'
  
    },
    Text:{
        fontSize:32,
        color:'#111111',
        alignSelf:'center',
        marginTop:'5%'
        
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
      center:{
        alignItems:'center'
      }


})
export default Open_email_app;