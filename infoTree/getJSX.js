import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import LargeText from '../src/components/LargeText.js';
import Link from '../src/components/Link.js';
import Header from '../src/components/Header.js';
import Paragraph from '../src/components/Paragraph.js';
import Bold from '../src/components/Bold.js';
import getURLindex from './getURLfile'

import varMapper from './requireJSON.js'

var replace = {
    link :  "Link",
    heading : "Header",
    para : "Paragraph",
    bold : "Bold",
    title : "LargeText",
    bullet : "Paragraph",
    list : "Paragraph",
    olist: "Paragraph"
};


function getJSX(node) {
    //obj format:
    //type : ta
    //children array of object or string
    let nodeType = node.type;
    let children = node.children;

    //check dictionary to see what tag we should use
    let TagName = replace[nodeType];

    return children.map(child => {
      switch (typeof(child)) {
        case "string":
          return <TagName>{child}</TagName>
        case "object":
          //for links
          return <View>{getJSX(child)}</View>
        default:
          return "no mapping available"
      }
    })
}

export default function renderInfo(label){
  return getJSX(varMapper(getURLindex(label)))
}

//https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9
