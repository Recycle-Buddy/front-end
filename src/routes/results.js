import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

import colors from '../assets/colors.js'
import images from '../assets/images.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'
import {standardStyle} from '../assets/styles.js'
import LargeText from '../components/LargeText.js'

class Results extends React.Component {
  render() {
    return ( //The info here is hardcoded, but we will enevtually want to make the info change depending on the item scanned.
      <View style = {standardStyle.wrapper}>
        <View style={standardStyle.container}>
          <LargeText style={styles.headerUpper} text = "How to recycle"/>
          <LargeText style={styles.headerLower} text = "Beverage cans"/>
          <FullWidthContainer flex={containerFlex}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={images.recycleSymbol} />
              <LargeText text = "In recycling" style={{flex: 2}}/>
            </View>
            <LargeText text = "Empty soda and bevrage cans should be rinsed first, then put in recycling"/>
          </FullWidthContainer>
          <Button
            title='Go To Landing'
            onPress={() => this.props.navigation.navigate('Landing')}
          />
        </View>
        <Navbar/>
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
