import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import ProductDetailPage from './src/components/test';
import {SelectList} from 'react-native-dropdown-select-list';
import Vector1 from './assets/icon/Vector1.png';
import Vector2 from './assets/icon/Vector2.png';
import Logo from './src/constantes/Logo/Logo';
import SetPassword from './src/components/SetPassword/SetPassword';
import CheckEmail from './src/components/CheckEmail/CheckEmail';
import LogIn from './src/components/Auth/Login/Login';
import Double_authentication from './src/components/DoubleAuthentification/DoubleAuthentication';
import Menu from './src/components/Menu/Menu';
import DashboardPopup from './src/components/DashboardPopup/DashboardPopup';
import MyDrawer from './src/components/drawer/Drawer';
import {ScrollView} from 'react-native-gesture-handler';
import Test from './src/test';
import Profile from './src/components/Profile/profile';
import Chatbot from './src/components/chtbot/chatbot';
import DetailsPage from './src/components/Deals/detailsPage';
import IncreasePledge from './src/components/increasePledge/IncreasePledge';
import Sccess from './src/components/success/Sccess';
import AccountSetting from './src/components/accountSetting/AccountSetting';
import Deals from './src/components/Deals/Deals';
// const App = () => {
//   return (
//     // <ImageBackground source={require('./assets/bg.png')} style={styles.backgroundImage}>
//     //   <Logo/>
//     //     <Double_authentication/>
//     // </ImageBackground>
//     <Chatbot/>

//   );
// };
const App = () => {
  

  return (
    <View style={styles.container}>
      <Profile/>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    backgroundColor:"white"
    // backgroundColor:'#fff',
    // alignItems:"center",
    // justifyContent:'center',
  },
  
});

export default App;
