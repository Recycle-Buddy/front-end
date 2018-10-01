import React from 'react';
import { Button, Text, StyleSheet, Image, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { Svg, Camera, Permissions } from 'expo';

import colors from '../assets/colors.js'
import metrics from '../themes/metrics.js'

import LargeText from '../components/LargeText';
import Navbar from '../components/Navbar';

class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    image: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      this.camera.takePictureAsync()
        .then(photo => this.setState({ image: photo }))
    }
  }

sendPicture = async () => {
  // fetch('http://localhost:8080/images/v1/recognize', {
  fetch('https://postman-echo.com/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      imageBytes: this.state.image.uri
    })
  })
  .then((response) => { 
    // TODO: Display server response to user by directing 
    //       user to results page with server response data.
    ToastAndroid.show("Waiting for Machine Learning Response...", ToastAndroid.SHORT)
    // Seth - Here we are setting the response as part of the navigation params,
    //        efectively passing the state to the next route.
    this.props.navigation.navigate('Results', { machineLearningResponse: response });
  })
  .catch((error) => {
    console.error(error);
  });
}

  retakePicture = () => {
    this.setState({image:null});
  }

  render() {
    const { hasCameraPermission } = this.state;
    const { goBack } = this.props.navigation;
    const { Circle } = Svg;

    const cameraView = (
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
        <Camera
          ref={ref => { this.camera = ref; }}
          style={{ flex: 1 }}
          type={this.state.type}>
          <View
            style={styles.cameraView}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => goBack()} >
              <LargeText
                style={styles.cancelText}
                text="Cancel"
              />
            </TouchableOpacity>
              <TouchableOpacity
                style={styles.captureButton}
                onPress={this.snap} >
                <Svg height="100" width="100">
                  <Circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke={colors.white}
                    strokeWidth="5"
                    fill="none"
                  />
                  <Circle
                    cx="50"
                    cy="50"
                    r="25"
                    strokeWidth="0"
                    fill={colors.white}
                  />
                </Svg>
              </TouchableOpacity>
          </View>
        </Camera>
      </View>);

      const pictureView = (
        <View style={styles.pageContainer}>
          <View style={styles.contentContainer}>
            <Button
              style={{height: '40%'}}
              title='Send To Recycle Buddy'
              // This is the function we need to create to send the data to the backend for ML and wait for a response!
              onPress={this.sendPicture}
            />

            <Image
            style={{ flex:1, alignSelf: 'stretch', margin: 10 }}
            resizeMode={'contain'}
            source={this.state.image} />
            <Button
              title='Re-take Picture'
              onPress={this.retakePicture}
            />
          </View>
          <Navbar navigation={this.props.navigation} />
        </View>
      );

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if(!this.state.image){
      return cameraView;
    } else {
      return pictureView;
    }
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  cameraView: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'black',
    height: 90,
    width: '100%',
    justifyContent: 'flex-start',
    bottom: 0,
  },
  cancelButton: {
    width: '33%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
  cancelText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    margin: 0   
  },
  captureButton: {
    width: '33%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
});

export default CameraExample;