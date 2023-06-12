import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Appointments from '../screens/Appointments'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)