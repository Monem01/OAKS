import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
  Alert,
  Button,
  Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pdf from '../../constantes/pdf';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SceneView} from 'react-navigation';
import Gradient from '../../constantes/Gradient';
import MyButton from '../../constantes/MyButton';
import okIcon from '../../../assets/icon/ok.png';
import download from '../../../assets/icon/download.png';
import file from '../../../assets/icon/file.png';
import pledge from '../../../assets/icon/pledge.png';
import Vector1 from '../../../assets/icon/Vector1.png';
import Vector2 from '../../../assets/icon/Vector2.png';
import TopHeader from '../header/TopHedaer';
import GradientButton from '../../constantes/gradienntButton';
import LinearGradient from 'react-native-linear-gradient';
import profilepicture from '../../../assets/profilepicture.png';
import {SelectList} from 'react-native-dropdown-select-list';
import Deals from '../Deals/Deals';
const Field = props => {
  const view = props.myView;
  return (
    <View
      style={{
        backgroundColor: props.background,
        margin: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 15,
      }}>
      <Gradient text={props.title} size={20} />
      {view}
    </View>
  );
};
const DropdownArea = props => {
  const [IsClicked, setIsClicked] = React.useState(false);
  const myView = props.View;
  return (
    <View style={{margin: 10, borderWidth: 0.5, borderRadius: 5}}>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => {
          setIsClicked(!IsClicked);
          // console.log('change')
        }}>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Gradient text={props.titre} size={30} />
          {/* <Image source={okIcon}  style={{position:"absolute",right:10,}}/> */}
        </View>
        {IsClicked ? (
          <Image source={Vector1} style={styles.icon} />
        ) : (
          <Image source={Vector2} style={styles.icon} />
        )}
      </TouchableOpacity>
      {IsClicked ? <View>{myView}</View> : null}
    </View>
  );
};
const InformationView = props => {
  return (
    <View style={{marginLeft: 10, marginTop: 10}}>
      <Gradient text={props.text} size={18} />
      <Text
        style={{fontWeight: '400', fontSize: 20, opacity: 8, color: '#111111'}}>
        {props.value}
      </Text>
    </View>
  );
};

const Profile = () => {
  const Tab = createBottomTabNavigator();
  const color = ['#3345E4', '#A133E4'];
  // const [backgroundColorstart, setbackgroundColorstart] = useState('#FFFFFF');
  // const [backgroundColorsend, setbackgroundColorsend] = useState('#FFFFFF');
  // const [IsClicked, setIsClicked] = React.useState(false);
  // const [select, setselect] = React.useState('select Country');
  const [bg, setbg] = useState('white');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
  // const [selected, setSelected] = React.useState('');
  // const IdVerification = <View style></View>;
  const data = [
    {key: '1', value: '000C'},
    {key: '2', value: '000A'},
    {key: '3', value: '000B'},
    {key: '4', value: '000C'},
    {key: '5', value: '000D'},
    {key: '6', value: '000E'},
    {key: '7', value: '000F'},
  ];
  const myView = (
    <View style={styles.dropdownArea}>
      <View style={styles.profilepicture}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={profilepicture} />
          <View style={{width: '75%'}}>
            <TouchableOpacity
              style={[
                styles.appButtonContainer,
                {
                  borderColor: '#E0E0E0',
                  width: '90%',
                  marginHorizontal: 15,
                  height: 45,
                },
              ]}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={pledge}
                  style={{position: 'absolute', left: 1}}
                />

                <View
                  style={{
                    position: 'absolute',
                    right: '0%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Gradient
                    text="Upload new Picture"
                    colors={['#3345E4', '#A133E4']}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Text style={{margin: 10, color: '#E0E0E0'}}>
              JPG or PNG format only
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  const IndividualInformation = (
    <View style={{marginHorizontal: 5, size: 10}}>
      <View style={{marginLeft: 15, marginTop: 10}}>
        <Gradient text="Account Number" size={30} />
      </View>

      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        style={{color: '#111'}}
        // save="value"
      />
      <InformationView text="Gender" value="Female" />
      <InformationView text="First Name" value="Kristin" />
      <InformationView text="Last Name" value="Schneider" />
      <InformationView text="Email" value="KristenShnider@gmail.com" />
      <InformationView text="Phone Number" value="+41 22 346 63 23" />
      <InformationView text="Date of Birth" value="17 / 05 / 1973" />
      <InformationView text="Place of Birth" value="Geneva" />
      <InformationView text="Nationality" value="German" />
      <InformationView text="ID / Passeport Number" value="94936R030" />
      <InformationView text="Occupation" value="Trader" />
      <InformationView text="Sector of Activity" value="Finance" />
      <InformationView text="Adresse" value="Only Quai Gustave-Ador 62" />
      <InformationView text="Postal Code " value="12 07" />
      <InformationView text="City " value="Geneva" />
      <InformationView text="Country " value="Switzerland" />
    </View>
  );
  const IDVerification = (
    <View>
      <Field
        background="#F3F3F3"
        title="ID / Passeport "
        myView={
          <View>
            <Pdf />
            <Pdf />
          </View>
        }
      />
      <Field
        background="#F3F3F3"
        title="Swiss Permit "
        myView={
          <View>
            <Pdf />
          </View>
        }
      />
      <Field
        background="#F3F3F3"
        title="Utility Bill"
        myView={
          <View>
            <Pdf />
          </View>
        }
      />
    </View>
  );
  const BanckingInformation=(
    <View>
    <InformationView text="Bank Name" value="Credit Swisse" />
      <InformationView text="Bank  Address " value="Rue de Lausanne 11-19, 1201 Genève" />
      <InformationView text="Postal Code " value="1207" />
      <InformationView text="Email" value="KristenShnider@gmail.com" />
      <InformationView text="City" value="+41 22 346 63 23" />
      <InformationView text="Country" value="17 / 05 / 1973" />
      <InformationView text="Beneficiary " value="Geneva" />
      <InformationView text="Account Denomination " value="German" />
      <InformationView text="Account number " value="94936R030" />
      <InformationView text="IBAN " value="Trader" />
      <InformationView text="SWIFT" value="Finance" />

      </View>
  )
  const cancel = () => {
    setModalVisible(false);
    console.log('cancel');
    setbg('white');
  };
  const hundelToPlatform = () => {
    setModalVisibleSuccess(false);
    setbg('white');
  };
  const updateRequest = () => {
    setModalVisible(false);
    setModalVisibleSuccess(true);
    console.log('submit');
  };

  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      <TopHeader />
      <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={{left: '80%'}}>
            <TouchableOpacity onPress={cancel}>
              <Text style={{color: '#111', fontSize: 20, marginTop: '2%'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{padding: 16}}>
              <Text style={styles.title}>Request Update</Text>
              <Text style={styles.textDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
              </Text>
              <Text style={styles.req}>Describe your request</Text>
              <TextInput
                editable
                multiline
                numberOfLines={15}
                maxLength={400}
                placeholder="Please, describe what you want to change"
                style={{padding: 10, borderWidth: 1, borderRadius: 10}}
              />
              <TouchableOpacity
                style={styles.appButtonContainer2}
                onPress={updateRequest}>
                <Text style={styles.appButtonText2}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSuccess}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={{padding: 16}}>
              <View style={{alignItems: 'center'}}>
                <Image source={okIcon} />
                <Text style={styles.title}>Success</Text>
                <Text
                  style={{
                    color: '#111',
                    fontSize: 16,
                    fontWeight: '200',
                    textAlign: 'center',
                    margin: 15,
                  }}>
                  Great! Your request was successfully sent. We will check it
                  soon.
                </Text>
              </View>
              <TouchableOpacity
                style={styles.appButtonContainer2}
                onPress={hundelToPlatform}>
                <Text style={styles.appButtonText2}>Go to the platform</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: '10%',
          backgroundColor: '#FDFDFD',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            console.log('press');
            setbg('#F5F4F4');
          }}
          style={[
            styles.appButtonContainer,
            {
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
            },
          ]}>
          <Gradient
            text="Request Update"
            colors={['#3345E4', '#A133E4']}
            style={{fontWeight: '300'}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Account Profile</Text>
      {/* <ScrollView> */}
        <ScrollView horizontal={true} style={{width: '100%', height: '10%'}}>
          <GradientButton text="My Profile" />
          <GradientButton text="My Companies" />
          <GradientButton text="Terms & Conditions" />
        </ScrollView>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#3345E4', '#A133E4']}
          style={{borderRadius: 6, margin: 10, height: 56}}>
          <View
            style={{
              backgroundColor: '#FAFAFA',
              height: '96%',
              margin: 1,
              borderRadius: 4,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{left: 10, color: '#111', fontWeight: '400'}}>
              Pledged Amount
            </Text>
            <Text
              style={{
                position: 'absolute',
                right: 10,
                fontWeight: '500',
                color: '#111',
              }}>
              CHF 5000,000
            </Text>
          </View>
        </LinearGradient>
        <DropdownArea titre="PROFILE PICTURE" View={myView} />
        <DropdownArea
          titre="Individual information"
          View={IndividualInformation}
        />
        <DropdownArea
          titre="ID Verification"
          View={IDVerification}
          background="#E8E8E8"
        />
        <DropdownArea
          titre="Banking  Information"
          View={BanckingInformation}
        />
      {/* </ScrollView> */}
      {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={Deals} />
      <Tab.Screen name="Settings" component={Deals} />
    </Tab.Navigator> */}
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appButtonContainer: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.5,
  },
  icon: {
    margin: 10,
  },
  appButtonText: {
    fontSize: 16,
  },
  modalView: {
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  title: {
    color: '#111',
    fontWeight: '500',
    fontSize: 32,
    marginTop: '10%',
    marginLeft: 10,
  },
  textDescription: {
    color: '#111',
    fontSize: 16,
    fontWeight: '200',
    marginTop: '5%',
    lineHeight: 19,
  },
  req: {
    color: '#111',
    marginTop: '4%',
    marginLeft: 15,
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: '#111111',
    borderRadius: 10,
    padding: 10,
    height: 60,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButtonText2: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  profilepicture: {
    // borderWidth: 1,
    margin: 10,
  },
  dropdownSelector: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  dropdownArea: {
    width: '90%',
    borderRadius: 10,
    marginTop: 0,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});
export default Profile;
