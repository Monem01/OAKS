import React,{useState}from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity,Modal,Pressable,ScrollView } from 'react-native';
import CheckboxContainer from '../../constantes/CheckboxContainer';
import MyButton from '../../constantes/MyButton';

// import img from "../../../assets/img"
import img from "../../../assets/img.png"
import profileImg from "../../../assets/icon/profile.png";
import setting from "../../../assets/icon/setting.png"
import wishlist from "../../../assets/icon/wishlist.png"
import pledge from "../../../assets/icon/pledge.png"
import faq from "../../../assets/icon/faq.png"
import support from "../../../assets/icon/support.png"
import Log_out from "../../../assets/icon/Log_out.png"
import Item from '../../constantes/Item';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const  Menu=()=> {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Image source={img} style={styles.img}/>
        <View >
        <Text style={styles.text}>Kristen Schneider</Text>
        <Text style={{color:"black",fontWeight:"200"}}>KristenSchneider@gmail.com</Text>
        </View>
      </View>
      <View style={{marginTop:"10%"}}>
      <Item name="My Profile" icon={profileImg} />
      <Item name="Account Settings" icon={setting} />
      <Item name="wishlist" icon={wishlist}/>
      <Item name="increase pledge" icon={pledge} />
      <Item name="FAQ" icon={faq} />
      <Item name="Support" icon={support} />
      <Item name="Log Out" icon={Log_out} />

      </View>
      <Text style={{color:"black",fontWeight:"200",marginLeft:'10%',marginTop:"5%"}}>Version 1.0</Text>

    </View>
   );
}
const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:"white"},
  firstView:{
    flex:0.4,
    flexDirection:'row',
    marginTop:"20%",
    // alignItems:"center"

  },img:{
  marginRight:'5%',
  marginLeft:"5%",

  },
  text:{
    color:"black",
    fontWeight:"400",
    fontSize:20
  },
  checkboxContainer:{
    flexDirection:"row",
    alignItems:"center",
  },
  checkbox:{
  },
  modalView: {
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:"90%",
    flex:1,
    backgroundColor:"white"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 50,
    marginTop:10,
    backgroundColor:""
  },
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
export default Menu;