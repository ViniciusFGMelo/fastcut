import React, { useState, useEffect } from 'react';
import { RefreshControl, Alert } from 'react-native';


import Api from '../../Api';

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    LoadingIcon,
    ListArea
} from './styles';

import BarberItem from '../../components/BarberItem';

export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getBarbers();
        if(res.error == '') {
            setList(res.data)
        } else {
            Alert.alert("Erro: "+res.error)
        }
        setLoading(false);
    }

    useEffect(()=>{
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                
                <HeaderArea>
                    <HeaderTitle>Encontre o seu barbeiro</HeaderTitle>
                </HeaderArea>

                {loading &&
                    <LoadingIcon size="large" color="#50B9B8" />
                }
                
                <ListArea>
                    {list.map((item, k)=>(
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    );
}