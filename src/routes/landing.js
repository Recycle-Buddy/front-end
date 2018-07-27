import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'

class Landing extends React.Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>
          <FullWidthContainer>
            <Button
              title='Go To Search!!'
              onPress={() => this.props.navigation.navigate('Search')}
            />
          </FullWidthContainer>
          <FullWidthContainer>
            <Text style={styles.text}>Almost half of the food in the U.S. goes to waste - approximately 3,000 pounds per second.</Text>
          </FullWidthContainer>
          <FullWidthContainer>
            <Image source={images.recycleSymbol}/>
            <Text style={styles.text}>Find local recycling center</Text>
          </FullWidthContainer>
          <FullWidthContainer>
            <Image source={images.camera}/>
            <Text style={styles.text}>Autodetect item</Text>
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

export default Landing;
