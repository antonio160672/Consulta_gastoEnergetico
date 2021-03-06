import { View, StyleSheet, Button, SafeAreaView, Text } from 'react-native'
import globalStyles from '../../App/Styles/GlobalStyles';
import {
    Button as ButtonPaper
} from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react'
import Csv from './Csv';
import DatosGastoEne from './DatosGastoEne';

const Formulas = ({ vectorMagnitud, DatosUsuario, Experimento }) => {
    const theme = {
        ...globalStyles.theme
    }

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
    const [selectedValue, setSelectedValue] = useState("ActiGraph");
    const [FormulaEE, setFormulaEE] = useState({});

    useEffect(() => {
        CalcularFormulas()
    }, [])

    // useEffect(() => {
    //     switch (selectedValue) {
    //         case 'ActiGraph':
    //             setFormulaEE(ActiGraphF)
    //             break;
    //         case 'Freedson':
    //             setFormulaEE(ActiKingsley)
    //             break;
    //         case 'Hildebrand':
    //             setFormulaEE(hildebrandForm)
    //             break;
    //         case 'CaronCad':
    //             setFormulaEE(caronFormcadera)
    //             break;
    //         case 'CaronTob':
    //             setFormulaEE(caronFormtobillo)
    //             break;
    //         case 'HoweHsIMC':
    //             setFormulaEE(howeFormHom1)
    //             break;
    //         case 'HoweMsIMC':
    //             setFormulaEE(howeFormMuj1)
    //             break;
    //         case 'HoweMsIMC':
    //             setFormulaEE(howeFormMuj2)
    //             break;
    //         default:
    //             console.log('Lo lamentamos, por el momento no disponemos de ' + selectedValue + '.');
    //     }
    // }, [selectedValue])

    const promedioFormulas = (manoGast, piernaGast, cinturaGast) => {
        return (manoGast > 0 && piernaGast > 0 && cinturaGast > 0) ?
            (manoGast + piernaGast + cinturaGast) / 3 :
            (manoGast > 0 && piernaGast > 0) ? (manoGast + piernaGast) / 2 :
                (manoGast > 0 && cinturaGast > 0) ? (manoGast + cinturaGast) / 2 :
                    (piernaGast > 0 && cinturaGast > 0) ? (piernaGast + cinturaGast) / 2 :
                        (manoGast > 0) ? manoGast : (piernaGast > 0) ? piernaGast : cinturaGast
    }

    const CalcularFormulas = () => {
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
    const Almacenar = () => {
        try {
            Csv(Object.values(vectorMagnitud), Experimento)
        } catch (error) {

        }
        console.log("almacenado")

    }

    const ActiGrap = (vectorMagnitud) => {

        const manoGast = vectorMagnitud.manoFvm.reduce((total, dato) =>
            total +
            ((dato > 2453 ?
                (0.001064 * dato + 0.087512 * (DatosUsuario.IMC) - 5.500229) :
                (dato * 0.0000191 * DatosUsuario.IMC)))
            , 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, dato) =>
            total +
            ((dato > 2453 ?
                (0.001064 * dato + 0.087512 * (DatosUsuario.IMC) - 5.500229) :
                (dato * 0.0000191 * DatosUsuario.IMC)))
            , 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, dato) =>
            total +
            ((dato > 2453 ?
                (0.001064 * dato + 0.087512 * (DatosUsuario.IMC) - 5.500229) :
                (dato * 0.0000191 * DatosUsuario.IMC)))
            , 0
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
            total + ((dato > 2453 ?
                (0.000863 * dato + 0.668876) :
                (0.001092 * dato + 1.336129)))
            , 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, dato) =>
            total + ((dato > 2453 ?
                (0.000863 * dato + 0.668876) :
                (0.001092 * dato + 1.336129)))
            , 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, dato) =>
            total + ((dato > 2453 ?
                (0.000863 * dato + 0.668876) :
                (0.001092 * dato + 1.336129)))
            , 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setActiKingsley(prevdatos => ({
            ...prevdatos,
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
        }))
    }

    const hildebrand = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, dato) =>
            total + ((0.0320 * dato + 7.28) / 3.5)
            , 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, dato) =>
            total + ((0.0320 * dato + 7.28) / 3.5)
            , 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, dato) =>
            total + ((0.0320 * dato + 7.28) / 3.5)
            , 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        sethildebrandForm(prevdatos => ({
            ...prevdatos,
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 100,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 100,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 100,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 100,
        }))
    }

    const caronFormC = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            total + (-0.763 + 0.491 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.47 * ((DatosUsuario.sexo) ? 1 : 0))
            , 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            total + (-0.763 + 0.491 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.47 * ((DatosUsuario.sexo) ? 1 : 0))
            , 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            total + (-0.763 + 0.491 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.47 * ((DatosUsuario.sexo) ? 1 : 0))
            , 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setcaronFormcadera(prevdatos => ({
            ...prevdatos,
            mano: (manoGast * 0.0175 * DatosUsuario.IMC) / 1000,
            pierna: (piernaGast * 0.0175 * DatosUsuario.IMC) / 1000,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.IMC) / 1000,
            promedio: (promedio * 0.0175 * DatosUsuario.IMC) / 1000,
        }))
    }

    const caronFormT = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            total + (-0.683 + 0.216 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.42 * ((DatosUsuario.sexo) ? 1 : 0))
            , 0
        )
        const piernaGast = vectorMagnitud.piernaFvm.reduce((total, VM) =>
            total + (-0.683 + 0.216 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.42 * ((DatosUsuario.sexo) ? 1 : 0))
            , 0
        )

        const cinturaGast = vectorMagnitud.cinturaFvm.reduce((total, VM) =>
            total + (-0.683 + 0.216 * VM + 0.063 * DatosUsuario.IMC + 0 + 0.42 * ((DatosUsuario.sexo) ? 1 : 0))
            , 0
        )
        const promedio = promedioFormulas(manoGast, piernaGast, cinturaGast)

        setcaronFormtobillo(prevdatos => ({
            ...prevdatos,
            mano: (manoGast) / 1000,
            pierna: (piernaGast) / 1000,
            cintura: (cinturaGast) / 1000,
            promedio: (promedio) / 1000,
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
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
        }))
    }

    const howeFormH2 = (vectorMagnitud) => {
        const manoGast = vectorMagnitud.manoFvm.reduce((total, VM) =>
            (.001 * VM + .062 * DatosUsuario.IMC - 2.711)
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
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 5,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 5,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 5,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 5,
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
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
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
            mano: (manoGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            pierna: (piernaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            cintura: (cinturaGast * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
            promedio: (promedio * 0.0175 * DatosUsuario.Pesoindividuo) / 10,
        }))
    }
    const Imprimir = () => {
        // console.table("ActiGraphF: ", ActiGraphF)
        // console.log("ActiKingsley: ", ActiKingsley)
        // console.log("hildebrandForm: ", hildebrandForm)
        // console.log("caronFormcadera: ", caronFormcadera)
        // console.log("caronFormtobillo: ", caronFormtobillo)
        // console.log("howeFormHom1: ", howeFormHom1)
        // console.log("howeFormHom2: ", howeFormHom2)
        // console.log("howeFormMuj1: ", howeFormMuj1)
        // console.log("howeFormMuj2: ", howeFormMuj2)
        switch (selectedValue) {
            case 'ActiGraph':
                setFormulaEE(ActiGraphF)
                break;
            case 'Freedson':
                setFormulaEE(ActiKingsley)
                break;
            case 'Hildebrand':
                setFormulaEE(hildebrandForm)
                break;
            case 'CaronCad':
                setFormulaEE(caronFormcadera)
                break;
            case 'CaronTob':
                setFormulaEE(caronFormtobillo)
                break;
            case 'HoweHsIMC':
                setFormulaEE(howeFormHom1)
                break;
            case 'HoweMsIMC':
                setFormulaEE(howeFormMuj1)
                break;
            case 'HoweMsIMC':
                setFormulaEE(howeFormMuj2)
                break;
            default:
                console.log('Lo lamentamos, por el momento no disponemos de ' + selectedValue + '.');
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.Actividad} >Seleccione la f??rmula a usar</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="F??rmula de ActiGraph" value="ActiGraph" />
                    <Picker.Item label="F??rmula de combinaci??n Freedson" value="Freedson" />
                    <Picker.Item label="F??rmula de Hildebrand" value="Hildebrand" />
                    <Picker.Item label="F??rmula de Caron para cadera" value="CaronCad" />
                    <Picker.Item label="F??rmula de Caron para tobillo" value="CaronTob" />
                    <Picker.Item label="F??rmula de Howe hombre sin IMC" value="HoweHsIMC" />
                    <Picker.Item label="F??rmula de Howe hombre con IMC" value="HoweHCIMC" />
                    <Picker.Item label="F??rmula de Howe mujer sin IMC" value="HoweMsIMC" />
                    <Picker.Item label="F??rmula de Howe mujer con IMC" value="HoweMCIMC" />

                </Picker>
                <DatosGastoEne
                    FormulaEE={FormulaEE}

                />
                {/* agregar un nuevo componente que dependa de selectedValue */}
                <SafeAreaView style={styles.containerButton}>
                    <View style={styles.Contenedorbutton}>
                        <Button
                            color={"#2196F3"}
                            marginVertial={10}
                            borderRadius={20}
                            textStyle={{ color: "#FFFFFF", fontSize: 20 }}
                            title="Imprimir"
                            onPress={Imprimir}
                        />
                    </View>
                    <View style={styles.Contenedorbutton}>

                        <Button
                            color={"#2196F3"}
                            marginVertial={10}
                            borderRadius={20}
                            textStyle={{ color: "#FFFFFF", fontSize: 20 }}
                            title="Guardara VM"
                            onPress={Almacenar}
                        />
                    </View>
                </SafeAreaView>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        alignItems: "center"
    },
    Actividad: {
        ...globalStyles.Actividad,
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: "space-around"
    },
    containerButton: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    Contenedorbutton: {
        width: '45%',
        height: 50,
        borderRadius: 5,
        marginRight: 10
    },
});
export default Formulas