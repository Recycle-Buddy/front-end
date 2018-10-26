import React from 'react';
import { Text, StyleSheet } from 'react-native';

import {standardStyle} from '../assets/styles.js';

import LargeText from './LargeText.js';
import Link from './Link.js';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Bold from './Bold.js';

class Intermediate extends React.Component {
  render() {
  	let componentType = this.props.type;
  	let returnComp = <Text>Hello</Text>;

    switch(componentType){
        case 'link':
        returnComp = <Link 
                // style={styles.header}
                href = {this.props.href}
                text = {this.props.text}
                >
              </Link>;
        break;
        case 'heading': 
          returnComp = <Header style={styles.header} text={this.props.text}></Header>;
          break;
        case 'para':
          returnComp = <Paragraph style={styles.paragraph} text={this.props.text}></Paragraph>;
          break;
        case 'title':
        returnComp = <LargeText style={styles.largeText} text={this.props.text}></LargeText>;
          break;
        case 'bold':
          returnComp = <Bold text={this.props.text}></Bold>;
          break;
    }
    
    return returnComp;

  }
}

const styles = StyleSheet.create({
  link: {
    fontSize: 30,
    margin: 30,
    borderWidth: 2,
    borderColor: 'black',

  },
  header: {
    fontSize: 16,
    margin: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  paragraph: {
    fontSize: 16,
    margin: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: 'green',
  },
  largeText: {
    fontSize: 18,
    margin: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: 'red',
  },
})

export default Intermediate;

/*
case 'bullet':
  			returnComp = <Bullet text={this.props.children}></Bullet>;
  			break;*/
