import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import FullWidthContainer from './FullWidthContainer';
import LargeText from './LargeText';
import LargeTouchable from '../components/LargeTouchable';

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
        <LargeTouchable
          onPress={() =>this.getRandomFact()}
          styles={styles.touchable}
          >
          <LargeText
            style={styles.largeText}
            text={this.state.randomFact} />
        </LargeTouchable>
    );
  }
}

const styles = StyleSheet.create({
  largeText: {
    padding: 0,
  },
  touchable: {
    margin: '1%',
    borderColor: 'green'
  },
});


export default StaticInfo;