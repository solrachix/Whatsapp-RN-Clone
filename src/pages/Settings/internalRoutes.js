import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Screen, Navigator } = createStackNavigator();

import Home from './internalPages/home';
import Teste from './internalPages/Teste';

export default function Routes({ title }){
    const themeContext = useContext(ThemeContext).colors;
    return (
        <NavigationContainer independent={true}>
            <Navigator
                initialRouteName="Home"
                // headerMode="none" 
                screenOptions={{
                    // headerTintColor: 'white',
                    headerStyle: { backgroundColor: themeContext.secundary }
                }}
            >

                <Screen name="Home" component={Home}
                    options={{
                        title: title,
                        gestureEnabled: false
                    }}
                />

                <Screen name="Teste" component={Teste}
                    options={{title: 'Teste', gestureEnabled: false}}/>

            </Navigator>
        </NavigationContainer>
    );        
}