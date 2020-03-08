import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function ConversationField({ navigation }) {
  // const userId = navigation.getParam('userId');
  console.log(navigation)
  navigation.setOptions({ title: 'Carlos!' })

  return (
    <View />
  );
}
