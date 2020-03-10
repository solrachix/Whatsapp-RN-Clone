import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import HeaderCF from '../../internalComponents/HeaderCF';
import HeaderRight from '../../internalComponents/HeaderRight';

import temporaryDataa from '../../temporaryData';

import Bubble from '../../internalComponents/Bubble';
import { Container } from './styles';

export default function ConversationField({ route, navigation }) {
  const userId = route.params.userId;
  const [friends, setFriends] = useState(temporaryDataa);
  const [friend, setFriend] = useState({});

  useEffect(()=>{
    GetFriend()
  }, []);

  function GetFriend(){
    const responce = friends.filter(({ id }) => {
      return id === userId;
    });

    setFriend(responce[0]);    
  }
  
  navigation.setOptions({ 
    headerTitle: () => <HeaderCF name={friend ? friend.name : "loading..."}/>,
    headerRight: (props) => <HeaderRight avatar={friend ? friend.image: null } navigation={navigation} {...props}/>,
  });
  
  return (
    <Container>
      <FlatList 
        data={friend.latestMessages}
        renderItem={({item}) => (
          <Bubble my={item.my} MessageData={item} key={Math.random()} />
        )}
      />
    </Container>
  );
}
