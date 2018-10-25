import React from 'react'
import { StyleSheet, Modal, View } from 'react-native'
import { Button, Card, Paragraph } from 'react-native-paper'

import { standardStyle } from '../assets/styles'
import colors from '../assets/colors'



class MyModal extends React.Component {
  render () {
    const {
      text,
      visible,
      onRequestClose,
      onPress
    } = this.props;
    
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
              <Card.Content>
                <Paragraph>
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