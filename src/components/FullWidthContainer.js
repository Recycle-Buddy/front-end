import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../assets/colors'
import metrics from '../themes/metrics'

class FullWidthContainer extends React.Component {
  render() {
    return (
      <View style={{flex: this.props.flex, flexDirection: 'row'}}>
        <View style={styles.rowContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    marginTop: metrics.thinMargin,
    marginBottom: metrics.thinMargin,
    backgroundColor: colors.white,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default FullWidthContainer;


