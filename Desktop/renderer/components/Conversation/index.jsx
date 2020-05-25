import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'styled-components';
import { rgba } from 'polished'

import Text from '../Text';
import Avatar from '../Avatar';
import { Container, Header, Row } from './styles';

function Conversation(props) {
  const theme = useContext(ThemeContext).colors;
  return (
    <Container>
      <Header>
        <Avatar 
          // style={{flexFrow: '1'}}
          statusColor="#57E070"
          url="https://avatars2.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />
        <Row column width="80%" >
          <Row>
            <Text text="Elizabeth Olsen" size={0.8} />
            <Text text="06:30 am" color={rgba(theme.text, 0.4)} size={0.6} />
          </Row>
          <Text text="Online" color={rgba(theme.text, 0.4)} size={0.6} />
        </Row>
      </Header>

      <Text 
        style={{
          textOverflow: "ellipsis",
          height: 14,
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}
        size={0.6}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    </Container>
  )
}

Conversation.PropTypes = {

}

export default Conversation