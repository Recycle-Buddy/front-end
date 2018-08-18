import React from 'react';
import { Text } from 'react-native';

import {standardStyle} from '../assets/styles.js';

class LargeText extends React.Component {
  render() {
    return (
      <Text style={standardStyle.standardStyle}>{this.props.text}</Text>
    );
  }
}

// Bad object: {
//   "standardStyle": 23,
//   "container": 24
// }

export default LargeText;


