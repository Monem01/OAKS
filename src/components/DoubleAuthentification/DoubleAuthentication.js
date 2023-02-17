import React from "react";
import { Text ,View,ImageBackground,StyleSheet,TouchableOpacity,TextInput, Image, ScrollView} from "react-native";
import { KeyboardAvoidingView } from "react-native";

import BottomContainer from "../../constantes/bottomContainer/BottomContainer"
import MyButton from "../../constantes/MyButton";

const hundelpress=()=>{
  
}
const Double_authentication=()=>{
    return(
      <BottomContainer 
               
                myView={
                    <View style={styles.container}>
                        <KeyboardAvoidingView >
                <ScrollView>
                <Text style={styles.Text}>Double authentication</Text>
                <View style={{margin:10}}>
                <Text style={styles.text}>We've sent a 4-digit code to your email address.</Text>
                <Text style={styles.text}>  Please enter the code into the below field.</Text>
                </View>
                <View style={styles.expireIn}>
                    <Text style={styles.text}>code expires in </Text>
                    <Text style={{fontWeight:'bold',fontSize:16,color:"black"}}>54 </Text>
                    <Text style={styles.text}>seconds</Text>
                </View>
                <View style={styles.InputGroup}>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1} />
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                </View>
               <MyButton text="Submit"/>
                <Text style={{color:'black',fontSize:14,textAlign:'center'}}>Didn’t receive your code?</Text>
                <Text style={{color:"#5729e9",textAlign:'center',textDecorationLine: 'underline',}}>Generate new code</Text>
                </ScrollView>
                </KeyboardAvoidingView>
                </View>
                } size={0.8}
        />
        );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:'10%',
    },
    secondView:{
      height:'60%',
      width:'100%',
      backgroundColor:'red',
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      // alignItems:'center',
  },

    text: {
        fontSize: 14,
        alignSelf:'center',
        color:'#575655'
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
        margin:2,
        borderRadius:8,
        padding:10,
        height:60,
        borderColor:'#5729e9',
        color:'black',
        width:'15%',
      },
      InputGroup:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:25,
        

      },
      logo:{
        width:'20%',
        height:'10%',
        alignItems:'center',
        marginTop:'10%'
      },
      LogoGroup:{
        flex:1,
        alignItems:'center',
        
      }

}   )
export default Double_authentication;