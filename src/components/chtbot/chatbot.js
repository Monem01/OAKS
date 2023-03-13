import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import logo from'../../../assets/OpenAI_logo.png';
import MyButton from "../../constantes/MyButton";

const Chatbot=()=>{
    const [messageInitiale,setmessageInitiale]=useState("Hello what can i help you with")
    const message=[];
   
    message.push("test");
    message.push("test");
    message.push("test");
    message.push("test");
    message.push("test");
    message.push("test"); message.push("test");
    message.push("test");
    const messageRobot=[];
    const hundelSend=()=>{
        message.push("test");
        console.log(message)
    }

    return(
        <View style={styles.container}>
            <View style={styles.firstview}>
            <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.secondview}>
                <ScrollView >
                    <View style={{backgroundColor:"red",width:"10%"}} ref>
                        {message.map((nombre) => (
                        <Text key={nombre}>{nombre}</Text>
                    ))}
                        <Text style={styles.messagebody}>test</Text>
                    </View>
                </ScrollView>
                <View style={styles.message}>
                <TextInput style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                placeholder="useless placeholder" />
                    <TouchableOpacity onPress={hundelSend}  style={styles.appButtonContainer2}>
                    <Text style={styles.appButtonText2}>Submit</Text>
                    </TouchableOpacity>
                   
                </View>
                
            </View>
            
        </View>
        
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    input: {
        height: "70%",
        width:"70%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10
    },
    logo:{
        width:"30%",
        height:"60%",
        // radius:"100%",
        borderRadius:100
    },
    firstview:{
        width:"100%",
        height:"20%",
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",  
    },
    message:{
        flexDirection:"row",
        
    },
    secondview:{
        width:"100%",
        height:"80%",
        backgroundColor:"#F7F5F5",
        borderTopRightRadius:20,
        borderTopLeftRadius:20,

    },
    text:{
        color:'red',
        fontSize:50,
    },
    messagebody:{
        color:"#111",
        fontSize:20,
        fontWeight:"300",
        
    },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#111111",
        borderRadius:10,
        padding:10,
        height:60,
        margin:12,
        justifyContent:'center',
        alignItems:'center'
      },
      appButtonText2: {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 16,
      },
});
export default Chatbot;