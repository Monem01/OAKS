import React from "react";
import { Text ,View,ImageBackground,StyleSheet,TouchableOpacity,TextInput, Image} from "react-native";
import bg from '../../../assets/bg.png'
import MainLogo from '../../../assets/Oaks-Capital-Main-logo-light.png';
import Colors from "../../contants/Colors";
import LogoImg from '../../../assets/Oaks-Capital-Symbol-ligh.png';
const stylePress=StyleSheet.create({})
const hundelpress=()=>{
  
}
const Double_authentication=()=>{
    return(
      <View style={styles.container}>
                <View style={styles.firstView}>
                    <Image source={LogoImg} style={styles.logo}/>
                    <Image source={MainLogo} style={styles.MainLogo}/>
                </View>
                <View style={styles.secondView}>
                <Text style={styles.Text}>Double authentication</Text>
                <View style={{margin:16}}>
                <Text style={styles.text}>We've sent a 4-digit code to your email address.</Text>
                <Text style={styles.text}>Please enter the code into the below field.</Text>
                </View>
                <View style={styles.expireIn}>
                    <Text style={{fontSize:16,color:Colors.black}}>code expires in </Text>
                    <Text style={{fontWeight:'bold',fontSize:16,color:Colors.black}}>54 </Text>
                    <Text style={{fontSize:16,color:Colors.black}}>seconds</Text>
                </View>
                <View style={styles.InputGroup}>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1} onPressIn={hundelpress}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                    <TextInput style={styles.input} keyboardType="number-pad" maxLength={1}/>
                </View>
                <TouchableOpacity  style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Submit</Text>
                </TouchableOpacity>
                <Text style={{color:Colors.black,fontSize:14,textAlign:'center'}}>Didn’t receive your code?</Text>
                <Text style={{color:"#5729e9",textAlign:'center',textDecorationLine: 'underline',}}>Generate new code</Text>
                </View>
        </View>
        );
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    secondView:{
      height:'60%',
      width:'100%',
      backgroundColor:'white',
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      // alignItems:'center',
  },
  firstView:{
    height:'40%',
    width:'100%',
    alignItems:'center',
    backgroundColor:'red',
},
    image:{
        flex:1,
        justifyContent:'center'
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 13,
        alignSelf:'center',
        color:'#575655'
      },
      bottomView:{
        flex:1,
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        // ---botom
        position: 'absolute', 
        bottom: 0, 
        // --bottom
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28
      },
      
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#111111",
        borderRadius:10,
        padding:10,
        height:60,
        margin:12,
        justifyContent:'center',
        alignItems:'center'
      },
      appButtonText: {
        color: Colors.white,
        fontFamily: 'Inter',
        fontSize: 16,
      },
      Text:{
        fontSize:32,
        top:10,
        color:'#111111',
        alignSelf:'center',
        fontFamily: 'Inter'

        
      },
      MainLogo:{
        width:'100%',
        height:'10%',
        alignItems:'center',
      },
      expireIn:{
        flexDirection:'row',
        justifyContent:'center',
      },
      input:{
        borderWidth:1,
        margin:12,
        borderRadius:8,
        padding:10,
        height:60,
        borderColor:'#5729e9',
        color:'black',
        width:'10%',
      },
      InputGroup:{
        flexDirection:'row',
        justifyContent:'center',

      },
      logo:{
        width:'20%',
        height:'10%',
        alignItems:'center',
        marginTop:'10%'
      },
      LogoGroup:{
        flex:1,
        alignItems:'center',
        
      }

}   )
export default Double_authentication;