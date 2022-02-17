import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import ListaGastoEnergetico from '../componentes/CalcuGasEnegetico/ListaGastoEnergetico';
import { ConsultasServidor } from '../App/Consultas/ConsultasServidor';
import Carga from '../componentes/PantallaCarga/Carga'
const Save = ({ navigation }) => {
    const [Experimentos, setExperimentos] = useState([])
    const [Visible, setVisible] = useState(true)
    useEffect(() => {
        const fetchExperimento = async () => {
            var dataserver = []
            try {
                const experimentosData = await ConsultasServidor();
                console.log(experimentosData)
                dataserver = experimentosData
            } catch (error) {
                console.log("sin datos recuperados")
            }
            setExperimentos(dataserver)
            setVisible(false)
        }
        fetchExperimento()
        console.log(navigation)
    }, []);
    return (
        <View style={styles.contenedor}>
            <ListaGastoEnergetico
                experi={Experimentos}
            />
            {Visible && (<Carga />)}
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

export default Save;
