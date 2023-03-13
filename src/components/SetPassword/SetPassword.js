import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity,Icon,TextInput, ScrollView } from "react-native";
import BottomContainer from "../../constantes/bottomContainer/BottomContainer"
import hide from "../../../assets/icon/hide.png";
import show from "../../../assets/icon/show.png";
import GradientTextInput from "../../constantes/gradientTextInput/GradientTextInput";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAvoidingView } from "react-native";
import MyButton from "../../constantes/MyButton";
import Password from "../../constantes/Password";
const SetPassword=()=>{
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
  const handelClick2=()=>{
    setHide2(!hide2);
    if(iconshow2==hide){
      setIconShow2(show)
    }
    else{
      setIconShow2(hide)
    }
  }
    return(
        <BottomContainer myView={
          <View style={styles.container} >
          
        <KeyboardAvoidingView style={styles.secondView}>
          <ScrollView>
          <Text style={styles.Text}>Set password</Text>
          <View style={{marginTop:'6%'}}>
            <Text style={{color:'#111111',marginLeft:'10%',fontWeight:'500'}}>New Password</Text>
              <Password/>
              <Text style={{color:'#111111',marginLeft:'10%',fontWeight:'500'}}>Confirm New Password</Text>
              <Password/>
          </View>
          <MyButton text="Save" />
          <Text style={{color:"#5729e9",textAlign:'center',textDecorationLine: 'underline',}}>Back to Login</Text>
          </ScrollView>
        </KeyboardAvoidingView>
  </View>

        } size={0.7}   />
    )
}
const styles=StyleSheet.create({
    container:{flex:1},
    Text:{
        fontSize:32,
        color:'#111111',
        alignSelf:'center',
        marginTop:'5%',
        fontWeight:'600'
        
      },
      buttonContainer: {
    width: 200,
    alignItems: 'center',
},
      // appButtonContainer: {
      //   elevation: 8,
      //   backgroundColor: "#111111",
      //   borderRadius:10,
      //   padding:10,
      //   height:60,
      //   margin:12,
      //   justifyContent:'center',
      //   alignItems:'center'
      // },
      // appButtonText: {
      //   color: 'white',
      //   fontFamily: 'Inter',
      //   fontSize: 16,
      // },
      text: {
        fontFamily: 'Inter',
        fontSize: 13,
        alignSelf:'center',
        color:'#575655',
      },
      input:{
        borderWidth:1,
        margin:12,
        borderRadius:8,
        padding:10,
        height:60,
        borderColor:'#254EDB',
        color:'black',
        width:'95%',
      },
      icon:{
        marginHorizontal:'-10%',
        // backgroundColor:'red',

      },
      buttonContainer: {
        width: 200,
        alignItems: 'center',
        // borderColor:''
    },
      // buttonText: {
      //   textAlign: 'center',
      //   color: '#4C64FF',
      //   padding: 15,
      //   marginLeft: 1,
      //   marginRight: 1,
      //   width: 198},
  
      


})
export default SetPassword;