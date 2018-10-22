import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {tabBarIcon} from '../assets/incons'


import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer'
import LargeText from '../components/LargeText'

class CameraIntro extends React.Component {
  static navigationOptions = {
    title: 'Camera Intro',
    tabBarIcon: tabBarIcon('add-a-photo'),
    tabBarColor: '#3F51B5',
  }

  render() {
    return (
      <View flex={1}>
        <FullWidthContainer flex={0.4}>
          <LargeText text="For best results, make sure the picture is clear and centered."/>
        </FullWidthContainer>
        <View style={styles.instruction}>
          <Button 
            title="Got it"
            onPress={() => this.props.navigation.navigate('MyCamera')} />
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  instruction: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10
  },
});

export default CameraIntro;
