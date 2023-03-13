
import React,{useState} from "react";
import MyButton from "./MyButton";
import { StyleSheet, View,Text } from "react-native";
import { color } from "react-native-reanimated";
const NotEnoughMoneyOnYourPledge=(props)=>{
    const[min,setmin]=useState(25000)
    return(
        <View style={styles.container}>
            <View style={{margin:10}}>
                <Text style={styles.testTitle}>Not enough money on your pledge</Text>
                <Text style={styles.text}>You don’t have enough money on your pledge. Because it's lower than the minimum invest required, please, increase your Pledge to invest it.</Text>
                <View style={styles.minInvest}>
                    <Text style={[styles.valuemargin,{color:"#E8E8E8",fontSize:14}]}>Minimum Investment:</Text>
                    <Text style={[styles.valuemargin,{color:"#111",fontSize:18,fontWeight:"400"}]}>CHF {min}</Text>
                </View>
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:0.5,
        // backgroundColor:"red",

        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
    },
    testTitle:{
        color:"#111",
        fontSize:32,

    },
    text:{
        marginTop:5,
        color:"#111",
        fontSize:16.5,
    },
    minInvest:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        marginTop:15,
        // padding:10
    },
    valuemargin:{
        marginTop:15,marginBottom:15
    }


})
export default NotEnoughMoneyOnYourPledge;