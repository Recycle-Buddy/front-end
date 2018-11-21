import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {standardStyle} from '../assets/styles';

import Navbar from './Navbar'

class ContainerWithNavbar extends React.Component {
  render() {
    const containerStyles = [standardStyle.contentContainer, this.props.noPadding && style.noPadding]
    return (
    <View style={standardStyle.pageContainer}>
      <ScrollView style={containerStyles} contentContainerStyle={standardStyle.scrollViewItems}>
        {this.props.children}
      </ScrollView>
      <Navbar navigation={this.props.navigation}/>
    </View>
    );
  }
}

export const style = StyleSheet.create({
  noPadding: {
    padding: 0,
  }
})
export default ContainerWithNavbar;
