import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import globalStyles from '../../App/Styles/GlobalStyles';
import Modal from '../Modal/Modal';
import { ExperimentosInformacion } from '../../App/Consultas/ConsultasServidor';
import Carga from '../PantallaCarga/Carga'
import { FormatearFecha } from '../../App/helpers';

const diccionario = {
    carrera: require('../../App/Imagines/actividad_correr.png'),
    informacion: require('../../App/Imagines/informacion.png'),
}

const experimento = ({ Experimento }) => {
    const [Visible, setVisible] = useState(false)
    const [Cargavisible, setCargavisible] = useState(true)
    const [DispMac, setDataExperiemnto] = useState()
    const [FechasData, setFechasData] = useState()

    const Consultaservidor = () => {
        setVisible(true)
        const fetchExperimento = async () => {
            try {
                const experimentosData = await ExperimentosInformacion(Experimento);
                const disp = JSON.parse(experimentosData.dispositivos)
                const fecha = JSON.parse(experimentosData.fechas)

                Object.keys(disp).map(function (key) {
                    setDataExperiemnto(DispMac => ({ ...DispMac, [key]: disp[key] }))
                })
                Object.keys(fecha).map(function (key) {
                    setFechasData(FechasData => ({ ...FechasData, [key]: fecha[key] }))
                })
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
                        <View>
                            <Text >Nombre del experimento:  </Text>
                            <Text >         {Experimento} </Text>
                        </View>
                        <View>
                            <Text >Dispositivos utilizados:  </Text>
                            <View>
                                {
                                    Object.keys(DispMac).map((oneKey, x) => {
                                        return (
                                            <View key={x}>
                                                <Text key={x}>{oneKey}:
                                                    {
                                                        Object.keys(DispMac[oneKey]).map((iden, i) => {
                                                            if (DispMac[oneKey][iden]) {
                                                                return (
                                                                    <Text key={DispMac[oneKey][iden]}>
                                                                        {DispMac[oneKey][i]}
                                                                    </Text>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </Text>

                                            </View>
                                        )
                                    })
                                }
                            </View>

                        </View>
                        <View>
                            <Text >Fecha del experimento:  </Text>
                            <View>
                                {
                                    Object.keys(FechasData).map((oneKey, x) => {
                                        return (
                                            <View key={x}>
                                                <Text key={x}>Fecha {oneKey}:
                                                    {
                                                        Object.keys(FechasData[oneKey]).map((iden, i) => {
                                                            if (FechasData[oneKey][iden]) {
                                                                return (
                                                                    <Text key={FechasData[oneKey][iden]}>
                                                                        {FormatearFecha(FechasData[oneKey][i])}
                                                                    </Text>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>

                        </View>
                        <Button title="Calcular gasto energetico" />
                        <Button title="Eliminar Experimento" />
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
