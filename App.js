
// // import Home from './views/Home';
// // import Adquisicion from './views/Adquisicion';
// import Tabs from './navigation/tabs';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#2087D4'
//   }

// }
// console.log(theme)
// const App = () => {

//   return (
//     <>
//       <NavigationContainer>
//         <Tabs  />
//       </NavigationContainer>
//     </>
//   );
// };


//         {/* <Stack.Navigator
//           initialRouteName='Home'
//           screenOptions={{
//             headerStyle: {
//               backgroundColor: theme.colors.primary,
//             },
//             headerTitleAlign: 'center',
//             headerTintColor: theme.colors.surface
//           }}

//         >
//           <Stack.Screen
//             name='Home'
//             component={Home}
//             options={{
//               title: "Inicio"
//             }}
//           />
//           <Stack.Screen
//             name='Adquisicion'
//             component={Adquisicion}

//           />
//         </Stack.Navigator> */}

// export default App;
import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { DefaultTheme, Provider as paperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './navigation/tabs'

function App() {
  return (
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  );
}


export default App;