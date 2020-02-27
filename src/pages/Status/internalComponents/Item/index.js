import React from 'react';
import { View, Text } from 'react-native';

import StatusAvatar from '../../../../componentes/StatusAvatar';

import { Container } from './styles';

export default function Item({ item }) {
  return (
    <Container>
        <StatusAvatar array={item.stories} image={item.image} />
        
        <View style={{marginLeft:70, height:80,justifyContent:'center', width:"100%",borderBottomColor:'#ccc',borderBottomWidth:0.3}}>
          <Text style={{fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color:'grey'}}>agora mesmo</Text>
        </View>
    </Container>
  );
}
