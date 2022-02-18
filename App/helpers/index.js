import { View, Text } from 'react-native'
import React from 'react'

export const FormatearFecha = (fecha) => {
    const options = { weekday: 'short', year: '2-digit', month: '2-digit', day: 'numeric',    hour: '2-digit',
    minute:'2-digit',timeZone: 'UTC' };
    var date = new Date(fecha).toLocaleString('es-MX',options )
    return  date
}


 