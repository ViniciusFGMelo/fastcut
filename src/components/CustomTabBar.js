import React, { useContext } from 'react'
import styled from 'styled-components/native'

import { UserContext } from '../contexts/UserContext'

import HomeIcon from '../assets/home.svg'
import AccountIcon from '../assets/account.svg'
import TodayIcon from '../assets/today.svg'

const TabArea = styled.View`
    height: 61px
    background-color: #50B9B8
    flex-direction: row
`
const TabItem = styled.TouchableOpacity`
    flex: 1
    justify-content: center
    align-items: center
`
const AvatarIcon = styled.Image`
    width: 50px
    height: 50px
    border-radius: 24px
`

export default ({ state, navigation}) => {
    const { state:user } = useContext(UserContext)

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Profile')}>
                {user.avatar != '' ? 
                    <AvatarIcon source={{uri: user.avatar}} /> 
                    :
                    <AccountIcon 
                        style={{opacity: state.index===0? 1 : 0.5}} 
                        width="50" 
                        height="50" 
                        fill="#FFFFFF" 
                    />
                }
            </TabItem>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon 
                    style={{opacity: state.index===1? 1 : 0.5}} 
                    width="50" 
                    height="50" 
                    fill="#FFFFFF" 
                />
            </TabItem>
            <TabItem onPress={()=>goTo('Appointments')}>
                <TodayIcon 
                    style={{opacity: state.index===2? 1 : 0.5}} 
                    width="50" 
                    height="50" 
                    fill="#FFFFFF" 
                />
            </TabItem>
        </TabArea>
    )
}