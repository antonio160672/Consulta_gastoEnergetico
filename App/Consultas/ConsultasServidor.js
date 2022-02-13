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
