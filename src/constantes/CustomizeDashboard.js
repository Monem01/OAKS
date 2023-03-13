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
import CheckboxContainer from './CheckboxContainer';
import Customize from '../../assets/icon/Customize.png';
import MyButton from './MyButton';

const CustomizeDashboard = (props) => {
    const [DashmodalVisible, setDashModalVisible] = useState(false);
    const cancel = () => {
        setDashModalVisible(!DashmodalVisible);
        if (bg == 'white') {
          setbg('#F5F5F5');
        } else {
          setbg('white');
        }
      };
    return(
        <>
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        //   setModalVisible2(false);
        }}>
        <View style={styles.modalView}>
          <View style={{position: 'absolute', right: '10%'}}>
            <Pressable style={[]} onPress={cancel}>
              <Text style={{color: '#111', fontSize: 20, marginTop: '10%'}}>
                Cancel
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#111',
                textAlign: 'center',
              }}>
              Customize dashboard
            </Text>
          </View>
          <ScrollView>
            <View style={styles.borderConatainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <CheckboxContainer text="Open for Investment" />
                  <CheckboxContainer text="Funded Opportunities" />
                  <CheckboxContainer text="View all Opportunities" />
                </View>
                <View style={[styles.icon, {marginTop: '10%'}]}>
                  <Image source={Customize} />
                </View>
              </View>
            </View>

            <View style={styles.borderConatainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <CheckboxContainer text="My Investments" />
                </View>
                <View style={styles.icon}>
                  <Image source={Customize} />
                </View>
              </View>
            </View>

            <View style={styles.borderConatainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <CheckboxContainer text="My Wishlist" />
                </View>
                <View style={styles.icon}>
                  <Image source={Customize} />
                </View>
              </View>
            </View>

            <View style={styles.borderConatainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <CheckboxContainer text="My Expected Returns" />
                </View>
                <View style={styles.icon}>
                  <Image source={Customize} />
                </View>
              </View>
            </View>

            <View style={styles.borderConatainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <CheckboxContainer text="My Notifications" />
                </View>
                <View style={styles.icon}>
                  <Image source={Customize} />
                </View>
              </View>
            </View>

            <View style={styles.borderConatainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <CheckboxContainer text="My Profile" />
                </View>
                <View style={styles.icon}>
                  <Image source={Customize} />
                </View>
              </View>
            </View>

            <MyButton text="Apply Items" />
          </ScrollView>
        </View>
      </Modal>
        </>
    )
}
const styles=StyleSheet.create({
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
export default CustomizeDashboard;