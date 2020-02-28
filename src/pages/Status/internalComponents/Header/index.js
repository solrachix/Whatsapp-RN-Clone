import React, { useContext  } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from 'styled-components';

import Icon from "@expo/vector-icons/FontAwesome";

import StatusAvatar from '$root/componentes/StatusAvatar';

import { Container, UserStatus, UserStatusBody, ContainerIcon, HeaderText, PlusCircleContainer, TextContainer } from './styles';

export default function Header() {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <Container>
        <UserStatus>
          <UserStatusBody>
            <StatusAvatar array={[[0,0]]} image='https://avatars1.githubusercontent.com/u/57706806?s=60&v=4'/>
            <PlusCircleContainer>
              <Icon name="plus-circle" size={20} color={themeContext.primary}/>
            </PlusCircleContainer>

            <TextContainer>
              <Text style={{fontWeight:'bold'}}>Meu Status</Text>
              <Text style={{color:'grey'}}>Adicionar ao meu status</Text>
            </TextContainer>
            <ContainerIcon>
              <Icon name="camera" size={20} color={themeContext.primary}/>
            </ContainerIcon>
            <ContainerIcon>
              <Icon name="pencil" size={20} color={themeContext.primary}/>
            </ContainerIcon>
          </UserStatusBody>
        </UserStatus>
        <HeaderText>ATUALIZAÇÕES RECENTES</HeaderText>
      </Container>
  );
}
