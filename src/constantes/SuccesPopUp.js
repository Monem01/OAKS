import React from "react";
import okIcon from "../../assets/icon/ok.png"
import { StyleSheet,View,ScrollView,Text,Image } from "react-native";
import Mystyles from "./styles";
const SuccessPopUp=()=>{
    
    return(
        <View style={styles.modalView}>
        <ScrollView>
          <View style={{padding: 16}}>
            <View style={{alignItems: 'center'}}>
              <Image source={okIcon} style={styles.icon} />
              <Text style={Mystyles.title}>Success</Text>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  margin: 15,
                }}>
                Great! Your request was successfully sent. We will check it
                soon.
              </Text>
            </View>
            
          </View>
        </ScrollView>
      </View>
    )
}
const styles = StyleSheet.create({
    modalView: {
      flex: 0.4,
    },
    title:{
        marginTop:10,
        color:"#111",
        fontSize:32,
    },
    icon:{
        marginTop:10,
    }
});
export default SuccessPopUp;
