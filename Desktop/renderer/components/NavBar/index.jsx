import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../Avatar';
import Conversation from '../Conversation';
import { Container, Header, Search, Input, Lupa } from './styles';

function NavBar(props) {
    return (
        <Container>
            <Header>
                <Avatar statusColor="#57E070" url="https://avatars2.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />
                <Search>
                    <Lupa size={12} />
                    <Input placeholder="Enter for search" />
                </Search>
            </Header>

            <Conversation />

        </Container>
    )
}

NavBar.PropTypes = {

}

export default NavBar