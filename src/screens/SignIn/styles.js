import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF
    flex: 1
    justify-content: center
    align-items: center
`
export const LogoArea = styled.View`
    flex-direction: column
    justify-content: center
    align-items: center
    margin-top: -150px
`

export const LogoText = styled.Text`
    font-size: 32px
    color: #000000
    justify-content: center
    align-items: center
    font-family: poppins
`

export const InputArea = styled.View`
    width: 100%
    padding: 40px
    margin-top: 80px
`

export const CustomButton = styled.TouchableOpacity`
    height: 55px;
    background-color: #50B9B8
    border-radius: 32px
    justify-content: center
    align-items: center
`
export const CustomButtonText = styled.Text`
    font-size: 18px
    color: #FFFFFF
`

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row
    justify-content: center
    margin-top: 50px
    margin-bottom: 20px
`
export const SignMessageButtonText = styled.Text`
    font-size: 25px
    color: #9E9E9E
`
