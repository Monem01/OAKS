import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import SuccessPopUp from '../../constantes/SuccesPopUp';
import NotEnoughMoneyOnYourPledge from '../../constantes/NotEnoughMoneyOnYourPledge';
import DealsImage from '../../../assets/dealsExemple.png';
import favourite from '../../../assets/icon/favourite.png';
import GoBack from '../../../assets/icon/return.png';
import Ellipse from '../../../assets/icon/Ellipse.png';
import img from '../../../assets/new/Logo.png';
import Iconinvestor from '../../../assets/icon/Iconinvestor.png';
import VectorDays from '../../../assets/icon/VectorDays.png';
import MyButton from '../../constantes/MyButton';
import CustomSlider from '../../constantes/CustomSlider';
import IncreaseMyPledge from '../../constantes/IncreasePledge';
const MyView = props => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        height: 30,
        borderWidth: 0.5,
        borderColor: '#E8E8E8',
        marginLeft: 10,
      }}>
      <Image source={props.img} style={{margin: 6}} />
      <Text style={{color: '#111', margin: 5}}>{props.text}</Text>
    </View>
  );
};
const InvestInformation = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      }}>
      <Text style={{fontSize: 16, color: '#111'}}>{props.information}</Text>
      <Text style={{fontSize: 16, color: '#111', marginRight: 15}}>
        {props.value}
      </Text>
    </View>
  );
};

const DetailsPage = () => {
  const [bg, setbg] = useState('white');
  const [modalVisible, setModalVisible] = useState(false);
  const [increasepledgeModal,setincreasepledgeModal]=useState(false);
  const [successModal,setsuccessModal]=useState(false);
  const scrollViewRef = useRef();
  const cancel = async () => {
    await setModalVisible(false);
    setincreasepledgeModal(false)
    // await setbg("white")
    console.log('cancel');
  };
  const handlePress = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true});
    setModalVisible(true);
    // setbg("#E8E8E8")
    console.log('press');
  };
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: bg}]}
      ref={scrollViewRef}>
      <Image source={DealsImage} style={styles.image} />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => console.log('Go BAck')}>
          <Image
            source={GoBack}
            style={{
              justifyContent: 'flex-start',
              marginLeft: 20,
              marginTop: 30,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Whish List')}>
          <Image
            source={favourite}
            style={{justifyContent: 'flex-end', marginRight: 20, marginTop: 30}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: '-20%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // position: 'absolute',
          // bottom: '33%',
          // backgroundColor:"red"
        }}>
        <TouchableOpacity onPress={() => console.log('Whish List')}>
          <Image
            source={img}
            style={{justifyContent: 'flex-end', marginLeft: 20}}
          />
        </TouchableOpacity>
        <View style={{margin: 10}}>
          <MyView text="Open For Investment" img={Ellipse} />
        </View>
      </View>
      {/* <ScrollView> */}
      <View style={{marginLeft: 15, marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <MyView text="15 Days Remaining" img={VectorDays} />
          <MyView text="20 Investors Max" img={Iconinvestor} />
        </View>
        <Text style={{fontWeight: '500', color: '#111', fontSize: 32}}>
          OAKS ONE SA
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={VectorDays} style={{marginLeft: 6}} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#111',
              marginLeft: 15,
              textDecorationLine: 'underline',
              textDecorationColor: '#111',
            }}>
            Collonge-Bellerive, GE
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16, color: '#111'}}>Raised: CHF 525’000</Text>
        <Text style={{fontSize: 16, color: '#111'}}>Total: CHF 725’000</Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderRadius: 15,
          borderColor: '#E8E8E8',
          margin: 10,
        }}>
        <InvestInformation information="info" value="val" />
        <InvestInformation information="info" value="val" />
        <InvestInformation information="info" value="val" />
        <InvestInformation information="info" value="val" />
        <InvestInformation information="info" value="val" />
      </View>
      <TouchableOpacity style={styles.appButtonContainer} onPress={handlePress}>
        <Text style={styles.appButtonText}>Invest</Text>
      </TouchableOpacity>

      <View style={{margin: 15}}>
        <Text style={{fontSize: 16, color: '#111'}}>Investment Calculator</Text>
        <Text style={{color: '#111', fontWeight: '300'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
      <CustomSlider min={5} max={50} initialValue={20} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalStyle}>
          <View style={{left: '80%'}}>
            <TouchableOpacity onPress={cancel}>
              <Text style={{color: '#111', fontSize: 20, marginTop: '2%'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <NotEnoughMoneyOnYourPledge />
          <TouchableOpacity  style={styles.appButtonContainer} onPress={()=>{setincreasepledgeModal(true);setModalVisible(false)}}>
              <Text style={styles.appButtonText}>Increase my Pledge</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={increasepledgeModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setincreasepledgeModal(!increasepledgeModal)
        }}>
        <View style={styles.modalStyle}>
          <View style={{left: '80%'}}>
            <TouchableOpacity onPress={cancel}>
              <Text style={{color: '#111', fontSize: 20, marginTop: '2%'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <IncreaseMyPledge />
          <TouchableOpacity  style={styles.appButtonContainer} onPress={()=>{setsuccessModal(true);setincreasepledgeModal(false)}}>
              <Text style={styles.appButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={successModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setsuccessModal(!successModal)
        }}>
        <View style={styles.modalStyle}>

          <SuccessPopUp />
          <TouchableOpacity  style={styles.appButtonContainer} onPress={()=>setsuccessModal(false)}>
              <Text style={styles.appButtonText}>Go to the platform</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* </ScrollView> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
    fontSize: 50,
  },
  image: {
    width: '100%',
    // height: '65%',
  },
  modalStyle: {
    // borderRadius: 20,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    elevation: 30,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#111111',
    borderRadius: 10,
    padding: 10,
    height: 60,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButtonText: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 16,
  },
});

export default DetailsPage;
