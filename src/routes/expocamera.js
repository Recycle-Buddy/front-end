import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

import colors from '../assets/colors.js'
import metrics from '../themes/metrics.js'

import FullWidthContainer from '../components/FullWidthContainer.js'
import Navbar from '../components/Navbar.js'

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

  retakePicture = () => {
    this.setState({image:null})
  }

  render() {
    const { hasCameraPermission } = this.state;

    const cameraView = (
      <View style={{ flex: 1 }}>
        <Camera
          ref={ref => { this.camera = ref; }}
          style={{ flex: 1 }} type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>

            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={this.snap}>
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}Take Picture{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>);

      const pictureView = (
        <View style={styles.pageContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
            style={{
              flex: .5,
              alignSelf: 'center',
              alignItems: 'center',
            }}
            // This is the function we need to create to send the data to the backend for ML and wait for a response!
            onPress={() => console.log('Pic button pressed.. this is where we will send the pic data to the backend')}>
              <Text
                style={styles.largeButton}>
              {' '}Send Picture To Recycle Buddy{' '}
              </Text>
            </TouchableOpacity>
            <Image
            style={{width: 450, height: 450, resizeMode: 'contain'}}
            source={this.state.image} />
            <TouchableOpacity
            style={{
              flex: .5,
              alignSelf: 'center',
              alignItems: 'center',
            }}
            onPress={this.retakePicture}>
              <Text
                style={styles.smallButton}>
              {' '}Re-take Picture{' '}
              </Text>
            </TouchableOpacity>
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
    flex: 1
  },
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  text: {
    color: colors.darktext
  },
  smallButton: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: colors.darktext,
    backgroundColor: colors.white,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  largeButton: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    color: colors.darktext,
    backgroundColor: colors.white,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default CameraExample;