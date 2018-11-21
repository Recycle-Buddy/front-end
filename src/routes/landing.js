import React from 'react';
import { Button, Card, Paragraph } from 'react-native-paper'
import { View, ScrollView } from 'react-native';

import colors from '../assets/colors'
import images from '../assets/images'
import metrics from '../themes/metrics'
import { standardStyle } from '../assets/styles'
import { tabBarIcon, questionTreeSvg } from '../assets/icons'

import StaticInfo from '../components/StaticInfo';
import MyModal from '../components/MyModal'

class Landing extends React.Component {
  render() {
    return (
      <View style={standardStyle.pageContainerFixedTop}>
        <Button
          style={standardStyle.defaultButton}
          icon="add-a-photo"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Camera')}
        >
          Take a Picture of an Item
        </Button>
        <Card
          style={standardStyle.touchableCard}
          elevation={4}
          onPress={() => this.props.navigation.navigate('QuestionTree')}
          >
          <Card.Cover
            source={images.recycleQuestions}
            style={standardStyle.largeCardIcon}
            />
          <Card.Content>
            <Paragraph>
            Search for an Item in the Question Tree.
            </Paragraph>
          </Card.Content>
        </Card>
        <StaticInfo />
        </View>
    );
  }
}

export default Landing;
