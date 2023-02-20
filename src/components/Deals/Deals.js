import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Deals=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Deals</Text>
        </View>
        
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        color:'red',
        fontSize:50,
    }
});
export default Deals;