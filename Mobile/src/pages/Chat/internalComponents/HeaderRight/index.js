import React, { useContext } from 'react';
import { ThemeContext } from "styled-components";

import Icon from "@expo/vector-icons/Foundation";

import { Container, Image, Button } from './styles';

export default function HeaderRight({ navigation, avatar }) {
    const themeContext = useContext(ThemeContext).colors;
    
    return (
        <Container >
            <Button>
                <Icon name="telephone" size={35} color={themeContext.primary}/>
            </Button>
            <Button>
                <Image source={{ uri: avatar }}/>
            </Button>            
        </Container>
    );
}
