import React, { useContext  } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from 'styled-components';

import StatusAvatar from '$root/componentes/StatusAvatar';

import { Container } from './styles';

export default function Item({ item }) {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Container>
        <StatusAvatar array={item.stories} image={item.image} />
        
        <View style={{marginLeft:70, height:80,justifyContent:'center', width:"100%",borderBottomColor:themeContext.quarterly,borderBottomWidth:0.3}}>
          <Text style={{color: themeContext.text, fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color: themeContext.text}}>agora mesmo</Text>
        </View>
    </Container>
  );
}
