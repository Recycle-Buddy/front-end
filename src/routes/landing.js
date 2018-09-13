import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'
import StaticInfo from '../components/StaticInfo';
import ContainerWithNavbar from '../components/ContainerWithNavbar';

class Landing extends React.Component {
  render() {
    return (
      <ContainerWithNavbar navigation={this.props.navigation}>

        <FullWidthContainer flex={columnContainerFlex}>
          <Button
            title='Go To Search!!'
            onPress={() => this.props.navigation.navigate('Search')}
          />
        </FullWidthContainer>

        <StaticInfo 
          containerFlex={columnContainerFlex} 
        />

        <FullWidthContainer flex={columnContainerFlex}>
          <Button
            title='Skip search and go to results' //Definitely temporary. Eventually the search page will lead to the results page.
            onPress={() => this.props.navigation.navigate('Results')}
          />
        </FullWidthContainer>

        <FullWidthContainer flex={columnContainerFlex}>
          <Image source={images.recycleSymbol}/>
          <LargeText text="Find local recycling center" />
        </FullWidthContainer>

        <FullWidthContainer flex={columnContainerFlex}>
          <Button
            title = "Autodetect Item"
            onPress={() => this.props.navigation.navigate('CameraIntro')}/>
        </FullWidthContainer>

      </ContainerWithNavbar>
    );
  }
}

/*            <Image source={images.camera}/> Incase we need it
            <LargeText text="Autodetect item" />*/

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
const columnContainerFlex = .2;


export default Landing;
