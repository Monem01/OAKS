import React from "react";
import { View,Text, StyleSheet,TouchableOpacity } from "react-native";
import MyButton from "./MyButton";
import Mystyles from "./styles";
const AccountDeletion=()=>{
    return(
        <View style={{flex:1,borderWidth:1,margin:10,borderRadius:10,borderColor:"#EDEEEF",padding:10}}>
            <View>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Dolor morbi non arcu risus quis varius quam quisque id. Nisl pretium fusce id velit ut tortor pretium. Feugiat nisl pretium fusce id velit ut tortor. Arcu cursus vitae.</Text>
            </View>
            <TouchableOpacity  style={Mystyles.appButtonContainer}>
          <Text style={Mystyles.appButtonText}>Request to Delete</Text>
      </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        color:"grey",
        fontSize:16,
        fontWeight:"500",
        textAlign:"auto",
        lineHeight:19,
        //styleName: Inter/Medium/1em 120%;
        // font-family: Inter;
        // font-size: 16px;
        // font-weight: 500;
        // line-height: 19px;
        // letter-spacing: 0em;
        // text-align: center;

    }
})
export default AccountDeletion;