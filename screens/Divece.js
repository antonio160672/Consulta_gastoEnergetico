import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Divece =({navigation, route})=> {
    return (
      <View style={styles.contenedor}>
        <Text> Adquisicion </Text>
      </View>
    );
}
const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
})
export default Divece;