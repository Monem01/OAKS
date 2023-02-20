import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CheckEmail from '../CheckEmail/CheckEmail';
import Double_authentication from '../DoubleAuthentification/DoubleAuthentication';
import { NavigationContainer } from '@react-navigation/native';
import Deals from '../Deals/Deals';
import Profile from '../Profile/profile';
import { View,Text } from 'react-native'
const Drawer = createDrawerNavigator();

const MyDrawer=()=> {
  return (
      <NavigationContainer>
    <Drawer.Navigator initialRouteName='Double_authentication'>
      <Drawer.Screen name="Deals" component={Deals} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
export default MyDrawer;