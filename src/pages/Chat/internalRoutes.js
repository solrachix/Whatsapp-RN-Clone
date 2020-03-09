import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const { Screen, Navigator } = createStackNavigator();

import Home from './internalPages/home';
import ConversationField from './internalPages/ConversationField';

import HeaderLeft from "./internalComponents/HeaderLeft";

export default function Routes({ title }){
    const themeContext = useContext(ThemeContext).colors;

    return (
        <NavigationContainer independent={true}>
            <Navigator
                initialRouteName="Home"
                // headerMode="none" 
                headerMode="screen"
                screenOptions={{
                    // headerTintColor: 'white',
                    gestureEnabled: true,
                    cardOverlayEnabled: true,                    
                    headerStyle: { backgroundColor: themeContext.secundary },
                    ...TransitionPresets.ModalPresentationIOS,
                }}                
                mode="modal"
            >

                <Screen name="Home" component={Home}                
                    options={{
                        headerTitle: title,
                        gestureEnabled: false
                    }}
                />

                <Screen name="ConversationField" component={ConversationField}
                    options={{
                        headerTitle: 'ConversationField',
                        headerLeft: (props) => <HeaderLeft {...props}/>,
                        gestureEnabled: false,
                    }}
                />

            </Navigator>
        </NavigationContainer>
    );        
}