import React from 'react'
import {Image, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native'
import images from '../../assets/images'
import {largerFontSize, largerLineheight} from '../../assets/styles'
import { standardMargin } from './../../assets/styles';

export default class TopBar extends React.PureComponent {
  render () {
    const { currentPath, navigateBack } = this.props
    if(currentPath.length === 0) {
      return null
    } else {
      return (
        <TouchableNativeFeedback onPress={navigateBack}>
          <View style={styles.topBar}>
            <Image style={styles.chevronLeft} source={images.chevron}/>
            <Text style={styles.topBarText}>{currentPath[currentPath.length-1]}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
  }
}

const styles = StyleSheet.create({
  chevronLeft: {
    width: 25,
    height: 25,
    margin: 5,
    transform: [{rotateY: '180deg'}]
  },
  topBar: {
    height: 35,
    marginTop: standardMargin,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  topBarText: {
    flex: 5,
    padding: 5,
    fontSize: largerFontSize,
    lineHeight: largerLineheight,
    textAlign: 'center'
  },
})
