import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Image,ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Customize from "../../../assets/icon/Customize.png";
import CheckboxContainer from '../../constantes/CheckboxContainer';
import MyButton from '../../constantes/MyButton';
import ok from "../../assets/icon/ok.png";
const PopUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [bg,setbg]=useState("white");
  const hundelClick=()=>{
    setModalVisible(true)
    if(bg=="white"){
      setbg("#F5F5F5");
    }
    else setbg("white")
  }
  const cancel=()=>{
    setModalVisible(!modalVisible)
    if(bg=="white"){
      setbg("#F5F5F5");
    }
    else {setbg("white")
  }
  }
  return (
    <View style={[styles.container,{backgroundColor:bg}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
                <View style={styles.modalView}>                 
                
                  <View style={{alignItems:"center",justifyContent:"center",marginTop:"20%",}}>
                    <Text style={{fontSize:20,fontWeight:"500",color:"#111",textAlign:"center"}}>Great</Text>
                  </View>
                  
                  <Image source={ok} />
                  <ScrollView>
                  </ScrollView >
                  
                </View>
                
         
      </Modal>

      <View style={{justifyContent:"center",alignItems:"center", marginTop:"50%"}}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={hundelClick}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
  },
  checkboxContainer:{
    flexDirection:"row",
    alignItems:"center",
  },
  checkbox:{
  },
  modalView: {
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:"90%",
    flex:1,
    backgroundColor:"white"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 50,
    marginTop:10,
    backgroundColor:""
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
  borderConatainer:{
    borderWidth:1,
    borderColor:"#E8E8E8",
     margin:10, 
     borderRadius:10,
     padding:10,
    },
    icon:{
      position:"absolute",
      right:"10%",
      alignItems:"center"
    }
});

export default PopUp;