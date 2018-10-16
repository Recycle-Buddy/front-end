import React from 'react';
import { Text } from 'react-native';

import {standardStyle} from '../assets/styles.js';

class Paragraph extends React.Component {
  render() {
    return (
      <Text style={[standardStyle.Paragraph, this.props.style]}>{this.props.text}</Text>
    );
  }
}

export default Paragraph;


