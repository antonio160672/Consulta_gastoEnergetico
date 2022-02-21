import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'
import globalStyles from '../../../App/Styles/GlobalStyles'
import React from 'react'
import { FormatearFecha } from '../../../App/helpers'

const ComponenteDatosGastoEner = ({ DispositivoData, FechasData, Experimento, Clickbuton}) => {
    return (
        <View >
            {
                console.log("Datamoda",DispositivoData)
            }
            <View style={styles.ContenedorExperiemnto}>
                <Text style={styles.Titulos} >Nombre del experimento:</Text>
                <Text style={styles.Actividad}> {Experimento} </Text>
            </View >
            <View style={styles.ContenedorDispositivos}>
                <View>
                    <Text style={styles.Titulos}>Dispositivos utilizados:</Text>
                    {
                        Object.keys(DispositivoData).map((oneKey, x) => {
                            return (
                                <View key={x}>
                                    <Text style={styles.Actividad} key={x}>{oneKey}:
                                        {
                                            Object.keys(DispositivoData[oneKey]).map((iden, i) => {
                                                if (DispositivoData[oneKey][iden]) {
                                                    return (
                                                        <Text key={DispositivoData[oneKey][iden]}>
                                                            {DispositivoData[oneKey][i]}
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
            <View style={styles.contendorFecha}>
                <Text style={styles.Titulos}>Fecha del experimento:  </Text>
                <View>
                    {
                        Object.keys(FechasData).map((oneKey, x) => {
                            return (
                                <View key={x}>
                                    <Text style={styles.Actividad} key={x}>Fecha {oneKey}:
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
            <SafeAreaView style={styles.container}>
                <View style={styles.Contenedorbutton}>
                    <Button
                        color={"#2196F3"}
                        marginVertial={10}
                        borderRadius={20}
                        textStyle={{ color: "#FFFFFF", fontSize: 20 }}
                        title="Gasto energetico"
                        onPress={Clickbuton}
                    />
                </View>
                <View style={styles.Contenedorbutton}>
                    <Button
                        color={"red"}
                        marginVertial={10}
                        textStyle={{ color: "#FFFFFF", fontSize: 20 }}
                        title="Eliminar Experimento"
                    />
                </View>
            </SafeAreaView>

            <Button
                color={"#5DADE2"}
                marginVertial={10}
                textStyle={{ color: "#FFFFFF", fontSize: 20 }}
                title="Guardar VM y Recuentos"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    ContenedorExperiemnto: {
        ...globalStyles.contenedorParametros,
        marginBottom: 5,
        alignItems: 'center',
    },
    ContenedorDispositivos: {
        ...globalStyles.contenedorParametros,
        marginBottom: 5,
        alignItems: 'center',
    },
    contendorFecha: {
        ...globalStyles.contenedorParametros,
        marginBottom: 5,
        alignItems: 'center',
    },
    Actividad: {
        ...globalStyles.Actividad,
    },
    Titulos: {
        fontWeight: 'bold',
        ...globalStyles.Actividad,
    },
    Contenedorbutton: {
        width: '45%',
        height: 60,
        borderRadius: 5,
    },
    container: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },


})
export default ComponenteDatosGastoEner