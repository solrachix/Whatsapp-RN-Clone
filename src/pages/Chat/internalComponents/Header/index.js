import React, { useContext  } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Container, HeaderText, } from './styles';

export default function Header() {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <Container>
      
      <TouchableOpacity>
        <HeaderText>Lista completa</HeaderText>
      </TouchableOpacity>

      <TouchableOpacity>
        <HeaderText>Novo grupo</HeaderText>
      </TouchableOpacity>

    </Container>
  );
}
