import React from "react";
import { StyleSheet, Text, View,Pressable,TouchableOpacity } from "react-native";
import Gradient from "../../constantes/Gradient";
const Profile=()=>{
    const color=['#3345E4', '#A133E4'];
    return(
        <View style={styles.container}>
            <View style={{justifyContent:"center",alignItems:"center", marginTop:"50%",width:"100%",height:"30%", }}>
                <TouchableOpacity
                    style={[styles.appButtonContainer]}
                    >
                        <Gradient text="Request Update" colors={['#3345E4', '#A133E4']} style={{ fontWeight: '300' }} />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    appButtonContainer: {
        // backgroundColor: "#111111",
        borderRadius:10,
        padding:10,
        height:60,
        borderWidth:1,
        // margin:12,
        justifyContent:'center',
        alignItems:'center',
        borderColor:"#111"
      },
      appButtonText: {
        // color: 'white',
        // fontFamily: 'Inter',
        fontSize: 16,
      },
});
export default Profile;