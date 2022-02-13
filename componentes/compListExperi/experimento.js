import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import globalStyles from '../../App/Styles/GlobalStyles';

const diccionario = {
    carrera: require('../../App/Imagines/actividad_correr.png'),
    informacion: require('../../App/Imagines/informacion.png'),
}

const experimento = ({ Experimento }) => {
    return (
        <View style={styles.contendor}>
            <View style={styles.contenido}>
                <View style={styles.contendorImagen}>
                    <Image
                        style={styles.imagenDerecha}
                        source={diccionario.carrera}
                    />

                </View>
                <View style={styles.contendorTexto}>
                    <Text style={styles.Actividad}>{Experimento} </Text>
                </View>
                <Image
                    style={styles.imagenIzquierda}
                    source={diccionario.informacion}
                />
            </View>
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
        marginLeft:10
    },
    contendorTexto: {
        alignContent:'center'
    },
    Actividad: {
        fontSize:15,
        color:'#64748B',
        marginBottom:5,
        textAlign:'justify'


    },

})
export default experimento;
