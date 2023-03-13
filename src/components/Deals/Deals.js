import React from "react";
import { StyleSheet, View, Image,ScrollView, SafeAreaView ,Text} from "react-native";
import Logo from '../../../assets/Logo.png';
import circleImage from'../../../assets/img.png';
import Iconsort from'../../../assets/icon/Iconsort.png';
import Header from '../header/TopHedaer';
import LinearGradient from "react-native-linear-gradient";
import logolight from'../../../assets/Logo.png';
import wishlist from'../../../assets//icon/favourite.png';
import timeIcon from'../../../assets/icon/VectorDays.png';
import Iconuser from'../../../assets/icon/profile.png';
import Dropdown from'../../../assets/icon/Vector2.png';
import ok from'../../../assets/icon/dropdown.png';
import {useState} from 'react';
import {Alert, Modal, Pressable} from 'react-native';
import image from "../../../assets/Image.png"
const Deals = () =>{
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <><Header />
       <Modal
       animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
       <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={[styles.secondView]}></View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.textView}><Text style={styles.textStyle}>Cancel</Text></View>
              <View style={styles.sortView}><Text style={styles.sortbyStyle}>Sort by:</Text></View>
            <View style={styles.listV}>
            <View style={[styles.listView,{flexDirection: 'row',alignItems: 'center',borderBottomWidth:1, borderBottomColor:'#E8E8E8'}]}><Text style={[styles.listStyle,{color:'#4588CA'},{width:300}]}>Most Popular</Text><Image source={ok} style={[]}/></View>
            <View style={[{borderBottomWidth:1,borderColor:'#E8E8E8',}]}><Text style={styles.listStyle}>Most Newest</Text></View>
            <View style={[{borderBottomWidth:1,borderColor:'#E8E8E8',}]}><Text style={styles.listStyle}>Value of the Expected returns</Text></View>
            <View><Text style={[styles.listStyle,{borderBottomColor:'#FFFFFF'}]}>Value of the Expected returns</Text></View>
            </View>
            </Pressable>
          </View>
        </View>
        </Modal> 
        
    <SafeAreaView >
    <ScrollView >
       <View style={styles.container}>
        <Text style={styles.deals}>Deals</Text>
        <Image source={Iconsort}
              style={styles.sortIcon} />
        <Pressable
        style={[styles.sort, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>sort</Text>
      </Pressable>
       </View>
      
       <ScrollView horizontal={true} style={styles.list}>

       <View>
        <LinearGradient colors={['blue', 'purple']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.item}>

        <Text style={styles.text}>Open for Investment</Text>
        
        </LinearGradient>
        </View>
<View style={styles.textsBorder}><Text style={styles.texts}>Funded opportunities</Text></View>
<View style={styles.textsBorder}><Text style={styles.texts}>Funded opportunities</Text></View>
<View style={styles.textsBorder}><Text style={styles.texts}>Funded opportunities</Text></View>
<View style={styles.textsBorder}><Text style={styles.texts}>Funded opportunities</Text></View>
</ScrollView>

<Image source={image} style={styles.buildingImage}/>
<View style={styles.top}>
    <View style={styles.logo}><Image source={logolight} style={styles.logolightImage}/></View>
    <Text style={styles.text1}>40%</Text>
</View>

<View style={styles.bottomI}>

   <View style={styles.text2}>
    <View style={styles.circle}></View> 
    <Text style={styles.text3}>Open for Investment</Text>
    </View>
    
    <View style={styles.wishlistImage}><Image source={wishlist} style={styles.wishlistImg} /></View>
    
</View>

<View style={styles.parameters}>
<View style={styles.time}>
<Image source={timeIcon} style={styles.timeIcon}/>
<Text style={styles.days}>15 Days Remaining</Text>
</View>

<View style={styles.time2}>
<Image source={Iconuser} style={styles.timeIcon}/>
<Text style={styles.days}>20 Investors Max</Text>
</View>
</View>

<View style={styles.firstRow}>
<Text style={styles.title}>OAKS ONE SA</Text>
</View>

<View style={styles.secondRow}>
<Text style={styles.location}>Collonge-Bellevire, GE</Text>
</View>
<View style={styles.Row}>
<View style={styles.thirdRow}>
<Text style={styles.pourcentage}>Raised: CHF 525'000</Text>
<Text style={styles.total}>Total: CHF 782'000</Text>
</View>

<View style={styles.line}>
<LinearGradient colors={['blue', 'purple','#8DD419']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.line2}>
        </LinearGradient>
</View>
</View>

<View style={styles.info}>
<View style={styles.div1}>
<Text style={styles.t1}>Investment Profile</Text>
<Text style={styles.t2}>Development</Text>
</View>

<View style={styles.div1}>
<Text style={styles.t1}>Development Type</Text>
<Text style={styles.t2}>Appartments</Text>
</View>

<View style={styles.div1}>
<Text style={styles.t1}>Equality Needed</Text>
<Text style={styles.t2}>CHF 782'000</Text>
</View>
</View>

<View style={styles.buttons}>
<View style={styles.button1}>
<Text style={styles.textshow}>Show all info</Text>
<Image source={Dropdown} style={styles.DropdownIcon}/>
</View>

<View style={styles.button2}>
<Text style={styles.textshow2}>Explore more</Text>
</View>
</View>





    </ScrollView>
</SafeAreaView>


</>
    );
}
const styles=StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
      },
    rectangle:{
        flexDirection: 'row', 
        alignItems: 'center',
        height:90,
        
      
        
    },
    deals:{
        alignSelf: 'flex-start',
        margin:'4%',
        top:'12%',
        // width:'14%',
        // height:'47%',
        fontSize:30,
        fontWeight:500,
        color:'black',
    },

sortIcon:{
        alignSelf: 'center',
        //margin:'2%',
        bottom:'15%',
        left:'33%',
        // width:25,
        // height:25,
    },
    sort:{
        backgroundColor:'#F5F5F5',
        alignSelf:"flex-end",
        margin:'4%',
        bottom:'40%',
        fontWeight:400,
        fontSize:15,
        color:'black',
    },
    text:{
        color:"white",
        alignSelf:"center",

    },
    item:{
       height:30,
       width:170,
       margin:10,
       borderRadius:10,
       padding:5,
    
    },
    texts:{
        color:'black',
        alignSelf:"center",

    },
    textsBorder:{
       borderRadius:10,
       borderWidth:1,
       height:30,
       width:150,
       margin:10,
       padding:5,
    },
    list:{
        bottom:60,
    },
    buildingImage:{
    margin:10,
    bottom:50,
    height:300,
    width:340,
    borderRadius:10,
    },
    logolightImage:{
   
    height:25,
    width:80,
    alignSelf: 'center',
    },
    logo:{
    backgroundColor:'white',
    height:80,
    width:80,
    margin:20,
    flexDirection: 'row', 
    alignItems: 'center',
    borderRadius:100,
    bottom:370,
    alignSelf: 'flex-start',
    },
    top:{
    flexDirection: 'column', 
    alignItems: 'center',
    },
    text1:{
    backgroundColor:'white',
    alignSelf: 'flex-end',
    margin:20,
    bottom:480,
    borderRadius:20,
    color:'black',
    height:30,
    width:55,
    padding:5,
    },
    circle:{
    color:'yellow',
    height:3,
    width:5,
    
    
    },
    text2:{
    //backgroundColor:'red',
    bottom:300,
    left:10,
    margin:13,
    alignSelf: 'flex-start',
    },
    bottomI:{
        flexDirection: 'column', 
        alignItems: 'center',
    },
    text3:{
       backgroundColor:'white',
        width:150,
        borderRadius:10,
        color:'black',
        padding:3,   
    },
    wishlistImage:{
    bottom:360,
    margin:15,
    backgroundColor:'white',
    height:30,
    width:30,
    borderRadius:10,
    alignSelf: 'flex-end',
   
    },
    wishlistImg:{
        margin:8
    },
    time:{
        margin:10,
        flexDirection:"row",
        borderColor:"#E8E8E8",
        borderRadius:16,
        width:159,
        height:30,
        bottom:360,
        borderWidth:1
       },
       days:{
        fontSize:14,
        fontWeight:'400',
        color:'black',
        margin:3,
       },
       timeIcon:{
        margin:10,
       },
       time2:{
        margin:10,
        flexDirection:"row",
        borderColor:"#E8E8E8",
        borderRadius:16,
        width:150,
        height:30,
        bottom:410,
        borderWidth:1,
        left:180,
       },
       firstRow:{
        flexDirection:"row", 
        bottom:420,
       },
       title:{
        marginLeft:10,
        marginTop:12,
        fontSize:30,
        fontWeight:'600',
        color:'black',
        
       },
       secondRow:{
        flexDirection:"row", 
        bottom:420,
       },
       location:{
        marginLeft:10,
        marginTop:8,
        fontSize:15,
        color:'black',
        textDecorationLine:"underline",
       },
       pourcentage:{
        marginLeft:10,
        marginTop:8,
        fontSize:17,
        fontWeight:'500',
        color:'black',
       },
       thirdRow:{
        flexDirection:"row", 
        
       },
       total:{
        marginLeft:30,
        marginTop:8,
        fontSize:17,
        fontWeight:'500',
        color:'black',
    
       },
       line2:{
        width:340,
        height:5,
        borderRadius:10,
        marginLeft:10,
        
        
       },
       line:{
        marginTop:5,
        flexDirection:"row", 
       
       },
       Row:{
        bottom:400,
       },
       info:{
        bottom:400,
        flexDirection:"column", 
        borderColor:'#E8E8E8',
        borderWidth:1,
        width:340,
        height:183,
        margin:10,
        padding:15,
        borderRadius:10,
       },
       t1:{
        alignSelf: 'flex-start',
        color:'black',
       },
       t2:{
        alignSelf: 'flex-end',
        bottom:15,
        color:'black',
       },
       div1:{
        borderBottomWidth:1,
        borderColor:'#E8E8E8',
        marginBottom:25,
       },
       buttons:{
        bottom:400,
        flexDirection: 'row', 
       },
       button1:{
        flexDirection: 'column', 
        borderWidth:1,
        height:50,
        width:120,
        borderRadius:10,
        borderColor:'#E8E8E8',
        margin:10,
        alignSelf: 'flex-start',
       },
       button2:{
        borderWidth:1,
        height:50,
        width:120,
        margin:10,
        left:80,
        borderRadius:10,
        backgroundColor:'#111',
        alignSelf: 'flex-end',
       },
       textshow:{
        alignSelf: 'flex-start',
        padding:10,
        color:'black'
       },
       DropdownIcon:{
        alignSelf: 'flex-end',
        right:10,
        bottom:18,
       },
       textshow2:{
        color:'white',
        alignSelf: 'flex-start',
        padding:10,
       },
       secondView:{
        //width:'100%',
        // backgroundColor:'red',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // bottom:0,
        // // //justifyContent:'center',
        // // padding:'5%',
        // // marginTop:'5%',
        // // position:'absolute',
        // height:'70%',
        
    },
    modalView: {
        //margin: 20,
        backgroundColor: 'white',
        //borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        bottom:0,
        width:'100%',
        height:'45%',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        bottom:-200,
      },
      textStyle: {
        fontWeight: 'bold',
        color:"#111",
        
      },
      textView:{
        //justifyContent: 'center',
        //flexDirection: 'column', 
        //alignItems: 'center',
        left:'95%',
        bottom:20,
        //textAlign: 'center',
        //alignSelf: 'flex-end',
       
      
      },
      sortView:{
       //left:'-5%',
       //margin:10,
      },
      sortbyStyle:{
        fontWeight: '600',
        fontSize:30,
        color:'black'
      },
      listV:{
        //right:'10%',
       margin:10,
       width:'350%'
      },
      listStyle:{
        fontSize:17,
        color:'black',
        // marginBottom:20,
        // marginLeft:'15%',
        
        padding:13,
        right:15,
        
      },
      lineV:{
        // backgroundColor:'red',
        // height:1,
        // width:300,
      }
    
})
export default Deals;