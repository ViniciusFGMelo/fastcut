import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1
    background-color: #FFFFFF
`
export const Scroller = styled.ScrollView`
    flex: 1
    padding: 20px
`
export const HeaderArea = styled.View`
    flex-direction: row
    justify-content: center
    align-items: center
`
export const HeaderTitle = styled.Text`
    font-size: 24px
    font-family: poppins
    color: #000000
`
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px
`
export const ListArea = styled.View`
    margin-top: 30px
    margin-bottom: 30px
`