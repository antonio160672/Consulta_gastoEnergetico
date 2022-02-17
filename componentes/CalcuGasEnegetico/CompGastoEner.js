import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import globalStyles from '../../App/Styles/GlobalStyles';
import Modal from '../Modal/Modal';
import { ExperimentosInformacion } from '../../App/Consultas/ConsultasServidor';
import Carga from '../PantallaCarga/Carga'

const diccionario = {
    carrera: require('../../App/Imagines/actividad_correr.png'),
    informacion: require('../../App/Imagines/informacion.png'),
}

const experimento = ({ Experimento }) => {
    const [Visible, setVisible] = useState(false)
    const [Cargavisible, setCargavisible] = useState(true)
    const [DispMac, setDataExperiemnto] = useState([])
    const [FechasData, setFechasData] = useState([])

    const Consultaservidor = () => {
        setVisible(true)
        const fetchExperimento = async () => {
            var dataserver = {}
            try {
                const experimentosData = await ExperimentosInformacion(Experimento);
                dataserver = experimentosData
                console.log(typeof(dataserver.dispositivos))
                dataserver.dispositivos.forEach(data =>setDataExperiemnto(DispMac => [...DispMac, data]) );
                dataserver.fechas.forEach(Date => setFechasData(FechasData => [...FechasData, Date]));   
            } catch (error) {
                console.log("sin datos recuperados")
            }
            setCargavisible(false)
        }
        fetchExperimento()
    }
    return (
        <View
            style={styles.contendor}
        >
            <View style={styles.contenido}>
                <View style={styles.contendorImagen}>
                    <Image
                        style={styles.imagenDerecha}
                        source={diccionario.carrera}
                    />

                </View>
                <TouchableOpacity>
                    <View
                        style={styles.contendorTexto}
                    >
                        <Text style={styles.Actividad}>{Experimento} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Consultaservidor}>
                    <Image
                        style={styles.imagenIzquierda}
                        source={diccionario.informacion}
                    />
                </TouchableOpacity>
            </View>

            <Modal isVisible={Visible} setVisible={setVisible}>

                {!Cargavisible && (
                    <View>
                        <Text>I am the modal content!</Text>
                        <Text>{"\n",DispMac}</Text>
                        <Text>{"\n",FechasData}</Text>
                        <Button title="Click To Close Modal" />
                    </View>
                )}
                {Cargavisible && (<Carga />)}
            </Modal>

        </View>
    )

};
const styles = StyleSheet.create({
    contendor: {
        ...globalStyles.contenedor,
        marginBottom: 10,
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contendorImagen: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    imagenDerecha: {
        width: 40,
        height: 40,

    },
    imagenIzquierda: {
        width: 40,
        height: 40,
        marginLeft: 10
    },
    contendorTexto: {
        alignContent: 'center'
    },
    Actividad: {
        fontSize: 15,
        color: '#64748B',
        marginBottom: 5,
        textAlign: 'justify'
    },

})
export default experimento;
