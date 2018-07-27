import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../assets/colors.js'

class LargeText extends React.Component {
  render() {
    return (
      <Text style={styles.text}>{this.props.text}</Text>
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


