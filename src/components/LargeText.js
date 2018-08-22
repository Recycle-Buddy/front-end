import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../assets/colors.js'

class LargeText extends React.Component {
  render() {
    return (
      // Seth - Using the array notation here for style allows us to pass
      //        styles in from the props and combine them with the inline
      //        styles defined in this components stylesheet.
      <Text style={[this.props.style, styles.text]}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: colors.darktext,
    fontSize: 14
  }
});

export default LargeText;


