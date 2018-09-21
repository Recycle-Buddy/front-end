import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

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
        .then(photo => {
          console.log('Photo URI: ', photo.uri, 'Photo: ', photo)
          return photo;
        })
        .then(photo => {
          this.setState({ image: photo })
          return photo;
        })
        .then(photo => console.log('Photo: ', photo))
    }

  };

  render() {
    const { hasCameraPermission } = this.state;
    console.log('Render State: ', this.state.image)
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if(!this.state.image){
      return (
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
        </View>
      );
    } else {
      // Picture succesfully taken
      console.log('Picture Taken?: ', this.state.image)
      return (
        <View >
          <Image source={this.state.image} />
        </View>
      );
    }
  }
}

export default CameraExample;