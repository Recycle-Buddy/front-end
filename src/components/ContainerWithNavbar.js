import React from 'react';
import {View, ScrollView} from 'react-native';

import {standardStyle} from '../assets/styles.js';

import Navbar from '../components/Navbar.js'

class ContainerWithNavbar extends React.Component {
  render() {
    return (
    // Seth - Using the array notation here for style allows us to pass
    //        styles in from the props and combine them with the inline
    //        styles defined in this components stylesheet.
    <View style={standardStyle.pageContainer}>
      <ScrollView style={standardStyle.contentContainer} contentContainerStyle={standardStyle.scrollViewItems}>
        {this.props.children}
      </ScrollView>
      <Navbar navigation={this.props.navigation}/>
    </View> 
    );
  }
}

export default ContainerWithNavbar;