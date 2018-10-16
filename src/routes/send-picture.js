import React from 'react';
import { Button, StyleSheet, Image, View, ToastAndroid, ImageStore } from 'react-native';
import { ImageManipulator } from 'expo';

import colors from '../assets/colors.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar';

class SendPicture extends React.Component {
  state = {
    image: this.props.navigation.getParam('image', 'NO-Image')
  }
  sendPicture = () => {
    let resizedImage;
    // Seth - resizing and compressing the image before sending, other wise the base64string is
    //        too large to send and/or takes too long.
    // TODO: Seth - make the resize options variables that can be set with environment variables.
    // TODO: Seth - Trigger the load state when the image is sent to show a loading graphic.
    ImageManipulator.manipulate(this.state.image.uri, [{resize: {width: 500}}], { compress: 0.5 })
    .then((response) => {
      resizedImage = response;
      ImageStore.getBase64ForTag(
        resizedImage.uri,
        // getbase64ForTag SUCCESS callback
        base64String => {
          ToastAndroid.show("Waiting for Machine Learning Response...", ToastAndroid.SHORT);
          // THE URL NEEDS TO CHANGE DEPENDING ON THE NETWORK to work locally
          fetch('http://10.0.0.17:8888/images/v1/recognize', {
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
              console.log('Response: ', response.result[0]);
              
              if(!response){
                throw new Error('Response empty!');                
              }
              // Seth - Setting the response as part of the navigation params,
              //        efectively passing the state to the next route. We are also passing
              //        the resizedImage to be able to use it on the results route.
              // TODO: Remove LOADING state (set to null).
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
            });
        },
        // getbase64ForTag FAILURE callback
        error => console.error('ImageStore.getBase64ForTag: ', error)
      );
    })
    .catch(err => console.error('Manipulate Error: ', err));
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>
          <Button
            style={{height: '40%'}}
            title='Send To Recycle Buddy'
            // This is the function we need to create to send the data to the backend for ML and wait for a response!
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
        </View>
        <Navbar navigation={this.props.navigation} />
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
});

export default SendPicture;