import React from 'react';
import { View, StyleSheet } from 'react-native';
import {tabBarIcon} from '../assets/icons'
import { Paper, Button } from 'react-native-paper'

import FullWidthContainer from '../components/FullWidthContainer'
import LargeText from '../components/LargeText'
import { standardStyle } from '../assets/styles'

class CameraIntro extends React.Component {
  static navigationOptions = {
    title: 'Camera Intro',
  }

  render() {
    return (
      <View flex={1}>
        <FullWidthContainer flex={0.4}>
          <LargeText text="For best results, make sure the picture is clear and centered."/>
        </FullWidthContainer>
        <View style={styles.instruction}>
          <Button
            style={standardStyle.defaultButton}
            icon="add-a-photo"
            mode="contained"
            onPress={() => this.props.navigation.navigate('MyCamera')}
          >
            Take a picture
        </Button>

        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  instruction: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
});

export default CameraIntro;
