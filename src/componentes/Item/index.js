import React, { useContext  } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from 'styled-components';

import StatusAvatar from '$root/componentes/StatusAvatar';

import { Container, Body, TitleContainer, FirstTitle, SecundTitle, Spotlight } from './styles';

export default function Item(
  { 
    border = false,
    borderArray = [],
    avatar,
    titleContainer,
    spotlight = false
  }) {
  
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Container>
        <StatusAvatar {...border} array={borderArray} image={avatar} />
        
        <Body>
          <TitleContainer>
            <FirstTitle>{titleContainer.firstTitle}</FirstTitle>
            <SecundTitle 
              style={{color: spotlight[0] ? themeContext.primary: themeContext.text}}
            >
              {titleContainer.secundTitle}
            </SecundTitle>
          </TitleContainer>

          <TitleContainer>
            <FirstTitle numberOfLines={1}>{spotlight[2]}</FirstTitle>
            { 
              spotlight[0] 
                && 
                  <Spotlight>{spotlight[1]}</Spotlight>
            }
          </TitleContainer>
        </Body>
    </Container>
  );
}
