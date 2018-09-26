import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'
import StaticInfo from '../components/StaticInfo';
import ContainerWithNavbar from '../components/ContainerWithNavbar';
import LargeTouchable from '../components/LargeTouchable';

class Landing extends React.Component {
  render() {
    return (
      <ContainerWithNavbar navigation={this.props.navigation}>

        <LargeTouchable onPress={() => this.props.navigation.navigate('Search')}>
          <LargeText style={styles.callToAction} text="Go To Search (temporary)"/>
        </LargeTouchable>

        <StaticInfo 
          containerFlex={columnContainerFlex} 
        />

        <LargeTouchable onPress={() => this.props.navigation.navigate('Results')}>
          <LargeText style={styles.callToAction} text="Skip search and go to results" />
        </LargeTouchable>

        <FullWidthContainer flex={columnContainerFlex}>
          <Image source={images.recycleSymbol}/>
          <LargeText text="Find local recycling center" />
        </FullWidthContainer>

        <LargeTouchable onPress={() => this.props.navigation.navigate('CameraIntro')}>
          <Image source={images.camera}/>
          <LargeText style={styles.callToAction} text="Autodetect Item"/>
        </LargeTouchable>

      </ContainerWithNavbar>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  callToAction: {
    textAlign: 'center'
  }
});

// This value is equal to 1/(number of FullWidthContainer components)
// It ensures the components will be equally distributed on the screen
const columnContainerFlex = .2;


export default Landing;
