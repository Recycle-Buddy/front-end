import React from 'react';
import { Text } from 'react-native';

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
  	console.log(componentType);

    switch(componentType){
        case 'link':
        returnComp = <Link 
                href = {this.props.href}
                text = {this.props.text}
                >
              </Link>;
        break;
        case 'heading': 
          returnComp = <Header text={this.props.text}></Header>;
          break;
        case 'para':
          returnComp = <Paragraph text={this.props.text}></Paragraph>;
          break;
        case 'title':
          returnComp = <LargeText text={this.props.text}></LargeText>;
          break;
        case 'bold':
          returnComp = <Bold text={this.props.text}></Bold>;
          break;
    }
    
    return returnComp;

  }
}

export default Intermediate;

/*
case 'bullet':
  			returnComp = <Bullet text={this.props.children}></Bullet>;
  			break;*/
