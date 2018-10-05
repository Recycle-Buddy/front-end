import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'


import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

class Results extends React.Component {
  render() {
    // Seth - This is how to pass state between routes with getParam from react-navigation.
    const { navigation } = this.props;
    const response = navigation.getParam('machineLearningResponse', 'NO-response');
    const resizedImage = navigation.getParam('resizedImage', 'NO-image');
    console.log(response);

    return (
      <ContainerWithNavbar navigation={this.props.navigation}>
        <FullWidthContainer flex={containerFlex}>
          <View style={styles.instruction}>
            <Image
              style={styles.icon}
              source={images.recycleSymbol}
            />
            <LargeText
              style={styles.headerUpper}
              text = {"Material: " + response.result[0].label}
            />
            <LargeText
              style={styles.headerUpper}
              text = {"Probability: " + response.result[0].probability}
            />
          </View>
        </FullWidthContainer>
        <View style={styles.contentContainer}>
          <Image
            style={{ flex: 1, alignSelf: 'center', margin: 10 }}
            resizeMode={'contain'}
            source={resizedImage} />
        </View>
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
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  headerUpper: {
    fontSize: 15,
    fontStyle: 'italic',
    margin: 5,
  },
  headerLower: {
    fontSize: 25,
    height: 30
  },
  instruction: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
  instructionHeader: {flex: 2},
  icon: {width: 50}, 
});

export default Results;
