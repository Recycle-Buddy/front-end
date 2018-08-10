import React from 'react';
import { Button, StyleSheet, LargeText, View, Image } from 'react-native';

import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

class Results extends React.Component {
  render() {
    return ( //The info here is hardcoded, but we will enevtually want to make the info change depending on the item scanned.
      <View
        style={styles.results}>
        <LargeText style={styles.headerUpper}>How to recycle</LargeText>
        <LargeText style={styles.headerLower}>Beverage cans</LargeText>
        <FullWidthContainer flex={containerFlex}>
          <View style={{flexDirection: 'column'}}>
            <Image source={images.recycleSymbol}/>
            <LargeText>In recycling</LargeText>
          </View>
          <LargeText>Empty soda and bevrage cans should be rinsed first, then put in recycling</LargeText>
        </FullWidthContainer>
        <Button
          title='Go To Landing'
          onPress={() => this.props.navigation.navigate('Landing')}
        />
      </View>
    );
  }
}

const containerFlex = 1;

const styles = StyleSheet.create({
  results: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  headerUpper: {
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 16
  },
  headerLower: {
    fontSize: 30
  },
});

export default Results;
