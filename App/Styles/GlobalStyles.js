import {
    DefaultTheme
  } from 'react-native-paper';
const globalStyles = {
    contenedor: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 15,
        transform: [{ translateY: 20 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
    },
    contenedorParametros: {
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        transform: [{ translateY: 10 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
    },
    Actividad: {
        fontSize: 15,
        color: '#64748B',
        marginBottom: 4,
        textAlign: 'justify'
    },
    theme: {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff',
          text: 'black',
          primary: '#1774f2',
          underlineColor: 'transparent',
        }
      }
}

export default globalStyles