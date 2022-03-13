import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react'

const Formulas = ({ vectorMagnitud, DatosUsuario }) => {
    const [ActiGraphF, setActiGraphF] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })

    const [ActiKingsley, setActiKingsley] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [hildebrandForm, sethildebrandForm] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [caronFormcadera, setcaronFormcadera] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [caronFormtobillo, setcaronFormtobillo] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [howeFormHom1, sethoweFormHom1] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [howeFormHom2, sethoweFormHom2] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [howeFormMuj1, sethoweFormMuj1] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [howeFormMuj2, sethoweFormMuj2] = useState({
        mano: 0,
        pierna: 0,
        cintura: 0,
        promedio: 0,
    })
    const [selectedValue, setSelectedValue] = useState("java");

    useEffect(() => {
        CalcularFormulas()
    }, [])

    const promedioFormulas = (manoGast, piernaGast, cinturaGast) => {
        return (manoGast > 0 && piernaGast > 0 && cinturaGast > 0) ?
            (manoGast + piernaGast + cinturaGast) / 3 :
            (manoGast > 0 && piernaGast > 0) ? (manoGast + piernaGast) / 2 :
                (manoGast > 0 && cinturaGast > 0) ? (manoGast + cinturaGast) / 2 :
                    (piernaGast > 0 && cinturaGast > 0) ? (piernaGast + cinturaGast) / 2 :
                        (manoGast > 0) ? manoGast : (piernaGast > 0) ? piernaGast : cinturaGast
    }

    const CalcularFormulas = () => {
        console.log("principal", (DatosUsuario))
        ActiGrap(vectorMagnitud)
        ActiGrapKingsley(vectorMagnitud)
        hildebrand(vectorMagnitud)
        caronFormC(vectorMagnitud)
        caronFormT(vectorMagnitud)
        howeFormH1(vectorMagnitud)
        howeFormH2(vectorMagnitud)
        howeFormM1(vectorMagnitud)
        howeFormM2(vectorMagnitud)
    }

    const ActiGrap = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, dato) =>
            ((dato > 2453 ?
                (0.001064 * dato + 0.087512 * (DatosUsuario.IMC) - 5.500229) :
                (dato * 0.0000191 * (DatosUsuario.IMC))))
            + total, 0
        )
        debugger
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, dato) =>
            ((dato > 2453 ?
                (0.001064 * dato + 0.087512 * (DatosUsuario.IMC) - 5.500229) :
                (dato * 0.0000191 * (DatosUsuario.IMC))))
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, dato) =>
            ((dato > 2453 ?
                (0.001064 * dato + 0.087512 * (DatosUsuario.IMC) - 5.500229) :
                (dato * 0.0000191 * (DatosUsuario.IMC))))
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setActiGraphF(prevdatos => ({
            ...prevdatos,
            mano: manoGast,
            pierna: piernaGast,
            cintura: cinturaGast,
            promedio: promedio,
        }))
    }

    const ActiGrapKingsley = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, dato) =>
            ((dato > 2453 ?
                (0.000863 * dato + 0.668876) :
                (0.0000191 * dato + 1.336129)))
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, dato) =>
            ((dato > 2453 ?
                (0.000863 * dato + 0.668876) :
                (0.0000191 * dato + 1.336129)))
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, dato) =>
            ((dato > 2453 ?
                (0.000863 * dato + 0.668876) :
                (0.0000191 * dato + 1.336129)))
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setActiKingsley(prevdatos => ({
            ...prevdatos,
            mano: manoGast * 0.0175 * DatosUsuario.Pesoindividuo,
            pierna: piernaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            cintura: cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            promedio: promedio * 0.0175 * DatosUsuario.Pesoindividuo,
        }))
    }

    const hildebrand = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, dato) =>
            ((0.0320 * dato + 7.28) / 3.5)
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, dato) =>
            ((0.0320 * dato + 7.28) / 3.5)
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, dato) =>
            ((0.0320 * dato + 7.28) / 3.5)
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        sethildebrandForm(prevdatos => ({
            ...prevdatos,
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
        }))
    }
    const caronFormC = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            (-0.763 + 0.491 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.47 * ((DatosUsuario.sexo) ? 1 : 0))
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            (-0.763 + 0.491 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.47 * ((DatosUsuario.sexo) ? 1 : 0))
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            (-0.763 + 0.491 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.47 * ((DatosUsuario.sexo) ? 1 : 0))
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setcaronFormcadera(prevdatos => ({
            ...prevdatos,
            mano: manoGast / 1000,
            pierna: piernaGast / 1000,
            cintura: cinturaGast / 1000,
            promedio: promedio / 1000,
        }))
    }
    const caronFormT = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            (-0.683 + 0.216 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.42 * ((DatosUsuario.sexo) ? 1 : 0))
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            (-0.683 + 0.216 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.42 * ((DatosUsuario.sexo) ? 1 : 0))
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            (-0.683 + 0.216 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.42 * ((DatosUsuario.sexo) ? 1 : 0))
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setcaronFormtobillo(prevdatos => ({
            ...prevdatos,
            mano: manoGast / 1000,
            pierna: piernaGast / 1000,
            cintura: cinturaGast / 1000,
            promedio: promedio / 1000,
        }))
    }
    const howeFormH1 = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            (.00045 * VM + 4.028)
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            (.00045 * VM + 4.028)
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            (.00045 * VM + 4.028)
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        sethoweFormHom1(prevdatos => ({
            ...prevdatos,
            mano: manoGast * 0.0175 * DatosUsuario.Pesoindividuo,
            pierna: piernaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            cintura: cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            promedio: promedio * 0.0175 * DatosUsuario.Pesoindividuo,
        }))
    }
    const howeFormM1 = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            ((.00045 * VM) + 1.336)
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            ((.00045 * VM) + 1.336)
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            ((.00045 * VM) + 1.336)
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        sethoweFormMuj1(prevdatos => ({
            ...prevdatos,
            mano: manoGast * 0.0175 * DatosUsuario.Pesoindividuo,
            pierna: piernaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            cintura: cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            promedio: promedio * 0.0175 * DatosUsuario.Pesoindividuo,
        }))
    }

    const howeFormH2 = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            ((.001 * VM) + (.062 * DatosUsuario.IMC) - 2.711)
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            ((.001 * VM) + (.062 * DatosUsuario.IMC) - 2.711)
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            ((.001 * VM) + (.062 * DatosUsuario.IMC) - 2.711)
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        sethoweFormHom2(prevdatos => ({
            ...prevdatos,
            mano: manoGast * 0.0175 * DatosUsuario.Pesoindividuo,
            pierna: piernaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            cintura: cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            promedio: promedio * 0.0175 * DatosUsuario.Pesoindividuo,
        }))
    }
    const howeFormM2 = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            ((.001 * VM) + (.048 * DatosUsuario.IMC) - 1.6442)
            + total, 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            ((.001 * VM) + (.048 * DatosUsuario.IMC) - 1.6442)
            + total, 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            ((.001 * VM) + (.048 * DatosUsuario.IMC) - 1.6442)
            + total, 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        sethoweFormMuj2(prevdatos => ({
            ...prevdatos,
            mano: manoGast * 0.0175 * DatosUsuario.Pesoindividuo,
            pierna: piernaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            cintura: cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo,
            promedio: promedio * 0.0175 * DatosUsuario.Pesoindividuo,
        }))
    }

    return (
        <View>
            <Text>Formulas {console.log(ActiGraphF, ActiKingsley,
                hildebrandForm,
                caronFormcadera, caronFormtobillo,
                howeFormHom1, howeFormHom2,
                howeFormMuj1, howeFormMuj2)}</Text>

            <View style={styles.container}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center"
    }
});
export default Formulas