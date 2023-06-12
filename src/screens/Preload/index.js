import React, { useEffect, useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, LoadingIcon, LogoText } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'

import Api from '../../Api'

import Chair_logo from '../../assets/chair_logo'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token !== null) {
                let json = await Api.checkToken(token)
                if(json.token) {
                    await AsyncStorage.setItem('token', json.token)

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    })

                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    })

                } else {
                    navigation.navigate('SignIn')
                }

            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToken()
    }, [])

    return (
        <Container>
            <LogoText>Fast Cut</LogoText>
            <Chair_logo width="263" height="263" />
            <LoadingIcon size="large" color="#000000" />
        </Container>
    )
}
