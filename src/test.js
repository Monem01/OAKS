import React from "react";
import {Stylesheet,Text,View,FlatList,PanResponder} from "react-native";
import Animated from "react-native-reanimated";
function getRandomColor(){
  var letters='0123456789ABCDEF';
  var color="#";
  for(var i=0;i<6;i++){
    color +=letters[Math.floor(Math.random()*16)];
  }
  return color;
}
const colorMap={}
export default class Test extends React.Component{
  state={
    data:Array.from(Array(200),(_,i)=>{
      colorMap[i]=getRandomColor();
      return i
    })
  };
  constructor(props){
    super(props);
      
    _panResponder= PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) =>
          true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
          true,
  
        onPanResponderGrant: (evt, gestureState) => {
          // The gesture has started. Show visual feedback so the user knows
          // what is happening!
          // gestureState.d{x,y} will be set to zero now
        },
        onPanResponderMove: (evt, gestureState) => {
          console.log(gestureState);
          // The most recent move distance is gestureState.move{X,Y}
          // The accumulated gesture distance since becoming responder is
          // gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: (evt, gestureState) =>
          false,
        onPanResponderRelease: (evt, gestureState) => {
          // The user has released all touches while this view is the
          // responder. This typically means a gesture has succeeded
        },
        onPanResponderTerminate: (evt, gestureState) => {
          // Another component has become the responder, so this gesture
          // should be cancelled
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
          // Returns whether this component should block native components from becoming the JS
          // responder. Returns true by default. Is currently only supported on android.
          return true;
        },
      })
    
  }
  render(){
    const {data}=this.state;
    return(
      <View style={{flex:1}}>
        <Animated.View>
          <Test>Hello</Test>
        </Animated.View>
        <FlatList  
          style={{width:"100%"}}
          data={data}
          renderItem={({item})=>
          <View style={{backgroundColor:colorMap[item]}} {
            ...this._panResponder
          }>
            
            <Text style={{fontSize:25}}>{item}</Text>
            </View>
        }
          keyExtractor={item=>""+item}
        />
      </View>
    )
  }
}