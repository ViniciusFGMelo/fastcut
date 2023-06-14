import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import MainTab from '../stacks/MainTab'
import Services from '../screens/Services'
import Schedule from '../screens/Schedule'
import Professionals from '../screens/Professionals'
import Barber from '../screens/Barber'


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Professionals" component={Professionals} />
        <Stack.Screen name="Barber" component={Barber} />
    </Stack.Navigator>
)


