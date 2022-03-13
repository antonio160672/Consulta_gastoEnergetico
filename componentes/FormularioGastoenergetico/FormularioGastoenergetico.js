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
import Formulas from '../FormulasGasto/Formulas'
import Carga from '../PantallaCarga/Carga'
const FormularioGastoenergetico = ({ setbanderaFormulario, Experimento }) => {
  const [OcultarFormulario, setOcultarFormulario] = useState(true)
  const [MostrarFormulas, setMostrarFormulas] = useState(true)
  const [vectorMagnitud, setvectorMagnitud] = useState()
  const [DatosUsuario, setDatosUsuario] = useState({
    cortedown: '',
    corteup: '',
    Pesoindividuo: '',
    Altura: '',
    sexo: '',
    epocas: 10,
    IMC: 0, 
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
          OcultarFormulario ? setMostrarFormulas(false) : setMostrarFormulas(true)
        }

      } catch (error) {
        console.log("sin datos recuperados")
      }
    }
    fetchExperimento()
  }, [DatosUsuario.cortedown])

  const Asignardatos = (usuario, sexo) => {
    setDatosUsuario(prevConnections => ({
      ...prevConnections,
      cortedown: usuario.Frecuenciainferiror,
      corteup: usuario.Frecuenciasuperior,
      Pesoindividuo: usuario.Pesoindividuo,
      Altura: usuario.Altura,
      IMC:(usuario.Pesoindividuo/(usuario.Altura*usuario.Altura)),
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
      {!OcultarFormulario && (MostrarFormulas ?
        (<Carga />) : (
          <Formulas
            vectorMagnitud={vectorMagnitud}
            DatosUsuario={DatosUsuario}
          />
        )
      )
      }

    </View>

  )
}
const styles = StyleSheet.create({
})

export default FormularioGastoenergetico