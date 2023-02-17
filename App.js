import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Logo from './src/constantes/Logo/Logo';
import SetPassword from './src/components/SetPassword/SetPassword';
import CheckEmail from './src/components/CheckEmail/CheckEmail';
import LogIn from './src/components/Auth/Login/Login';
import Double_authentication from './src/components/DoubleAuthentification/DoubleAuthentication';
const App = () => {
  return (
    <ImageBackground source={require('./assets/bg.png')} style={styles.backgroundImage}>
      <Logo/>
        <Double_authentication/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  },
});

export default App;
