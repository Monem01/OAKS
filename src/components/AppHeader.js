import React from "react";
import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Surface } from "react-native-paper";
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Colors from "../contants/Colors";
IconSize=32;
import profileImg from '../../assets/profile.png';
import LogoImg from '../../assets/Symbol.png';
const AppHeader=()=>{
  return(
    <Surface style={styles.header}>
        <View style={[styles.view]}>
            <TouchableOpacity>
            <Image source={LogoImg} style={styles.Logo}></Image>
            </TouchableOpacity>
        </View>

        <View style={[styles.view,styles.rightView]}>
        <TouchableOpacity>
                {/* <Feather /> */}
                <EvilIcons name="bell" size={IconSize}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={profileImg} style={styles.styleImg}></Image>
            </TouchableOpacity>
        </View>
    </Surface>
  )
}
export default AppHeader;
const styles=StyleSheet.create({
    header:{
        height:70,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:Colors.white
    },
    view:{
        flex:1,
        margin:10,
        flexDirection:'row',
    },
    rightView:{
        justifyContent:'flex-end',
        margin:10
    },
    styleImg:{
        borderRadius:100,
        width:32,
        height:32
    },
    notification:{
        marginRight:10,
    },
    Logo:{
        flexDirection:'row',
        height:70,
        width:50
    },
})
