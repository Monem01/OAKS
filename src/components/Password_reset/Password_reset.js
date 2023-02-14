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
const Password_reset=()=>{
    return(
        <View style={styles.container}>
                <View style={styles.firstView}>
                    <Image source={LogoImg} style={styles.logo}/>
                    <Image source={MainLogo} style={styles.MainLogo}/>
                </View>
                <View style={styles.secondView}>
                <View style={styles.center}>
                    <Icon name="envelope" size={50}  style={styles.icon}/>
                    <Text style={styles.Text}>Password reset</Text>
                    <Text style={{color:'black',alignSelf:'center'}}>Your password has been successfully reset.</Text>
                    <Text  style={{color:'black',alignSelf:'center'}}> Click below to log in</Text>
                    
                </View>
                <TouchableOpacity  style={styles.appButtonContainer}  >
                    <Text style={styles.appButtonText}>Continue</Text>
                </TouchableOpacity>
                <Text style={{color:"#5729e9",textAlign:'center',textDecorationLine: 'underline',}}>Back to Login</Text>
                </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{flex:1},
    firstView:{
        height:'50%',
        justifyContent:'center'        
    },
    secondView:{
        height:'50%',
        // width:'100%',
        width:360,
        backgroundColor:'white',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        bottom:0,
        // alignItems:'center',
    },
    logo:{
        width:'25%',
        height:'20%',
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
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
      }


})
export default Password_reset;