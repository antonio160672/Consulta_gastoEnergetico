import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home'
import Divece from '../screens/Divece'
import Calorias from '../screens/GastoEnergetico'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const Menu = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Calorias"
                component={Calorias}
                options={
                    {
                        tabBarLabel: 'Gasto calórico',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="fire-circle" color={color} size={size} />
                        ),
                    }}
            />
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={
                    {
                        tabBarLabel: 'Inicio',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
                        ),
                    }}
            />

        </Tab.Navigator>
    )
}
export default Menu