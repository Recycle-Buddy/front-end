import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper'

import Link from './Link.js';
import Header from './Header.js';
import Bold from './Bold.js';

class Intermediate extends React.Component {
  render() {
  	let componentType = this.props.type;
  	let returnComp = <Text>Hello</Text>;

    switch(componentType){
        case 'link':
        console.log('HREF from Intermediate.js: ', this.props.href);
        returnComp = <Link 
                href = {this.props.href}
                text = {this.props.text}
                >
              </Link>;
        break;
        case 'heading': 
          returnComp = <Header style={styles.header} text={this.props.text}></Header>;
          break;
        case 'para':
          returnComp = <Paragraph>{this.props.text}</Paragraph>;
          break;
        case 'title':
        returnComp = <Title style={styles.title}>{this.props.text}</Title>;
          break;
        case 'bold':
          returnComp = <Bold text={this.props.text}></Bold>;
          break;
    }
    
    return returnComp;
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    margin: 10,
    padding: 2,
  },
  title: {
    fontSize: 18,
    margin: 10,
    padding: 2,
    textAlign: 'center',
  },
})

export default Intermediate;
