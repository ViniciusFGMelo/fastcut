import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #50B9B8
    flex: 1
    justify-content: center
    align-items: center
    margin-top: -260px
`
export const LogoText = styled.Text`
    font-size: 40px
    color: #000000
    justify-content: center
    align-items: center
    font-family: poppins
`

export const LoadingIcon = styled.ActivityIndicator`
    transform: scale(1.8)
    justify-content: center
    align-items: center
    margin-top: 40px
`