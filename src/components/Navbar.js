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
          <Image style={styles.image} source={images.home}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={styles.imageContainer}
          onPress={() => this.props.navigation.navigate('Camera')}>
          <Image style={styles.image} source={images.camera}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={styles.imageContainer}
          onPress={() => this.props.navigation.navigate("QuestionTree")}>
          <Image style={styles.image} source={images.recycleQuestions}/>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          style={styles.imageContainer}
          onPress={() => ToastAndroid.show("Not there yet!", ToastAndroid.SHORT)}>
          <Image style={styles.image} source={images.listSymbol}/>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    height: 85,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    maxWidth: 50,
    maxHeight: 50
  }
});

export default Navbar;
