import React, { useEffect, useState } from 'react'
import globalStyles from '../../App/Styles/GlobalStyles'
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'
import CamposFormulario from './CamposFormulario'
import { GetVectorDeMagnitud } from '../../App/Consultas/ConsultasServidor'
const FormularioGastoenergetico = ({ setbanderaFormulario, Experimento }) => {
  const [OcultarFormulario, setOcultarFormulario] = useState(true)
  const [vectorMagnitud, setvectorMagnitud] = useState()
  const [DatosUsuario, setDatosUsuario] = useState({
    cortedown: '',
    corteup: '',
    Pesoindividuo: '',
    Altura: '',
    sexo: '',
    epocas: 10,
    entidad: Experimento
  });
  const theme = {
    ...globalStyles.theme
  }

  useEffect(() => {
    const fetchExperimento = async () => {
      try {
        if (DatosUsuario.cortedown) {
          const vector = await GetVectorDeMagnitud(JSON.stringify(DatosUsuario))
          setvectorMagnitud(vector)
        }

      } catch (error) {
        console.log("sin datos recuperados")
      }
    }
    fetchExperimento()
  }, [DatosUsuario.cortedown])

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
        <View>{(console.log("data in real", vectorMagnitud))}</View>
      }

    </View>

  )
}
const styles = StyleSheet.create({
})

export default FormularioGastoenergetico