import React, { useState } from 'react';
import { Animated } from 'react-native';

import { Switcher, Label } from './styles';

export default function Checkboxes() {
    let offset = 0;
    const translateX = new Animated.Value(0);
    const [ check, setCheck ] = useState(false);
    
    console.log(check);
    
    function handle(){

        Animated.timing(translateX, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            // offset = opened? 380 : 0;
            translateX.setOffset(100);
            translateX.setValue(100);
        });

        setCheck(check ? false : true );
    }
    return (
        <Switcher onPress={handle}>
            <Label style={{
               transform: [{
                translateX: translateX.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp'
                }),
              }] 
            }}/>
        </Switcher>
    );
}
