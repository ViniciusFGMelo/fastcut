import React, {useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

import { 
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    ServiceArea,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    UserAvatar,
    UserInfo,
    UserInfoName
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
                    <ServiceArea>

                    </ServiceArea>
                </PageBody>
            </Scroller>
        </Container>
    )
}