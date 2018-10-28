import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import Intermediate from '../src/components/Intermediate.js';
import Link from '../src/components/Link.js';
import LargeText from '../src/components/LargeText.js';
import labelToFillMapping from './labelToFillMapping.js';
import requireDir from 'require-dir'

var content = requireDir('./out');
for (var key in content) {
  content[key](app);
}


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
  //const URLindex = getURLindex(label);
  //if (URLindex === -1) return errorPage();
  //translate label to content filename
  /*for (let obj in labelToFillMapping){
    if (obj.label === label) {
      var mapped = obj.value;
      break;
    }
  }*/
  for (let obj in labelToFillMapping){
    if (obj.label === label) {
      var mapped = obj.value;
      break;
    }
  }
  if (!mapped) return errorPage();
  return getJSX(content[mapped]);
}

function errorPage(){
  const errorMessage = "Error: Item not found. Please take another picture and try again";
  return <LargeText text={errorMessage}></LargeText>;
}
