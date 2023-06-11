import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { 
    Container,
    LogoText,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText
} from './styles'

import Chair_logo from '../../assets/chair_logo'

export default () => {
    return (
        <Container>
            <LogoText>FastCut</LogoText>
            <Chair_logo width="70" height="70" />

            <InputArea>

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Criar uma conta</SignMessageButtonText>
            </SignMessageButton>

        </Container>
    )
}

