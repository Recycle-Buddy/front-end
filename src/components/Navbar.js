import React from 'react';
import { StyleSheet, View, Image, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'

class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <TouchableNativeFeedback
          style={styles.imageContainer}
          onPress={() => this.props.navigation.navigate("Landing")}>
          <Image source={images.home}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback 
          style={styles.imageContainer}
          onPress={() => this.props.navigation.navigate('CameraIntro')}>
          <Image source={images.camera}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback 
          style={styles.imageContainer}
          onPress={() => ToastAndroid.show("Not there yet!", ToastAndroid.SHORT)}>
          <Image source={images.recycleQuestions}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback 
          style={styles.imageContainer}
          onPress={() => ToastAndroid.show("Not there yet!", ToastAndroid.SHORT)}>
          <Image source={images.listSymbol}/>
        </TouchableNativeFeedback>
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
