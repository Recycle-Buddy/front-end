import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

import colors from '../assets/colors.js'
import images from '../assets/images.js'

import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer.js'
import {standardStyle} from '../assets/styles.js'
import LargeText from '../components/LargeText.js'

class Results extends React.Component {
  render() {
    // Seth - This is how to pass state between routes with getParam from react-navigation.
    const { navigation } = this.props;
    const response = navigation.getParam('machineLearningResponse', 'NO-response');

    console.log('response: ', response);

    return ( //The info here is hardcoded, but we will enevtually want to make the info change depending on the item scanned.
      <ContainerWithNavbar navigation={this.props.navigation}>
        <LargeText style={styles.headerUpper} text = {"Response Status: " + response.status}/>
        <LargeText style={styles.headerLower} text ={"Response Type: " + response.type}/>
        <FullWidthContainer flex={containerFlex}>
          <View style={styles.instruction}>
            <Image source={images.recycleSymbol} style={styles.icon}/>
            <LargeText text = {"Response URL: " + response.url} style={styles.instructionHeader}/>
          </View>
          <LargeText text = {"Response ok? " + response.ok}/>
        </FullWidthContainer>
        <Button
          title='Go To Landing'
          onPress={() => this.props.navigation.navigate('Landing')}
        />
      </ContainerWithNavbar>
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
    marginTop: 16,
  },
  headerLower: {
    fontSize: 25,
    height: 30
  },
  instruction: {flexDirection: 'row', alignItems: 'center'},
  instructionHeader: {flex: 2},
  icon: {width: 50}, 
});

export default Results;
