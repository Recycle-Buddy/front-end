import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'

class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.imageContainer}>
          <Image source={images.magGlass}/>
        </View>
        <View style={styles.imageContainer}>
          <Image source={images.camera}/>
        </View>
        <View style={styles.imageContainer}>
          <Image source={images.recycleBook}/>
        </View>
        <View style={styles.imageContainer}>
          <Image source={images.gear}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute', 
    height: 85, 
    bottom: 0, 
    width: '100%', 
    flexDirection: 'row', 
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageContainer: {
    flex: .25,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Navbar;
