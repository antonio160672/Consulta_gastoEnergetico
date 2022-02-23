import React, { useEffect, useState } from 'react'
import globalStyles from '../../App/Styles/GlobalStyles'
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'
import CamposFormulario from './CamposFormulario'
const FormularioGastoenergetico = ({ setbanderaFormulario, Experimento }) => {
  const [OcultarFormulario, setOcultarFormulario] = useState(true)
  const [DatosUsuario, setDatosUsuario] = useState({
    cortedown: '',
    corteup: '',
    Pesoindividuo: '',
    Altura: '',
    sexo: '',
    epocas: 10,
    Experimento: Experimento
  });
  const theme = {
    ...globalStyles.theme
  }
  const Asignardatos = (usuario, sexo) => {
    console.log("principal", (usuario))
    setDatosUsuario(prevConnections => ({
      ...prevConnections,
      cortedown: usuario.Frecuenciainferiror,
      corteup: usuario.Frecuenciasuperior,
      Pesoindividuo: usuario.Pesoindividuo,
      Altura: usuario.Altura,
      sexo: sexo
    }))
    OcultarFormulario ? setOcultarFormulario(false) : setOcultarFormulario(true)

  }

  // Mensajes de Validación del Formulario 
  return (
    <View>
      {OcultarFormulario &&
        <CamposFormulario
          setbanderaFormulario={setbanderaFormulario}
          Asignardatos={Asignardatos}
        ></CamposFormulario>
      }
      {!OcultarFormulario &&
        <View>{console.log(DatosUsuario)}</View>
      }

    </View>

  )
}
const styles = StyleSheet.create({
})

export default FormularioGastoenergetico