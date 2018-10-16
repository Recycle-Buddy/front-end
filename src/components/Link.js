import React from 'react';
import { Linking, Text } from 'react-native';

import {standardStyle} from '../assets/styles.js';

class Link extends React.Component {

  constructor(){
      super();
      this.openLink = this.openLink.bind(this);
  }

  static propTypes = {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  }

  render() {

    const {text} = this.props;

    return(
      <Text style={styles.text} onPress={this.openLink}>
		{text}
      </Text>
    );
  }

  openLink() {
    const {href} = this.props;
    Linking.canOpenURL(href).then(supported => {
      if (supported) {
        Linking.openURL(this.props.href);
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