import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './styles';

const TextComponent = ({ text, ...props }) => {
  return <Text {...props }>{ text }</Text>;
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired.toString,
  align: PropTypes.string.toString,
  size: PropTypes.number,
  color: PropTypes.string.toString,
  bold: PropTypes.oneOf([ 
    "normal", "bold",
    100,200,300,400,500,600,700,800,900
  ]),  
}

TextComponent.defaultProps = {
  size: 1,
  color: "#fff",
  bold: 'normal',
  align: 'left'
};

export default TextComponent;