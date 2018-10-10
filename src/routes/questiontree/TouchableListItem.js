import React from 'react'
import {Image, StyleSheet, TouchableNativeFeedback, View} from 'react-native'
import LargeText from '../../components/LargeText'
import images from '../../assets/images'
import colors from '../../assets/colors'

export default class TouchableListItem extends React.PureComponent {
  onTouch = () => this.props.onTouch(this.props.name)
  render () {
    const {name = '', hasChildren} = this.props
    return (
      <TouchableNativeFeedback onPress={this.onTouch} key={name}>
        <View style={styles.listItem}>
          <LargeText text={name} style={styles.text}/>
          {hasChildren ? <Image style={styles.chevron} source={images.chevron}/> : null}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  chevron: {
    width: 20,
    height: 40,
    marginTop: 8,
  },
})
