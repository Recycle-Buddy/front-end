import React from 'react';
import { Button, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar.js'
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

class CameraIntro extends React.Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>

          <FullWidthContainer flex={0.4}>
            <Image source={images.camera}/>
            <LargeText text="Autodetect item can take a picture of an item and get infomation about it."/>
          </FullWidthContainer>

          <FullWidthContainer flex={0.4}>
            <LargeText text="For best results, make sure the picture is clear and centered."/>
          </FullWidthContainer>

          <FullWidthContainer flex={0.2}>
            <Button 
            title="Got it"
            onPress={() => ToastAndroid.show("Not there yet!", ToastAndroid.SHORT)}/>
          </FullWidthContainer>

        </View>
        <Navbar navigation={this.props.navigation} />
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

export default CameraIntro;