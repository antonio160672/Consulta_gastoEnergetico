import React from 'react';
import { Url } from './Url';
const URL = Url()

export const ConsultasServidor = async () => {
    var getExperiemntos = URL + 'getexperimentos'
    const respuesta = await fetch(getExperiemntos)
    const resultado = await respuesta.json()
    const Experimentos = resultado.Experimentos
    const dataExperi= Experimentos.map(res=> res[0]);
    return dataExperi;
};
export const ExperimentosInformacion = async (Entidad) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entidad:Entidad })
    };
    var getExperiemntos = URL + 'datosExperimento'
    const respuesta = await fetch(getExperiemntos,requestOptions)
    const resultado = await respuesta.json()
    return resultado;
};
export const GetVectorDeMagnitud = async (DatosUsuario) => {
    console.log("se entro a la consulta")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: DatosUsuario
    };
    var getExperiemntos = URL + 'obteinvectorecuento'
    const respuesta = await fetch(getExperiemntos,requestOptions)
    const resultado = await respuesta.json()
    return resultado;
};