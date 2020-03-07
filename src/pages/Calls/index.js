import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';

import temporaryData from './temporaryData';

import Item from '$root/componentes/Item';

import Header from './internalComponents/Header';

import { Container, Title } from './styles';

const ContainerAnimated = Animated.createAnimatedComponent(Container);

export default function Status() {
    const [marginHeader] = useState(new Animated.Value(0)); 
    const [showText, setShowtext] = useState(true);
    const [calls, setCalls] = useState(temporaryData);

    return (      
        <ContainerAnimated style={{
			transform:[
				{ translateY: marginHeader  }
			]
        }}>
            <Header />

            <Title>{showText?"Calls":null}</Title>

            <FlatList 
                data={calls}
                renderItem={({item}) => (
                    <Item key={item.id}
                        avatar={item.image}
                        titleContainer={{
                            firstTitle: item.name,
                            secundTitle: item.lastCallTime
                        }}
                        spotlight={item.Call}
                    />
                )}
            />
        </ContainerAnimated>
    );
}