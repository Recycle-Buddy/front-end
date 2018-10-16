import React, { Component } from 'react';
import { WebView } from 'react-native';

class Link extends Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.href}}
        style={{marginTop: 20}}
      />
    );
  }
}