import React, { useContext } from 'react';
import Icon from "@expo/vector-icons/SimpleLineIcons";

import { ThemeContext } from 'styled-components';

import Checkboxes from '$root/componentes/Checkboxes'

import { Container, TouchableOpacity, Text } from './styles';

const Button = ({ value, ...props }) => (
	<TouchableOpacity {...props}>
		<Text>{value}</Text>
	</TouchableOpacity>
);

export default function Header() {
    const themeContext = useContext(ThemeContext).colors;

    return (
        <Container>
            <Button value="Editar"/>
            {/* <Checkboxes /> */}
            <Button
                value={
                    <Icon name="call-out" size={20} color={themeContext.primary}/>
                }/>
        </Container>
    );
}

