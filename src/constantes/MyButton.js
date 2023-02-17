import React from "react";
import { StyleSheet,TouchableOpacity,Text } from "react-native";

const MyButton=(props)=>{
    return(
        <TouchableOpacity  style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>{props.text}</Text>
          </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
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
export default MyButton