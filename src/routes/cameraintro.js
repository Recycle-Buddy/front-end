import React from 'react';
import { View, StyleSheet } from 'react-native';
import { tabBarIcon } from '../assets/icons'
import { Card, Button, Paragraph } from 'react-native-paper'

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
        <Card
          style={standardStyle.importantCard}
          elevation={4}
        >
          <Card.Content>
            <Paragraph>
              For best results, make sure the picture is clear and centered.
            </Paragraph>
          </Card.Content>
        </Card>
          <Button
            style={standardStyle.defaultButton}
            icon="add-a-photo"
            mode="contained"
            onPress={() => this.props.navigation.navigate('MyCamera')}
          >
            Take a picture
        </Button>

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
