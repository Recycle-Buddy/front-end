import React from 'react'
import {Image, StyleSheet, TouchableNativeFeedback, View} from 'react-native'
import { Surface, Text } from 'react-native-paper'

import LargeText from '../../components/LargeText'

import images from '../../assets/images'
import colors from '../../assets/colors'
import { standardMargin } from '../../assets/styles';

export default class TouchableListItem extends React.PureComponent {
  onTouch = () => this.props.onTouch(this.props.name)
  render () {
    const {hasChildren, displayName, name} = this.props
    return (
      <TouchableNativeFeedback onPress={this.onTouch} key={name}>
        <View style={styles.listItem}>
          <Surface style={styles.surface}>
            <Text style={styles.text}>{displayName}</Text>
              {hasChildren ? <Image style={styles.chevron} source={images.chevron}/> : null}
          </Surface>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    paddingTop: 3,
    // marginTop: standardMargin / 4,
    // marginBottom: standardMargin / 4,
  },
  chevron: {
    width: 20,
    height: 40,
  },
  text : {
    fontSize: 18,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  surface: {
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    paddingTop: 0,
    paddingLeft: 5,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    // borderWidth: 1,
    borderColor: colors.black
  }
})
