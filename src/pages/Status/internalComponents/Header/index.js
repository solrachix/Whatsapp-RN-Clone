import React from 'react';
import { View, Text } from 'react-native';

import Icon from "@expo/vector-icons/FontAwesome";

import StatusAvatar from '../../../../componentes/StatusAvatar';

import { Container, UserStatus, UserStatusBody, ContainerIcon, HeaderText, PlusCircleContainer, TextContainer } from './styles';

export default function Header() {
  return (
    <Container>
        <UserStatus>
          <UserStatusBody>
            <StatusAvatar array={[[0,0]]} image='https://avatars2.githubusercontent.com/u/27819268?s=460&v=4'/>
            <PlusCircleContainer>
              <Icon name="plus-circle" size={20} color='#007dff'/>
            </PlusCircleContainer>

            <TextContainer>
              <Text style={{fontWeight:'bold'}}>Meu Status</Text>
              <Text style={{color:'grey'}}>Adicionar ao meu status</Text>
            </TextContainer>
            <ContainerIcon>
              <Icon name="camera" size={20} color='#007dff'/>
            </ContainerIcon>
            <ContainerIcon>
              <Icon name="pencil" size={20} color='#007dff'/>
            </ContainerIcon>
          </UserStatusBody>
        </UserStatus>
        <HeaderText>ATUALIZAÇÕES RECENTES</HeaderText>
      </Container>
  );
}
