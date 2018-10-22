import React from 'react';
import { Button, Card, Paragraph } from 'react-native-paper'
import { View } from 'react-native';
import colors from '../assets/colors'
import images from '../assets/images'
import metrics from '../themes/metrics'
import { standardStyle } from '../assets/styles'
import { tabBarIcon, questionTreeSvg } from '../assets/incons'

import StaticInfo from '../components/StaticInfo';

class Landing extends React.Component {
  render() {
    return (
      <View>
        <Button
          style={standardStyle.defaultButton}
          icon="add-a-photo"
          mode="outlined"
          onPress={() => this.props.navigation.navigate('Camera')}
        >
          Take a picture to detect an item.
        </Button>
        <Button
          style={standardStyle.defaultButton}
          icon={images.recycleQuestions}
          mode="contained"
          onPress={() => this.props.navigation.navigate('QuestionTree')}
        >
          Search for an Item.
        </Button>

        <Card
          style={standardStyle.defaultCard}
          elevation={4}
          onPress={() => this.props.navigation.navigate('QuestionTree')}
          >
          <Card.Cover
            source={images.recycleQuestions}
            style={standardStyle.largeCardIcon}
            />
          <Card.Content>
            <Paragraph>
            Search for an item in the question tree.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card
          style={standardStyle.defaultCard}
          elevation={4}
          onPress={() => this.props.navigation.navigate('QuestionTree')}
          >
          <Card.Content>
           {questionTreeSvg}
          </Card.Content>
        </Card>

        <StaticInfo />
      </View>
    );
  }
}

export default Landing;
