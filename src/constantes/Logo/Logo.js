import React from "react";
import LogoImg from '../../../assets/Oaks-Capital-Symbol-ligh.png'
import MainLogo from '../../../assets/Oaks-Capital-Main-logo-light.png'
import { View,Text, StyleSheet,Image } from "react-native";
import { KeyboardAvoidingView } from "react-native";
const Logo=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.firstView}>
                    <Image source={LogoImg} style={styles.logo}/>
                    <Image source={MainLogo} style={styles.MainLogo}/>
                </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:0.4,
        borderWidth:5,
        borderColor:'green',
        justifyContent:'center'
    },
    logo:{
        width:40,
        height:35,
        alignItems:'center',
        marginTop:'10%',
        position:'relative',
    },
    MainLogo:{
        width:'100%',
        height:'35%',
        alignItems:'center',
        marginTop:"5%",
        // fontSize:200
        // position:'fixed',
    },
    firstView:{
        // position:'fixed',
        alignItems:'center',
        // backgroundColor:'red',
        height:'100%',
        
    },
});
export default Logo;