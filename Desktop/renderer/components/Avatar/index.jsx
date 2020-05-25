import React from 'react'
import PropTypes from 'prop-types'

import { Avatar } from './styles';

function AvatarComponent({...props }) {
    return (
        <Avatar { ...props }>
            
        </Avatar>
    )
}

AvatarComponent.PropTypes = {
    url: PropTypes.string.isRequired,
    statusColor: PropTypes.string
}
AvatarComponent.defaultProps = {
    statusColor: '#57E070',
};
export default AvatarComponent;