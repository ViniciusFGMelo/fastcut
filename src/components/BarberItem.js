import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'

const Area = styled.TouchableOpacity`
    background-color: #50B9B8
    margin-bottom: 20px
    border-radius: 20px
    padding: 15px
    flex-direction: row
`;

const Avatar = styled.Image`
    width: 88px
    height: 88px
    border-radius: 20px
`;

const InfoArea = styled.View`
    margin-left: 20px
    justify-content: space-between
`;

const UserName = styled.Text`
    font-size: 17px
    color: #FFFFFF
    font-weight: bold
`;

const SeeProfileButton = styled.View`
    width: 85px
    height: 26px
    border: 1px solid #FFFFFF
    background-color: #50B9B8
    border-radius: 10px
    justify-content: center
    align-items: center
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px
    color: #FFFFFF
`;


export default ({data}) => {
    const navigation = useNavigation()

    const handleClick = () => {
        navigation.navigate('Barber', {
            id: data.id,
            avatar: data.avatar,
            name: data.name
        })
    }
    return (
        <Area onPress={handleClick}>
            <Avatar source={{uri: data.avatar}} />
            <InfoArea>
                <UserName>{data.name}</UserName>

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}