import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Svg, Camera, Permissions } from 'expo'

import colors from '../assets/colors'

import LargeText from '../components/LargeText';
import MyModal from '../components/MyModal'

class MyCamera extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  }
  
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    image: null,
    takingPicture: false,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      this.setState({ takingPicture: true}, () => {
        this.camera.takePictureAsync()
        .then(image => {
          this.setState({ takingPicture: false }, () => {
            this.props.navigation.navigate('SendPicture', {
              image: image,
            });
          });
        });
      })
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    const { Circle } = Svg;
    const { goBack } = this.props.navigation;

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
            <MyModal
              visible={this.state.takingPicture}
              text={`Taking Photo...`}
              onRequestClose={() => this.setState({ takingPicture: false })}
              onPress={null}
            />
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