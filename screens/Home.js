import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import ListaExperimentos from '../componentes/compListExperi/ListaExperimentos';
import { ConsultasServidor } from '../App/Consultas/ConsultasServidor';
const Home = ({ navigation}) => {    
    const [Experimentos, setExperimentos] = useState([])
    useEffect(() => {
        const fetchExperimento= async ()=>{
            const experimentosData=await ConsultasServidor();
            console.log(experimentosData)
            setExperimentos(experimentosData)
        }
        fetchExperimento()
        console.log(Experimentos)
    }, []);

    return (
        <View style={styles.contenedor}>
            <ListaExperimentos 
            experi={Experimentos}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default Home;
