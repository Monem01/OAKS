
import React,{useState} from 'react';
import {Button, Text,Dimensions,Image, ScrollView} from 'react-native';
import BottomContainer from '../../../constantes/bottomContainer/BottomContainer';
const { height } = Dimensions.get("window");import Password from '../../../constantes/Password';
import { KeyboardAvoidingView } from 'react-native';
import MyButton from '../../../constantes/MyButton';
import InputEmail from '../../../constantes/InputEmail';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LogIn = () => {
  return (
    <BottomContainer myView={
        <View style={styles.container}>
        <KeyboardAvoidingView >
          <ScrollView>
        <Text style={styles.titleLog}>Log in</Text>
        <InputEmail/>
        <Text style={styles.title}>Password</Text>
        <Password />
       
          <MyButton text="Login" />
       <Text style={styles.link}>Forgot password?</Text>
       </ScrollView>
       </KeyboardAvoidingView>
      </View>
     
    } size={0.8}/>
      
 )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleLog:{
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 28,
    marginTop:'10%',
    // marginBottom:'1%',
  },

  link:{
    paddingTop:'5%',
    color:'#254EDB',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    
  },
  title:{
   left:25,
   color:"#111"
  }
});
export default LogIn;
