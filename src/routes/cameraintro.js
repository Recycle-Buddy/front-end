import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import ContainerWithNavbar from '../components/ContainerWithNavbar';
import FullWidthContainer from '../components/FullWidthContainer.js'
import LargeText from '../components/LargeText.js'

class CameraIntro extends React.Component {
  render() {
    return (
      <ContainerWithNavbar navigation={this.props.navigation}>

        <FullWidthContainer flex={0.4}>
          <LargeText text="For best results, make sure the picture is clear and centered."/>
        </FullWidthContainer>
        <View style={styles.instruction}>
          <Button 
            title="Got it"
            onPress={() => this.props.navigation.navigate('Camera')} />
        </View>

      </ContainerWithNavbar>
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
