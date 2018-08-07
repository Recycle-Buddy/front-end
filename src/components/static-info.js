import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import FullWidthContainer from './FullWidthContainer';
import LargeText from './LargeText';

import recycleFacts from '../data/recycling-facts.json';

class StaticInfo extends Component {
  insertRandomFact() {
    const randomIndex = Math.floor(Math.random() * recycleFacts.length);
    return recycleFacts[randomIndex];
  }

  render() {
    return(
      <FullWidthContainer flex={this.props.containerFlex}>
        <LargeText
          style={styles.largeText}
          text={this.insertRandomFact()} />
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