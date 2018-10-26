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

    return children.map((child, index) => {
      // console.log(child)
      switch (typeof(child)) {
        case "string":
          return <Intermediate key={index} type = {nodeType} text = {child}></Intermediate>;
        case "object":
          //for links
          if (child.type == "link"){
            console.log(child)
            return (<Link key={index}>{child}</Link>);
          }
          else
          return <View key={index} >{getJSX(child)}</View>;
        default:
          return "no mapping available";
      }
    })
}

export default function renderInfo(label){
  return getJSX(varMapper(getURLindex(label)))
}

//https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9
