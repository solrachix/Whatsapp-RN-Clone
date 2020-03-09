import React, { useContext } from 'react';
import { ThemeContext } from "styled-components";

import Icon from "@expo/vector-icons/Foundation";

import { Container, Image } from './styles';

export default function HeaderRight({ avatar }) {
    const themeContext = useContext(ThemeContext).colors;
        
    return (
        <Container >
            <Icon name="telephone" size={35} color={themeContext.primary}/>
            <Image source={{ uri: avatar }}/>
        </Container>
    );
}
