import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Save =({navigation})=> {
    
    return (
      <View style={styles.contenedor}>
        <Text> Guardar </Text>
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

export default Save;
