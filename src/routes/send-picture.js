import React from 'react';
import { Button, StyleSheet, Image, View, ImageStore, Modal } from 'react-native';
import { ImageManipulator } from 'expo';

import colors from '../assets/colors'
import metrics from '../themes/metrics'

import LargeText from '../components/LargeText';
import MyModal from '../components/MyModal'

class SendPicture extends React.Component {
  state = {
    image: this.props.navigation.getParam('image', 'NO-Image'),
    sendingPicture: false,
  }
  sendPicture = () => {
    let resizedImage;
    // Seth - resizing and compressing the image before sending, other wise the base64string is too large to send and/or takes too long.
    // TODO: Seth - Trigger the load state when the image is to show a loading graphic.
    ImageManipulator.manipulate(this.state.image.uri, [{resize: {width: 500}}], { compress: 0.5 })
    .then((response) => {
      resizedImage = response;
      ImageStore.getBase64ForTag(
        resizedImage.uri,
        // getbase64ForTag SUCCESS callback
        base64String => {
          // THE URL NEEDS TO CHANGE DEPENDING ON THE NETWORK to work locally
          this.setState({sendingPicture: true});
         /* fetch('http://10.0.0.17:8899/images/v1/recognize', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              image: {
                imageBytes: base64String,
              }
            })
          })
            .then((response) => response.json())
            .then(response => {
              this.setState({sendingPicture: false});
              console.log('Response: ', response.result[0]);
              
              if(!response){
                throw new Error('Response empty!');                
              }
              // Seth - Setting the response as part of the navigation params,
              //        efectively passing the state to the next route. We are also passing
              //        the resizedImage to be able to use it on the results route.
              if(response.error){
                throw new Error(response.message);
              }
              this.props.navigation.navigate('Results', {
                machineLearningResponse: response,
                resizedImage: resizedImage
              });
            })
            .catch((fetchError) => {
              console.error('Fetch Error: ', fetchError);
            });*/
        },
        // getbase64ForTag FAILURE callback
        error => console.error('ImageStore.getBase64ForTag: ', error)
      );
    })
    .catch(err => console.error('Manipulate Error: ', err));
    setTimeout(() => this.setState({ sendingPicture: false }, ()=> {
      this.props.navigation.navigate('Results', {
        // machineLearningResponse: response,
        resizedImage: resizedImage
      });
    }), 500);
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>
          <Button
            style={{height: '40%'}}
            title='Send To Recycle Buddy'
            onPress={this.sendPicture}
          />

          <Image
          style={styles.image}
          resizeMode={'contain'}
          source={this.state.image} />
          <Button
            title='Re-take Picture'
            onPress={() => goBack()}
          />
          <MyModal
            visible={this.state.sendingPicture}
            text={`Sent to AutoML Machine Learning API. \n
             Waiting for Response...`}
            onRequestClose={() => this.setState({ sendingPicture: false })}
            onPress={null}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10
  },
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  modalText: {
    // textAlign: 'center',
    // fontWeight: 'normal',
  },
  modalViewOuter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff90'
  },
  modalViewInner: {
    // marginTop: '10%',
    backgroundColor: colors.white,
    width: '90%',
    // minHeight: 275,
    borderRadius: 10,
  }
});

export default SendPicture;