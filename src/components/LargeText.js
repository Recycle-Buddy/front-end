import React from 'react';
import { Text } from 'react-native';

import standardStyle from '../assets/styles.js';

class LargeText extends React.Component {
  render() {
    return (
      <Text style={standardStyle}>{this.props.text}</Text>
    );
  }
}

export default LargeText;


