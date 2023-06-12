import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../../contexts/UserContext'

import { 
    Container,
    LogoArea,
    LogoText,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText
} from './styles'

import Api from '../../Api'
import SignInput from '../../components/SignInput'
import Chair_logo from '../../assets/chair_logo'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import { Alert } from 'react-native'

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [passwordlField, setPasswordField ] = useState('')

    const handleSignClick = async () => {
        if(emailField != '' && passwordlField != '') {

            let json = await Api.signIn(emailField, passwordlField)
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
                Alert.alert("email ou senha errados")
            }

        } else {
            Alert.alert("Preencha os campos")
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }

    return (
        <Container>
            <LogoArea>
                <LogoText>Fast Cut</LogoText>
                <Chair_logo width="70" height="70" />
            </LogoArea>

            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Senha"
                    value={passwordlField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Criar uma conta</SignMessageButtonText>
            </SignMessageButton>

        </Container>
    )
}

