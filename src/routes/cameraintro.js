import React from 'react';
import { Button, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'
// import Camera from '../components/camera';

class CameraIntro extends React.Component {
  render() {
    return (
      <ContainerWithNavbar navigation={this.props.navigation}>
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
              onPress={() => this.props.navigation.navigate('Camera')} />
        </FullWidthContainer>
      </ContainerWithNavbar>
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
