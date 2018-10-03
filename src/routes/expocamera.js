import React from 'react';
import { Button, Text, StyleSheet, Image, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { Svg, Camera, Permissions, ImageManipulator, FileSystem } from 'expo';

import { Base64 } from 'js-base64';

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

  // fileResizeAndBase64 = async (uri) => {
  //   const resized = await ImageResizer.createResizedImage(uri, 1000, 1000, 'JPEG', 80);
  //   console.log('Resized Image URI: ', resized);
  //   const content = await FileSystem.readAsStringAsync(resized);
  //   return Base64.encode(content);
  // }



  sendPicture = () => {
    console.log('Sent URI: ', this.state.image.uri);
    ImageManipulator.manipulate(this.state.image.uri, [{width: 500}], { compress: 0.8 })
    .then((response) => {
      console.log('Resized URI: ', response.uri);
      return FileSystem.readAsStringAsync(response.uri);
    })
    .then(fileBuffer => {
      return Base64.encode(fileBuffer);
    })
    .then(base64String => {
      ToastAndroid.show("Waiting for Machine Learning Response...", ToastAndroid.SHORT);
      fetch('https://postman-echo.com/post', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: {
            imageBytes: base64String,
          }
        })
      })
      .then((response) => {
        // Seth - Here we are setting the response as part of the navigation params,
        //        efectively passing the state to the next route.
        this.props.navigation.navigate('Results', { machineLearningResponse: response });
      })
      .catch((fetchError) => {
        console.error(fetchError);
      });
    })
    .catch(err => console.log(err));
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