import React, {useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

import BarberModal from '../../components/BarberModal'

import { 
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    UserAvatar,
    UserInfo,
    UserInfoName,
    LoadingIcon,
    ServiceArea,
    ServicesTitle,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChooseButton,
    ServiceChooseButtonText,
 } from './styles'

import Api from '../../Api'


export default () => {
    const navigation = useNavigation()
    const route = useRoute()

    const [userInfo, setUserinfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name
    })
    const [loading, setLoading] = useState(false)
    const [selectedService, setSelectedService] = useState(null)
    const [showModal, setShowModal] = useState(false)

    
    useEffect(() =>{
        const getBarberInfo= async () => {
            setLoading(true)

            let json= await Api.getBarber(userInfo.id)
            if(json.error == '') {
                setUserinfo(json.data)
            } else {
                Alert.alert("Erro: "+json.error)
            }

            setLoading(false)
        }
        getBarberInfo()
    }, [])

    const handleServiceChoose = (key) => {
        setSelectedService(key)
        setShowModal(true)
    }

    return (
        <Container>
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0 ? 
                    <Swiper
                        style={{height: 240}}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDotActive />}
                        paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                        autoplay={true}
                    >
                        {userInfo.photos.map((item, key) => (
                            <SwipeItem key={key}>
                                <SwipeImage source={{uri:item.url}} resizeMode="cover"/>
                            </SwipeItem>
                        ))}
                    </Swiper> 
                    : 
                    <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri:userInfo.avatar}}/>
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                        </UserInfo>
                    </UserInfoArea>

                    {loading && <LoadingIcon size="large" color="#000000" />
                    }

                    {userInfo.services && 
                        <ServiceArea>
                            <ServicesTitle>Lista de serviços</ServicesTitle>

                            {userInfo.services.map((item, key) =>(
                                <ServiceItem key ={key}>
                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price}</ServicePrice>
                                    </ServiceInfo>
                                    <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                                        <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                                    </ServiceChooseButton>
                                </ServiceItem>
                            ))}

                        </ServiceArea>
                    }
                </PageBody>
            </Scroller>

            <BarberModal
                show={showModal}
                setShow={setShowModal} 
                user={userInfo}
                service={selectedService}
            />
        </Container>
    )
}