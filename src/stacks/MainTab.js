import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '../components/CustomTabBar'

import Home from '../screens/Home'
import Appointments from '../screens/Appointments'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
        tabBar={props=><CustomTabBar {...props} />}
    >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Appointments" component={Appointments} />
    </Tab.Navigator>
)