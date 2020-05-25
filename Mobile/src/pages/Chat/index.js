import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import Routes from './internalRoutes';

import { Container, Title } from './styles';

const ContainerAnimated = Animated.createAnimatedComponent(Container);

export default function Status() {
    const [marginHeader] = useState(new Animated.Value(0));
    const [showText, setShowtext] = useState(true);

    return (      
        <ContainerAnimated style={{
            transform:[
                { translateY: marginHeader  }
            ]
        }}>
            <Routes title={<Title>{showText?"Chat":null}</Title>}/>
        </ContainerAnimated>
    );
}