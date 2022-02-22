import React, { useEffect, useState } from 'react'
import globalStyles from '../../../App/Styles/GlobalStyles'
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView
} from 'react-native'
import {
  DefaultTheme,
  Provider as Providerpaper,
  TextInput as TextInputpaper,
  HelperText,
  RadioButton,
  Button as ButtonPaper,
  Text as Textpaper
} from 'react-native-paper';

import { Formik } from 'formik'
import * as yup from 'yup'

const FormularioGastoenergetico = ({ setbanderaFormulario }) => {
  const [sexoIndi, setsexoIndi] = React.useState(true);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
      text: 'black',
      primary: '#1774f2',
      underlineColor: 'transparent',
    }
  }

  // Mensajes de Validación del Formulario 
  const loginValidationSchema = yup.object().shape({

    Frecuenciainferiror: yup
      .string()
      .matches(/[0-9](\.[0-9])/, "Solo se permiten numeros flotantes")
      .min(3, 'Minimo 3 cifras')
      .max(5, 'Maximo 5 cifras significativas.')
      .required("*Campo requerido"),

    Frecuenciasuperior: yup
      .string()
      .matches(/[0-9](\.[0-9])/, "Solo se permiten numeros flotantes")
      .min(3, 'Minimo 3 cifras')
      .max(5, 'Maximo 5 cifras significativas.')
      .required("*Campo requerido"),

    Pesoindividuo: yup
      .string()
      .min(2, 'Minimo 2 cifras')
      .max(5, 'Maximo 5 cifras significativas.')
      .required("*Campo requerido"),

    Altura: yup
      .string()
      .matches(/[0-9](\.[0-9])/, "Solo se permiten numeros flotantes")
      .max(5, 'Maximo 5 cifras significativas.')
      .required("*Campo requerido"),

  });

  return (
    <>
      <View style={styles.formulario}>
        <Text style={styles.Actividad}> Formulario para gasto energético </Text>
        <ScrollView >
          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{
              Frecuenciainferiror: '',
              Frecuenciasuperior: '',
              Pesoindividuo: '',
              Altura: ''
            }}
            onSubmit={values => console.log(values,sexoIndi)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInputpaper
                  label="Frecuencia de corte inferior"
                  style={styles.input}
                  theme={theme}
                  onChangeText={handleChange('Frecuenciainferiror')}
                  onBlur={handleBlur('Frecuenciainferiror')}
                  value={values.Frecuenciainferiror}
                  keyboardType="number-pad"
                />
                {(errors.Frecuenciainferiror && touched.Frecuenciainferiror) &&
                  <HelperText type="error">{errors.Frecuenciainferiror}</HelperText>
                }
                <TextInputpaper
                  label="Frecuencia de corte superior"
                  style={styles.input}
                  theme={theme}
                  onChangeText={handleChange('Frecuenciasuperior')}
                  onBlur={handleBlur('Frecuenciasuperior')}
                  value={values.Frecuenciasuperior}
                  keyboardType="number-pad"
                />
                {(errors.Frecuenciasuperior && touched.Frecuenciasuperior) &&
                  <HelperText type="error">{errors.Frecuenciasuperior}</HelperText>
                }
                <TextInputpaper
                  label="Peso en kilogramos"
                  style={styles.input}
                  theme={theme}
                  onChangeText={handleChange('Pesoindividuo')}
                  onBlur={handleBlur('Pesoindividuo')}
                  value={values.Pesoindividuo}
                  keyboardType="number-pad"
                />
                {(errors.Pesoindividuo && touched.Pesoindividuo) &&
                  <HelperText type="error">{errors.Pesoindividuo}</HelperText>
                }
                <TextInputpaper
                  label="Altura en metros"
                  style={styles.input}
                  theme={theme}
                  onChangeText={handleChange('Altura')}
                  onBlur={handleBlur('Altura')}
                  value={values.Altura}
                  keyboardType="number-pad"
                />
                {(errors.Altura && touched.Altura) &&
                  <HelperText type="error">{errors.Altura}</HelperText>
                }
                <View style={styles.contenidoPiker}>
                  <Textpaper>Sexo del individuo</Textpaper>
                  <RadioButton.Group 
                  onValueChange={value => setsexoIndi(value)} 
                  value={sexoIndi}
                  style={styles.contenidoPiker}
                  >
                    <RadioButton.Item label="Femenino" value={true} />
                    <RadioButton.Item label="Masculino" value={false} />
                  </RadioButton.Group>
                </View>
                <View style={styles.Contenedorbutton}>
                  <ButtonPaper
                    mode="contained"
                    color={"#2196F3"}
                    contentStyle={{ height: 50 }}
                    theme={theme}
                    labelStyle={{ color: "#FFFFFF", fontSize: 15, width: 100 }}
                    title="Regresar "
                    onPress={setbanderaFormulario}
                  >
                    Regresar
                  </ButtonPaper>
                  <ButtonPaper
                    mode="contained"
                    color="#2196F3"
                    contentStyle={{ height: 50 }}
                    labelStyle={{ color: "white", fontSize: 15 }}
                    onPress={handleSubmit}
                    theme={theme} >
                    Continuar
                  </ButtonPaper>
                </View>

              </>
            )}
          </Formik>
        </ScrollView>


      </View>

    </>

  )
}
const styles = StyleSheet.create({
  contenidoPiker: {
    alignItems: 'center',    
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom:15
  },
  errorText: {
    color: "red"

  },

  input: {
    borderColor: "#8FBEDD",
    width: "95%",
    borderWidth: .5,
    backgroundColor: '#fff',
    marginLeft: 6
  },


  colorBtn: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  },

  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  Contenedorbutton: {
    flexDirection: "row",
    justifyContent: "space-around"

  },
  Actividad: {
    ...globalStyles.Actividad,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: "space-around"
  },
})

export default FormularioGastoenergetico