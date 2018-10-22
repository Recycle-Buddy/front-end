import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

import colors from '../assets/colors'
import images from '../assets/images'
import metrics from '../themes/metrics'


import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer'
import LargeText from '../components/LargeText'

class Results extends React.Component {
  render() {
    // Seth - This is how to pass state between routes with getParam from react-navigation.
    const { navigation } = this.props;
    const response = navigation.getParam('machineLearningResponse', 'NO-response');
    let { label, probability } = response.result[0];
    const resizedImage = navigation.getParam('resizedImage', 'NO-image');

    probability = probability.toFixed(2) * 100;
    label = label.toUpperCase();

    let icon;
    switch(label) {
      case 'cardboard':
      case 'metal':
      case 'glass':
      case 'plastic':
      case 'paper':
        icon = images.recycleSymbol;
        break;
      case 'trash':
        icon = images.trashCan;
        break;
    }

    return (
      <ContainerWithNavbar navigation={this.props.navigation}>
        <FullWidthContainer flex={containerFlex}>
          <View style={styles.instruction}>
            <Image
            style={styles.icon}
            source={icon}
            />
            <LargeText
            style={styles.headerUpper}
            text = {"Material:        " + label}
            />
            <LargeText
            style={styles.headerUpper}
            text = {"Probability:    " + probability +'%'}
            />
          </View>
        </FullWidthContainer>
          <View style={styles.instruction}>
            <Button
              title='Take Another Picture'
              onPress={() => this.props.navigation.navigate('Camera')}
            />
          </View>

        <View style={styles.contentContainer}>
          <Image
            style={styles.resizedImage}
            resizeMode={'contain'}
            source={resizedImage} />
        </View>
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
  resizedImage: {
    flex: 1,
    alignSelf: 'center',
    margin: 10,
    height: 250
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
    margin: 2,
    fontWeight: 'bold',
  },
  instruction: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10
  },
  instructionHeader: {flex: 2},
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  }, 
});

export default Results;
