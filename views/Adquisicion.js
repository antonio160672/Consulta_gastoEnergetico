import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Adquisicion =({navigation, route})=> {
    //const {clienteId,total}=route.params

   
    const goHome=()=>{
        navigation.goBack()
    }
    
    return (
      <View style={styles.contenedor}>
        <Text> Adquisicion </Text>
        <Button
            title='Volver'
            onPress={()=>goHome()}
        />
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
export default Adquisicion;