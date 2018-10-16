import React from 'react';
import { StyleSheet, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import LargeText from '../components/LargeText.js'
import StaticInfo from '../components/StaticInfo';
import ContainerWithNavbar from '../components/ContainerWithNavbar';
import LargeTouchable from '../components/LargeTouchable';

console.disableYellowBox = true;

class Landing extends React.Component {
  render() {
    return (
      <ContainerWithNavbar navigation={this.props.navigation}>

        <LargeTouchable onPress={() => this.props.navigation.navigate('QuestionTree')}>
          <Image
            source={images.recycleQuestions}
            style={styles.icon}
          />
          <LargeText style={styles.callToAction} text="Search for an item in the question tree"/>
        </LargeTouchable>

        <StaticInfo 
          containerFlex={columnContainerFlex} 
        />

        <LargeTouchable onPress={() => this.props.navigation.navigate('CameraIntro')}>
          <Image
            source={images.camera}
            style={styles.icon}
            />
          <LargeText style={styles.callToAction} text="Take a picture to detect an item"/>
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  }, 
});

// This value is equal to 1/(number of FullWidthContainer components)
// It ensures the components will be equally distributed on the screen
const columnContainerFlex = .2;

export default Landing;
