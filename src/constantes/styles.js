import { StyleSheet } from 'react-native';

const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    backgroundColor: "#111111",
    borderRadius:10,
    padding:10,
    height:60,
    marginTop:15,
    // margin:12,
    justifyContent:'center',
    alignItems:'center',
    // width:"100%"
  },
  appButtonContainerwhite: {
    // elevation: 8,
    backgroundColor: "white",
    borderRadius:10,
    padding:10,
    height:60,
    marginTop:25,
    // margin:12,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:"#F0F0F0",
  },
  appButtonText: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  appButtonTextWhite: {
    color: '#111',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  modalView: {
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    elevation:8,
  },
  title:{
    fontSize: 32,
    fontWeight: "500",
    letterSpacing: -0.04,
    color:"#111",
    marginTop:55,
},
});

export default Mystyles;
