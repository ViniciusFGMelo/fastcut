import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex:1
    background-color: #FFFFFF
`
export const Scroller = styled.ScrollView`
    flex:1
`
export const SwipeDot = styled.View`
    width: 10px
    height: 10px
    background-color: #FFFFFF
    border-radius: 5px
    margin: 3px
`
export const SwipeDotActive = styled.View`
    width: 10px
    height: 10px
    background-color: #000000
    border-radius: 5px
    margin: 3px
`
export const SwipeItem = styled.View`
    flex: 1
    background-color: #50B9B8
`
export const SwipeImage = styled.Image`
    width: 100%
    height: 240px
`
export const FakeSwiper = styled.View`
    height: 140px
    background-color: #50B9B8
`
export const PageBody = styled.View`
    background-color: #FFFFFF
    border-top-left-radius: 50px
    margin-top: -50px
    min-height: 400px
`
export const UserInfoArea = styled.View`
    flex-direction: row
    margin-top: -30px
`
export const UserAvatar = styled.Image`
    width: 110px
    height: 110px
    border-radius: 20px
    margin-left: 30px
    margin-right: 20px
    border-width: 4px
    border-color: #FFFFFF
`
export const UserInfo = styled.View`
    flex: 1
    justify-content: flex-end
`
export const UserInfoName = styled.Text`
    color: #000000
    font-size: 18px
    font-weight: bold
    margin-bottom: 10px
`
export const ServiceArea = styled.View`
    margin-top: 30px
`
export const ServicesTitle = styled.Text`
    font-size: 20px
    font-weight: bold
    color: #50B9B8
    margin-left: 30px
    margin-bottom: 20px
`
export const ServiceItem = styled.View`
    flex-direction: row
    margin-left: 30px
    margin-right: 30px
    margin-bottom: 20px
`
export const ServiceInfo = styled.View`
    flex: 1
`
export const ServiceName = styled.Text`
    font-size: 18px
    font-weight: bold
    color: #000000
`
export const ServicePrice = styled.Text`
    font-size: 14px
    color: #000000
`
export const ServiceChooseButton = styled.TouchableOpacity`
    background-color: #50B9B8
    border-radius: 10px
    padding: 10px 15px
`
export const ServiceChooseButtonText = styled.Text`
    font-size: 18px
    font-weight: bold
    color: #FFFFFF
`
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 40px
`