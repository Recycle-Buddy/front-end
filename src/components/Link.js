import React from 'react';
import { Linking, Text, StyleSheet} from 'react-native';

import {standardStyle} from '../assets/styles.js';

class Link extends React.Component {

  constructor(){
      super();
      this.openLink = this.openLink.bind(this);
  }

  render() {

    const {children} = this.props;
    const {text} = children;

    return(
      <Text style={styles.text} onPress={this.openLink}>
		    {text}
      </Text>
    );
  }

  openLink() {
    const {children} = this.props;
    const {href} = children;
    Linking.canOpenURL(href).then(supported => {
      if (supported) {
        Linking.openURL(href);
      } else {
        return;
      }
    });
  }
}

export default Link

const styles = StyleSheet.create({
  text: {
    color: '#acacac',
    fontWeight: 'bold'
  }
});
