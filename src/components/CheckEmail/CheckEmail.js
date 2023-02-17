import React from "react";
import { Image, ImageBackground, StyleSheet, View,Text,TouchableOpacity, ScrollView } from "react-native";
import BottomContainer from "../../constantes/bottomContainer/BottomContainer";
import IconMail from "../../../assets/icon/mail.png"
import { openInbox } from "react-native-email-link";
IconSize=32;
const CheckEmail=()=>{
  
const openEmail = () => {
        return openInbox();
    } 
    return(
        <BottomContainer myView={
            <View style={styles.container}>
              <KeyboardAvoidingView >
                <ScrollView>
                <View style={styles.secondView}>
                <View style={{alignItems:'center'}}>
                <Image source={IconMail} style={styles.icon}/>
                </View>
                <Text style={styles.Text}>Check your Email</Text>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>We sent a password reset link to </Text>
                <Text>anderson@gmail.com</Text>
                </View>
                </View>
                <TouchableOpacity  style={styles.appButtonContainer} onPress={openEmail} >
                    <Text style={styles.appButtonText} >Open email app</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{color:'black',fontSize:14,textAlign:'center',marginTop:'5%'}}>Didn’t receive your code? </Text>
                <Text style={{fontSize:14,textAlign:'center',textDecorationLine: 'underline',color:"#254EDB",marginTop:'5%'}}> Click to resend</Text>
                </View>
                
                <Text style={{textAlign:'center',textDecorationLine: 'underline',color:"#254EDB",marginTop:'5%'}}>Back to Log in</Text>
                </ScrollView>
                </KeyboardAvoidingView> 
        </View>

        } size={0.6}/>
        
    );
}
const styles=StyleSheet.create({
    container:{flex:1},
      icon:{
        alignItems:'center',
        marginTop:'10%',
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
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 16,
      },
      

})
export default CheckEmail;