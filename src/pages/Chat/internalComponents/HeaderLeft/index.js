import React, { useContext } from 'react';
import { ThemeContext } from "styled-components";

import Icon from "@expo/vector-icons/Ionicons";

import { Button, Text } from './styles';

export default function HeaderLeft(props) {
    const themeContext = useContext(ThemeContext).colors;

    return (
        <Button {...props}>
            <Icon name="ios-arrow-back" size={20} color={themeContext.primary} />
            <Text>Voltar</Text>
        </Button>
    );
}
