import React, {useState} from 'react';
import MyButton from './MyButton';
import {StyleSheet, View, Text,TextInput} from 'react-native';
import {color} from 'react-native-reanimated';
// import CurrentPladge from './currentPladge';
import CurrentPladge from './currentPledge';
const IncreaseMyPledge = props => {
  const [min, setmin] = useState(25000);
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Text style={styles.testTitle}>Increase Pledge</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat
          mauris nunc congue nisi vitae suscipit tellus mauris.
        </Text>
        <CurrentPladge min={min}/>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Put the Extra Pledge Amount CHF"
            keyboardType="numeric"
            placeholderTextColor="grey"
          />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  testTitle: {
    color: '#111',
    fontSize: 32,
  },
  text: {
    marginTop: 5,
    color: '#111',
    fontSize: 16.5,
  },
  currentPledge: {
    justifyContent: 'center',
    alignItems:"center",
    marginTop: 15,
    backgroundColor: '#E8E8E8',
    borderRadius:10,
  },
  valuemargin: {
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    height: 50,
    width:"100%",
    marginTop: 12,
    borderWidth: 0.5,
    borderRadius:10,
    color:"#111",
    // backgroundColor:"red"
  },
});
export default IncreaseMyPledge;
