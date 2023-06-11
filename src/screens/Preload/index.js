import React, { useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, LoadingIcon, LogoText } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import Chair_logo from '../../assets/chair_logo'

export default () => {

    const navigation = useNavigation()

    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token !== null) {

            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToken()
    }, [])

    return (
        <Container>
            <LogoText>FastCut</LogoText>
            <Chair_logo width="263" height="263" />
            <LoadingIcon size="large" color="#000000" />
        </Container>
    )
}
