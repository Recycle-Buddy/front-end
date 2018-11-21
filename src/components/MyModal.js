import React from 'react'
import { StyleSheet, Modal, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'

import { standardStyle } from '../assets/styles'
import colors from '../assets/colors'
import images from '../assets/images'



class MyModal extends React.Component {
  render () {
    const {
      text,
      loader,
      onPress,
      visible,
    } = this.props;

    const cardCoverJSX = loader ? (
      <Card.Cover
        source={images.loader}
        style={standardStyle.largeCardIcon}
      />
      ) : null;
    
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => onRequestClose}>
        <View style={styles.modalViewOuter}>
          <View style={styles.modalViewInner}>
            <Card
              style={standardStyle.defaultCard}
              elevation={4}
              onPress={() => onPress}
            >
              {cardCoverJSX}
              <Card.Content>
                <Paragraph>
                  {loader ? null : "\n" }
                  {text}
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalViewOuter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff90'
  },
  modalViewInner: {
    backgroundColor: colors.white,
    width: '90%',
    borderRadius: 10,
  }
})

export default MyModal