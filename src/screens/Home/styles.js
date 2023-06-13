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
    margin-top: -160px
    margin-bottom: 80px
`
export const LogoText = styled.Text`
    font-size: 40px
    color: #000000
    justify-content: center
    align-items: center
    font-family: poppins
`
export const CustomButton = styled.TouchableOpacity`
    height: 90px
    width: 307px
    background-color: #50B9B8
    justify-content: center
    align-items: center
    margin-top: 15px
`
export const CustomButtonText = styled.Text`
    font-size: 24px
    font-family: poppins
    color: #FFFFFF
`