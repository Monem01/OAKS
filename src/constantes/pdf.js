import React from "react";
import { StyleSheet,TouchableOpacity,Text,Image,View } from "react-native";
import download from '../../assets/icon/download.png';
import file from '../../assets/icon/file.png';
const Pdf=(props)=>{
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#E8E8E8',
          }}>
            <Image source={file}/>
            <Text>efgpisdbvednvqpevgîqeur^2584654.pdf</Text>
            <View style={{borderWidth:0.5,borderColor:"#E8E8E8",borderRadius:5,width:40,height:30,justifyContent:"center",alignItems:"center"}}>
            <Image source={download} style={{margin:5,}}/>
            </View>
          
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
export default Pdf