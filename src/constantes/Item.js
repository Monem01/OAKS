import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Icon,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import {Alert} from 'react-native/Libraries/Alert/Alert';
import icon from '../../assets/icon/Icon.png';
import profileImg from '../../assets/icon/profile.png';
import CheckboxContainer from './CheckboxContainer';
import Customize from '../../assets/icon/Customize.png';
import CustomizeDashboard from './CustomizeDashboard';
import { useNavigation } from '@react-navigation/native';

import MyButton from './MyButton';
const Item = (props) => {
  const [DashmodalVisible, setDashModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [bg, setbg] = useState('white');
  // navigation=NavigationContainer.na
  const hundelClick = () => {
    if(props.name=="increase pledge"){
      // setDashModalVisible(true);
      console.log("increase pledge")
    }
    else if(props.name=="Account Settings"){
      // const navigation = useNavigation();
      console.log('Account setting');
      // navigation.navigate('IncreasePledge');
    }
  };

  return (
    <View style={styles.secondView}>
      <CustomizeDashboard visible={false}/>
      
      <TouchableOpacity style={styles.appButtonContainer} onPress={hundelClick}>
        <View style={{right: 10}}>
          <Image source={props.icon} style={styles.appButtonText} />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '400'}}>
            {props.name}
          </Text>
        </View>
        <View style={{position: 'absolute', right: 10}}>
          <Image source={icon} style={{}} />
        </View>
      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  secondView: {
    marginTop: '1%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
  },
  appButtonContainer: {
    padding: 10,
    height: 60,
    // margin:12,
    // justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    // marginHorizontal:'-12%'
  },
  appButtonText: {
    // right:'250%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    // alignItems:"flex-end"
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  borderConatainer: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    position: 'absolute',
    right: '10%',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '90%',
    flex: 1,
    backgroundColor: 'white',
  },

});
export default Item;
