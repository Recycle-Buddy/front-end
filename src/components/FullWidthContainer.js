import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../assets/colors.js'
import metrics from '../themes/metrics.js'

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
    margin: metrics.thinMargin,
    backgroundColor: colors.white,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default FullWidthContainer;


