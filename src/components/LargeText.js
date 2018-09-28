import React from 'react';
import { Text } from 'react-native';

import {standardStyle} from '../assets/styles.js';

class LargeText extends React.Component {
  render() {
    return (
      // Seth - Using the array notation here for style allows us to pass
      //        styles in from the props and combine them with the inline
      //        styles defined in this components stylesheet.
      <Text style={[standardStyle.largeText, this.props.style]}>{this.props.text}</Text>
    );
  }
}

export default LargeText;


