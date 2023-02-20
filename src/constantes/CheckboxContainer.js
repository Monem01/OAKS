import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const CheckboxContainer = (props) => {
  const [isSelected, setSelection] = useState(true);

  return (
    <View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={()=>setSelection(!isSelected)}
                      style={styles.checkbox}
                      tintColors={{ true: 'black', false: 'black' }}                      onCheckColor={'black'} // Change the color of the checked checkbox
                    />
                    <Text style={{color:"#111"}}>{props.text}</Text>
                    
                </View>
      </View>
                    );
};

const styles = StyleSheet.create({
  
  checkboxContainer:{
    flexDirection:"row",
    alignItems:"center",
  },
  checkbox:{
    color:"#111"
  },
  modalView: {
    borderWidth:5,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:"90%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 50,
    marginTop:10,
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
});

export default CheckboxContainer;