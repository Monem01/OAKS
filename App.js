import React from 'react';
import { StyleSheet, ImageBackground, View,TouchableWithoutFeedback, Text,SafeAreaView } from 'react-native';
import Logo from './src/constantes/Logo/Logo';
import SetPassword from './src/components/SetPassword/SetPassword';
import CheckEmail from './src/components/CheckEmail/CheckEmail';
import LogIn from './src/components/Auth/Login/Login';
import Double_authentication from './src/components/DoubleAuthentification/DoubleAuthentication';
import Menu from './src/components/Menu/Menu';
import DashboardPopup from './src/components/DashboardPopup/DashboardPopup';
import MyDrawer from './src/components/drawer/Drawer';
import { ScrollView } from 'react-native-gesture-handler';
import Test from './src/test';
import Profile from './src/components/Profile/profile';
const App = () => {
  return (
    // <ImageBackground source={require('./assets/bg.png')} style={styles.backgroundImage}>
    //   <Logo/>
    //     <Double_authentication/>
    // </ImageBackground>
    <Menu/>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  },
  container:{
    flex:1,
    // backgroundColor:'#fff',
    alignItems:"center",
    justifyContent:'center',
  },
});

export default App;
