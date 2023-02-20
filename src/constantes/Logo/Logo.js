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
        flex:0.6,
        // borderWidth:5,
        // borderColor:'green',
        justifyContent:'center'
    },
    logo:{
        width:42,
        height:35,
        alignItems:'center',
        marginTop:'8%',
    },
    MainLogo:{
        width:'100%',
        height:'36%',
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