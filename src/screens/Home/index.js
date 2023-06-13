import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    Container,
    LogoArea, 
    LogoText,
    CustomButton,
    CustomButtonText
} from './styles'


import Chair_logo from '../../assets/chair_logo'

export default () => {
    const navigation = useNavigation()

    const handleClick = (screen) => {
        navigation.navigate(screen);
      };
    return (
        <Container>
            <LogoArea>
                <LogoText>Fast Cut</LogoText>
                <Chair_logo width="70" height="70" />
            </LogoArea>

            <CustomButton onPress={() => handleClick('Services')}>
                <CustomButtonText>Serviços Oferecidos</CustomButtonText>
            </CustomButton>
            <CustomButton onPress={() => handleClick('Schedule')}>
                <CustomButtonText>Agende seu Horário</CustomButtonText>
            </CustomButton>
            <CustomButton onPress={() => handleClick('Professionals')}>
                <CustomButtonText>Portfólio dos Profissionais</CustomButtonText>
            </CustomButton>

        </Container>
    )
}