import React from 'react'

import { 
    Container,
    LogoArea, 
    LogoText,
} from './styles'

import Chair_logo from '../../assets/chair_logo'

export default () => {

    return (
        <Container>
            <LogoArea>
                <LogoText>Fast Cut</LogoText>
                <Chair_logo width="70" height="70" />
            </LogoArea>
        </Container>
    )
}