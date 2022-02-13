import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home =({navigation})=> {
    const informascion={
        clienteId:20,
        total:500
    }
    const goDispos=()=>{
        navigation.navigate('Adquisicion')
    }
    
    return (
      <View style={styles.contenedor}>
        <Text> Inicio </Text>
        <Button
            title='Ir a dispositivos'
            onPress={()=>goDispos()}
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

export default Home;
