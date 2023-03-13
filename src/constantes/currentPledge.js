import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

const CurrentPladge = (props) => {
  return (
    <View style={styles.currentPledge}>
      <Text
        style={[
          styles.valuemargin,
          {color: '#111', fontSize: 16, fontWeight: '400'},
        ]}>
        Your current Pledge: CHF {props.min}
      </Text>
    </View>
  );
};
const styles=StyleSheet.create({
    appButtonContainer:{        
        height:38,
        justifyContent:"center",
        width:119,
        alignItems:"center"

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
});
export default CurrentPladge;
