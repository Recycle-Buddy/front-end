import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

class Results extends React.Component {
  render() {
    return ( //The info here is hardcoded, but we will enevtually want to make the info change depanding on the item scanned.
      <View
        style={styles.results}>
        <Text style={styles.headerUpper}>How to recycle</Text>
        <Text style={styles.headerLower}>Beverage cans</Text>
        <FullWidthContainer flex={containerFlex}>
          <View style={{flexDirection: 'column'}}>
            <Image source={images.recycleSymbol}/>
            <Text>In recycling</Text>
          </View>
          {/*The fact that there is a LOT of whitespace here disturbs me*/}
          <Text>Empty soda and bevrage cans should be rinsed first, then put in recycling</Text>
        </FullWidthContainer>
        <Button
          title='Go To Landing'
          onPress={() => this.props.navigation.navigate('Landing')}
        />
      </View>
    );
  }
}

const containerFlex = 1/1;

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
