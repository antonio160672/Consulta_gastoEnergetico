import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Overlay } from 'react-native-elements'
import ComponenteDatosGastoEner from './ComponenteDatosGastoEner'
import Carga from '../PantallaCarga/Carga'
import globalStyles from '../../App/Styles/GlobalStyles'
import FormularioGastoenergetico from '../FormularioGastoenergetico/FormularioGastoenergetico'

export default Modal = ({ isVisible, setVisible,
    DispositivoData, FechasData, Experimento, Cargavisible }) => {
    const [banderaFormulario, setbanderaFormulario] = useState(true)
    const handleClick = () => {
        console.log('Button clicked!', banderaFormulario);
        banderaFormulario ? setbanderaFormulario(false) : setbanderaFormulario(true)
    }
    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={styles.overlay}
            onBackdropPress={() => setVisible(false)}
        >
            <View>
                {banderaFormulario && (
                    <View style={styles.container}>
                        <Text style={styles.Actividad} >Datos del experimento</Text>
                    </View>
                )}

                {!Cargavisible && (
                    banderaFormulario ? (
                        <ComponenteDatosGastoEner
                            DispositivoData={DispositivoData}
                            FechasData={FechasData}
                            Experimento={Experimento}
                            Clickbuton={handleClick}
                        />
                    ) : (
                        <FormularioGastoenergetico
                            setbanderaFormulario={setbanderaFormulario}
                            Experimento={Experimento}
                        />
                    )
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
