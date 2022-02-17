import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Experimento from './CompGastoEner';

const ListaGastoEnergetico = ({ experi }) => {
  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <Text style={styles.titulo}>Listado de experimentos</Text>
        {experi.length === 0 ? <Text>No hay gastos</Text> :
          experi.map(Expe => (
            <Experimento
              key={Expe}
              Experimento={Expe}
            />
          )
          )}
      </ScrollView>

    </View>
  )
};
const styles = StyleSheet.create({
  contenedor: {
    marginTop: 25,
    marginBottom:5
  },
  titulo: {
    color: '#64748B',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700'
  }
})

export default ListaGastoEnergetico;
