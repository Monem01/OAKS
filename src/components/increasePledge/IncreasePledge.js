import React,{useState} from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Modal } from "react-native";
import increase from "../../../assets/icon/increase.png"
import CurrentPladge from "../../constantes/currentPledge";
import Mystyles from "../../constantes/styles";
import back from "../../../assets/icon/Back.png"
import SuccessPopUp from "../../constantes/SuccesPopUp";
const IncreasePledge=()=>{
    const [number, onChangeNumber] = React.useState('');
    const [modalView,setmodalview]=useState(false)

    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <Image source={back} style={{marginLeft:15,}}/>
            </TouchableOpacity>
            <View style={{ justifyContent:"center",alignItems:"center",marginTop:10,}}>
            <Image source={increase}/>
            <Text style={styles.title}>Increase pledge</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.</Text>
            </View>
            <View style={{margin:10}}>
            <CurrentPladge  min={12526}/>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Put the Extra Pledge Amount CHF"
            keyboardType="numeric"
            placeholderTextColor="grey"
          />
          <TouchableOpacity  style={Mystyles.appButtonContainer} onPress={()=>{setmodalview(true)}}>
              <Text style={Mystyles.appButtonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={Mystyles.appButtonContainerwhite}>
              <Text style={Mystyles.appButtonTextWhite}>Cancel</Text>
          </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",

    },
    title:{
        fontSize: 32,
        fontWeight: "500",
        letterSpacing: -0.04,
        color:"#111",
        marginTop:55,
    },
    text:{
        color:"grey",
        textAlign:"center",
        margin:15,
    },
    input: {
        height: 60,
        width:"100%",
        marginTop: 35,
        borderWidth: 0.5,
        borderRadius:10,
        color:"#111",
        // backgroundColor:"red"
      }
})
export default IncreasePledge;