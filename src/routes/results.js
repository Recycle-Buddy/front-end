import React from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';

import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'
import whereDoesItGo from ../../infoTree/whereDoesItGo.js


import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

class Results extends React.Component {
  render() {
    // Seth - This is how to pass state between routes with getParam from react-navigation.
    const { navigation } = this.props;
    const response = navigation.getParam('machineLearningResponse', 'NO-response');
    const { label, probability } = response.result[0];
    //const label = "Screw Top Bottles";
    const resizedImage = navigation.getParam('resizedImage', 'NO-image');

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
            getJSX(URLindexToObj(getURLindex(label)))
          </View>
        </FullWidthContainer>
        <FullWidthContainer flex={containerFlex}>
          <View style={styles.instruction}>
            <LargeText
              style={styles.headerUpper}
              text={"Is this result wrong?"}
            />
            <Button
              title='Take Another Picture'
              onPress={() => this.props.navigation.navigate('Camera')}
            />
          </View>
        </FullWidthContainer>

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
  },
  instruction: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10
  },
  instructionHeader: {flex: 2},
  icon: {
    width: 50,
    alignSelf: 'center'
  }, 
});

export default Results;
