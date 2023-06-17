import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import ExpandIcon from '../assets/expand.svg'

const Modal = styled.Modal`

`
const ModalArea = styled.View`
    flex: 1
    background-color: rgba(0, 0, 0, 0.5)
    justify-content: flex-end
`
const ModalBody = styled.View`
    background-color: #50B9B8
    border-top-left-radius: 20px
    border-top-right-radius: 20px
    min-height: 300px
    padding: 10px 20px 40px 20px
`
const CloseButton = styled.TouchableOpacity`
    width: 40px
    height: 40px
`
const ModalItem = styled.View`
    background-color: #FFFFFF
    border-radius: 10px
    margin-bottom: 15px
    padding: 10px
`
const UserInfo = styled.View`
    flex-direction: row
    align-items: center
`
const UserAvatar = styled.Image`
    width: 56px
    height: 56px
    border-radius: 20px
    margin-right: 20px
`
const UserName = styled.Text`
    color: #000000
    font-weight: bold
    font-size: 18px
`
const ServiceInfo = styled.View``
const ServiceName = styled.Text``
const ServicePrice = styled.Text``

export default ({ show, setShow, user, service }) => {
    const navigation = useNavigation()

    const handleCloseButton= () => {
        setShow(false);
    }
    return (
        <Modal
            transparent={true}
            visible={show}
            animationType="fade"
        >
            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseButton}>
                        <ExpandIcon width="40" height="40" fill="#000000" />
                    </CloseButton>

                    <ModalItem>
                        <UserInfo>
                            <UserAvatar source={{uri: user.avatar}}/>
                            <UserName>{user.name}</UserName>
                        </UserInfo>
                    </ModalItem>

                    <ModalItem>
                        <ServiceName>{user.services[service].name}</ServiceName>
                        <ServicePrice>R$ {user.services[service].price}</ServicePrice>
                    </ModalItem>
                </ModalBody>
            </ModalArea>
        </Modal>
    )
}