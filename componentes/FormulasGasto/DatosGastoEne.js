import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import globalStyles from '../../App/Styles/GlobalStyles'

const DatosGastoEne = ({ FormulaEE }) => {
  return (
    <View style={styles.ContenedorDispositivos}>
      <View>
        <Text style={styles.Titulos}>Gasto energético de las posiciones</Text>
        <Text style={styles.Actividad}>EE de la mano:
          <Text>{FormulaEE.mano == 0 || FormulaEE.mano === undefined ? 0 : FormulaEE.mano.toFixed(2)} Cal.</Text>
        </Text>
        <Text style={styles.Actividad}>EE de la cintura:
          <Text>{FormulaEE.cintura == 0 || FormulaEE.cintura === undefined ? 0 : FormulaEE.cintura.toFixed(2)} Cal.</Text>
        </Text>
        <Text style={styles.Actividad}>EE de la pierna:
          <Text>{FormulaEE.pierna == 0 || FormulaEE.pierna === undefined ? 0 : FormulaEE.pierna.toFixed(2)} Cal.</Text>
        </Text>
        <Text style={styles.Actividad}>EE del promedio:
          <Text>{FormulaEE.promedio == 0 || FormulaEE.promedio === undefined ? 0 : FormulaEE.promedio.toFixed(2)} Cal.</Text>
        </Text>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({

  ContenedorDispositivos: {
    ...globalStyles.contenedorParametros,
    marginBottom: 5,
    alignItems: 'center',
    width: '100%',
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
export default DatosGastoEne