import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home'
import Divece from '../screens/Divece'
import Calorias from '../screens/Save'

const Tab = createBottomTabNavigator();

const Menu = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Inicio"              
                component={Home}
            />
            <Tab.Screen
                name="Experimentos"
                component={Divece}
            />
            <Tab.Screen
                name="Calorias"
                component={Calorias}
            />

        </Tab.Navigator>
    )
}
export default Menu