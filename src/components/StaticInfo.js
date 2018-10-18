import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper'
import { standardStyle } from '../assets/styles'

import recycleFacts from '../data/recycling-facts.json';

class StaticInfo extends Component {
  state = {
    randomFact: '',
  }

  componentDidMount() {
    this.getRandomFact();
  }

  getRandomFact() {
    const randomIndex = Math.floor(Math.random() * recycleFacts.length);
    this.setState({
      randomFact: recycleFacts[randomIndex]
    })
  }

  render() {
    return(
        <Card
        style={standardStyle.defaultCard}
        elevation={4}
        onPress={()=>this.getRandomFact()}
        >
          <Card.Content>
          <Title> Recycle Facts </Title>
            <Paragraph>{this.state.randomFact}</Paragraph>
          </Card.Content>
        </Card>
    );
  }
}

export default StaticInfo;