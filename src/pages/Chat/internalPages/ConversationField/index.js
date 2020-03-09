import React, { useState, useEffect } from 'react';

import HeaderCF from '../../internalComponents/HeaderCF';
import HeaderRight from '../../internalComponents/HeaderRight';

import temporaryDataa from '../../temporaryData';
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
    headerRight: (props) => <HeaderRight avatar={friend ? friend.image: null } {...props}/>,
  });
  
  return (
    <Container>

    </Container>
  );
}
