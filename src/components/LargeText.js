import React from 'react';
import { Text } from 'react-native';

import standardStyle from '../assets/styles';

class LargeText extends React.Component {
  render() {
    return (
      <Text style={standardStyle.standardStyle.standardStyle}>{this.props.text}</Text>
    );
  }
}

export default LargeText;


