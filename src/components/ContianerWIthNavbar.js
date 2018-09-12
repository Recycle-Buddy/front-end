import React from 'react';

import {standardStyle, View} from '../assets/styles.js';

import Navbar from '../components/Navbar.js'

class ContianerWIthNavbar extends React.Component {
  render() {
    return (
    // Seth - Using the array notation here for style allows us to pass
    //        styles in from the props and combine them with the inline
    //        styles defined in this components stylesheet.
    <View style={standardStyle.pageContainer}>
        <View style={standardStyle.contentContainer}>
            {this.props.children}
        </View>
        <Navbar navigation={this.props.navigation}/>
    </View> 
    );
  }
}

export default ContianerWIthNavbar;