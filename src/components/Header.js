import React from 'react';
import { Text } from 'react-native';

import {standardStyle} from '../assets/styles.js';

class Header extends React.Component {
  render() {
    return (
      <Text style={[standardStyle.Header, this.props.style]}>{this.props.text}</Text>
    );
  }
}

export default Header;


