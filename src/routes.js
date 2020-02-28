import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import IconNotify from './componentes/IconNotify';

import Status from './pages/Status'
import Calls from './pages/Calls'
import Camera from './pages/Camera'
import Settings from './pages/Settings'
import Chats from './pages/Chat'

export default function Routes(){
    const themeContext = useContext(ThemeContext).colors;
    return (
        <NavigationContainer>
            <Navigator 
                initialRouteName="Status"
                navigationOptions={
                    {
                        gesturesEnabled:false
                    }
                }
                tabBarOptions={{
                    activecolor: themeContext.primary,
                    inactivecolor: themeContext.tertiary,
                    upperCaseLabel:false,
                    indicatorStyle:{
                      height:0
                    },
                    showIcon:true,
                    showLabel:true,
                    style:{
                        backgroundColor: themeContext.secundary,
                    },
                }
            }>
                <Screen name="Status" component={Status}
                    options={{
                        tabBarLabel: 'Status',
                        tabBarIcon: ({ color, size }) => (
                            <IconNotify size={size} qtd={1} color={color} iconName="circle-o-notch" />
                        ),
                }}/>
                <Screen name="Calls" component={Calls}
                    options={{
                        tabBarLabel: 'Ligações',
                        tabBarIcon: ({ color, size }) => (
                            <IconNotify size={size} color={color} iconName="phone" />
                        ),
                }}/>
                <Screen name="Camera" component={Camera}
                    options={{
                        tabBarLabel: 'Câmera',
                        tabBarIcon: ({ color, size }) => (
                            <IconNotify size={size} color={color} iconName="camera" />
                        ),
                }}/>
                <Screen name="Chats" component={Chats}
                    options={{
                        tabBarLabel: 'Conversas',
                        tabBarIcon: ({ color, size }) => (
                            <IconNotify size={size} color={color} iconName="comments" />
                        ),
                }}/>
                <Screen name="Settings" component={Settings}
                    options={{
                        tabBarLabel: 'Ajustes',
                        tabBarIcon: ({ color, size }) => (
                            <IconNotify size={size} color={color} iconName="cog" /> 
                        ),
                }}/>
            </Navigator>
        </NavigationContainer>
    );        
}