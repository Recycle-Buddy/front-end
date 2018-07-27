import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'

class FullWidthContainer extends React.Component {
  render() {
    return (
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  columnContainer: {
    flex: .25,
    flexDirection: 'row'
  },
  rowContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default FullWidthContainer;


