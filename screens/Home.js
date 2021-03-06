import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import ListaExperimentos from '../componentes/compListExperi/ListaExperimentos';
import { ConsultasServidor } from '../App/Consultas/ConsultasServidor';
import Carga from '../componentes/PantallaCarga/Carga'
const Home = ({ navigation}) => {    
    const [Experimentos, setExperimentos] = useState([])
    const [Visible, setVisible] = useState(true)
    useEffect(() => {
        const fetchExperimento= async ()=>{
            var dataserver=[]
            try {
                const experimentosData=await ConsultasServidor();
                console.log(experimentosData)
                dataserver=experimentosData
            } catch (error) {
                console.log("sin datos recuperados")
            }
            setExperimentos(dataserver)
            setVisible(false)
            
        }
        fetchExperimento()
    }, []);

    return (
        <View style={styles.contenedor}>
            <ListaExperimentos 
            experi={Experimentos}
            />
            {Visible&&(<Carga/>)}         
            
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
