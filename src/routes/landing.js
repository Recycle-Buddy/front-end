import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

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

          <FullWidthContainer flex={columnContainerFlex}>
            <Button
              title='Skip search and go to results' //Defenetly temporary. Eventually the search page will lead to the results page.
              onPress={() => this.props.navigation.navigate('Results')}
            />
          </FullWidthContainer>

          <FullWidthContainer flex={columnContainerFlex}>
            <LargeText text="Almost half of the food in the U.S. goes to waste - approximately 3,000 pounds per second!" />
          </FullWidthContainer>

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
