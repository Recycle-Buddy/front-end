import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import Intermediate from '../src/components/Intermediate.js';
import Link from '../src/components/Link.js';
import getURLindex from './getURLfile'

import varMapper from './requireJSON.js'


function getJSX(node) {
    //obj format:
    //type : ta
    //children array of object or string
    let nodeType = node.type;
    let children = node.children;
    console.log("IN GETJSX FUNC\n");

    return children.map(child => {
      switch (typeof(child)) {
        case "string":
          return <Intermediate type = {nodeType} text = {child}></Intermediate>;
        case "object":
          //for links
          if (child.type == "link"){
            return <Link>{child}</Link>;
          }
          else
          return <View>{getJSX(child)}</View>;
        default:
          return "no mapping available";
      }
    })
}

export default function renderInfo(label){
  return getJSX(varMapper(getURLindex(label)))
}
