import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Svg, Camera, Permissions } from 'expo';

import colors from '../assets/colors.js'

import LargeText from '../components/LargeText';

class MyCamera extends React.Component {
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
        .then(image => {
          // this.setState({ image: image });
          this.props.navigation.navigate('SendPicture', {
            image: image,
          });
        });
    }
  }

  // sendPicture = () => {
  //   let resizedImage;
  //   // Seth - resizing and compressing the image before sending, other wise the base64string is
  //   //        too large to send and/or takes too long.
  //   // TODO: Seth - make the resize options variables that can be set with environment variables.
  //   // TODO: Seth - Trigger the load state when the image is sent to show a loading graphic.
  //   ImageManipulator.manipulate(this.state.image.uri, [{resize: {width: 500}}], { compress: 0.5 })
  //   .then((response) => {
  //     resizedImage = response;
  //     ImageStore.getBase64ForTag(
  //       resizedImage.uri,
  //       // getbase64ForTag SUCCESS callback
  //       base64String => {
  //         ToastAndroid.show("Waiting for Machine Learning Response...", ToastAndroid.SHORT);
  //         fetch('http://192.168.0.23:8080/images/v1/recognize', {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             image: {
  //               imageBytes: base64String,
  //             }
  //           })
  //         })
  //           .then((response) => response.json())
  //           .then(response => {
  //             // Seth - Setting the response as part of the navigation params,
  //             //        efectively passing the state to the next route. We are also passing
  //             //        the resizedImage to be able to use it on the results route.
  //             // TODO: Remove LOADING state (set to null).
  //             this.props.navigation.navigate('Results', {
  //               machineLearningResponse: response,
  //               resizedImage: resizedImage
  //             });
  //           })
  //           .catch((fetchError) => {
  //             console.error('Fetch Error: ', fetchError);
  //           });
  //       },
  //       // getbase64ForTag FAILURE callback
  //       error => console.log('ImageStore.getBase64ForTag: ', error)
  //     );
  //   })
  //   .catch(err => console.log('Manipulate Error: ', err));
  // }

  // retakePicture = () => {
  //   // Seth - Reset the image state which triggers the render to use the cameraView JSX
  //   // this.setState({image:null});

  // }

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

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return cameraView;
    }
  }
}

const styles = StyleSheet.create({
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

export default MyCamera;