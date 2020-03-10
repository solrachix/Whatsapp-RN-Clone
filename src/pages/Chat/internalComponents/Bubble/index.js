import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import { 
    MyMessageContainer,
    OthersMessageContainer, 
    MyMessageBody, 
    OthersMessageBody, 
    MessageText,
    TimeAndDisplay,
    TimeText
 } from './styles';

function MyMessage() {
  return (
    <MyMessageContainer>
        <MyMessageBody>
            <MessageText>aaaa</MessageText>
            <TimeAndDisplay>                
                <TimeText>bb:bb</TimeText>
                <Icon name="check" /* check-all */ size={15} color="#fff"/>
            </TimeAndDisplay>
        </MyMessageBody>
    </MyMessageContainer>
  );
}

function OthersMessage() {
    return (
      <OthersMessageContainer>
          <OthersMessageBody>
            <MessageText>aaaaaaaaa</MessageText>
            <TimeAndDisplay>                
                <TimeText>bb:bb</TimeText>
            </TimeAndDisplay>
          </OthersMessageBody>
      </OthersMessageContainer>
    );
  }

export default function Bubble({ my, ...props}){
    console.log(props);
    
    return (
        my == true ? <MyMessage {...props} /> : <OthersMessage {...OthersMessage} />
    )
}