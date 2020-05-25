import React from 'react'
import PropTypes from 'prop-types'

import Intro from '../Intro';
import { Container } from './styles';

function Chat(props) {
    return (
        <Container>
            <Intro />
        </Container>
    )
}

Chat.PropTypes = {

}

export default Chat