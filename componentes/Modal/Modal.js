import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Overlay } from 'react-native-elements'
import ComponenteDatosGastoEner from './modalGastoenergetico/ComponenteDatosGastoEner'
import Carga from '../PantallaCarga/Carga'
import globalStyles from '../../App/Styles/GlobalStyles'
import FormularioGastoenergetico from './modalGastoenergetico/FormularioGastoenergetico'

export default Modal = ({ isVisible, setVisible,
    DispositivoData, FechasData, Experimento, Cargavisible }) => {
    const [banderaFormulario, setbanderaFormulario] = useState(true)
    const handleClick = () => {
        console.log('Button clicked!');
        setbanderaFormulario(false)
    }
    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={styles.overlay}
            onBackdropPress={() => setVisible(false)}
        >
            <View>
                <View style={styles.container}>
                    <Text style={styles.Actividad} >Datos del experimento</Text>
                </View>
                {!Cargavisible && (
                    banderaFormulario ? (
                        <ComponenteDatosGastoEner
                            DispositivoData={DispositivoData}
                            FechasData={FechasData}
                            Experimento={Experimento}
                            Clickbuton={handleClick}
                        />
                    ) : (<FormularioGastoenergetico />)
                )}
                {Cargavisible && (<Carga />)}
            </View>



        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        width: "90%",
    },
    Actividad: {
        ...globalStyles.Actividad,
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: "space-around"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
})
