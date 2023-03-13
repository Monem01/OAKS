import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Logo from '../../../assets/Logo.png';
import circleImage from'../../../assets/profilepicture.png';
import Iconnotification from'../../../assets/icon/Iconnotification.png';

const TopHeader=()=>{
    return (
      <View style={styles.container}>
        <View style={styles.rectangle}>

          <Image
            source={Logo}
            style={styles.logo}
          />
          
          <Image
            source={Iconnotification}
            style={styles.notificationIcon}
          />
          <Image
            source={circleImage}
            style={styles.circleImage}
          />
         
        </View>
        </View>
      );
    
}
const styles=StyleSheet.create({
  container: {
    flex:0,
    borderBottomWidth:1,
    borderBottomColor:'#E7E7E7',
  },
rectangle:{
    alignItems: 'center',
    height:80,
    flexDirection:'row',
    
},
logo:{
    margin:'4%',
    width:50,
    height:40,
},
circleImage:{
    position:"absolute",
    // bottom:'75%',
    margin:'2%',
    right:0,
    borderRadius:100,
    width:30,
    height:30,
    
},
notificationIcon:{
    alignSelf: 'center',
    left:"240%",
    // margin:'2%',
    // bottom:'25%',
    // left:'28%',
},
box:{
    // backgroundColor:'#F5F5F5',
    backgroundColor:'red',
    alignSelf: 'center',
}
});
export default TopHeader;