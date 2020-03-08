import React, { useState } from 'react';
import { FlatList } from 'react-native';

import temporaryDataa from '../../temporaryData';

import Search from '$root/componentes/Search';
import Item from '$root/componentes/Item';
import HeaderItems from '../../internalComponents/Header';

import { Container } from './styles';

export default function Home({ navigation }) {
    const [friends, setFriends] = useState(temporaryDataa);

    function handleSubmit(value){
        console.log(value)
    }
    return (
        <Container>
            
            <Search onPress={handleSubmit}/>
            <FlatList 
                data={friends}
                renderItem={({item}) => (
                    <Item key={item.id}
                        onPress={()=> navigation.navigate('ConversationField', { userId: item.id }) }
                        avatar={item.image}
                        titleContainer={{
                            firstTitle: item.name,
                            secundTitle: item.lastMessageTime
                        }}
                        spotlight={item.message}
                    />
                )}
                ListHeaderComponent={<HeaderItems/>}
            />
        </Container>
    );
}
