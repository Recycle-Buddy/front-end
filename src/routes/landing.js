import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'
import StaticInfo from '../components/static-info';

class Landing extends React.Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>

          <FullWidthContainer flex={columnContainerFlex}>
            <Button
              title='Go To Search!!'
              onPress={() => this.props.navigation.navigate('Search')}
            />
          </FullWidthContainer>

          <StaticInfo 
            containerFlex={columnContainerFlex} 
            infoText="Almost half of the food in the U.S. goes to waste - approximately 3,000 pounds per second!"
          />

          <StaticInfo 
            containerFlex={columnContainerFlex} 
            infoText="Aluminium cans can actually be recycled and put back onto the shelf at your local grocery store in just about 2 months."
          />

          <FullWidthContainer flex={columnContainerFlex}>
            <Image source={images.recycleSymbol}/>
            <LargeText text="Find local recycling center" />
          </FullWidthContainer>

          <FullWidthContainer flex={columnContainerFlex}>
            <Image source={images.camera}/>
            <LargeText text="Autodetect item" />
          </FullWidthContainer>

        </View>
        <Navbar />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  pageContainer: {
    flex: 1
  },
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  text: {
    color: colors.darktext
  }
});

// This value is equal to 1/(number of FullWidthContainer components)
// It ensures the components will be equally distributed on the screen
const columnContainerFlex = .25;


export default Landing;
