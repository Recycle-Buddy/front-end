import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import FullWidthContainer from './FullWidthContainer';
import LargeText from './LargeText';

class StaticInfo extends Component {

  render() {
    return(
      <FullWidthContainer flex={this.props.containerFlex}>
        <LargeText
          style={styles.largeText}
          text={this.props.infoText} />
      </FullWidthContainer>
    );
  }
}

const styles = StyleSheet.create({
  largeText: {
    padding: "5%"
  }
});


export default StaticInfo;