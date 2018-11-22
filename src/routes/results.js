import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper'

import colors from '../assets/colors.js';
import images from '../assets/images.js';
import { standardStyle } from '../assets/styles'
import renderInfo from '../../infoTree/getJSX.js';
import MyModal from '../components/MyModal'

class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  }

  state = {
    errorModal: false,
  }

  render() {
    const { navigation } = this.props;
    const response = navigation.getParam('machineLearningResponse', 'NO-response');
    const resizedImage = navigation.getParam('resizedImage', 'NO-image');
    
    if (!response.result || !response.result[0].label){
      this.setState({
        errorModal: `There was no response from the Machine Learning API. \n
        Please try taking another picture.` }, () => {
          setTimeout(() => this.setState({ errorModal: false }), 5000);
        });
    }
    
    if(response.error){
      this.setState({
        errorModal: response.error.message }, () => {
          setTimeout(() => this.setState({ errorModal: false }), 5000);
        });
    }
        
    let label = response.result[0].label.toLowerCase();
    // Seth - label is currently hard coded as the AutoML Model does not have enough, or the proper labels.
    label = 'Cans - Aerosol';

    // Depending on the label, change the icon to be shown.
    let icon;
    const iconRecycleMatches = ['cardboard', 'metal', 'glass', 'plastic', 'paper']

    if (iconRecycleMatches.includes(label.toLowerCase())){
      icon = images.recycleSymbol;
    } else {
      icon = images.trashCan;
    }

    return (
        <ScrollView style={{ flex: 1, paddingVertical: 0 }}>

          <MyModal
            visible={this.state.errorModal}
            text={this.state.errorModal}
            onRequestClose={() => this.setState({ sendingPicture: false })}
            onPress={null}
            loader
          />

          <Button
            style={standardStyle.defaultButton}
            icon="add-a-photo"
            mode="contained"
            onPress={() => this.props.navigation.navigate('MyCamera')}
          >
            Take Another Picture
          </Button>
        <Card
          style={standardStyle.importantCard}
          elevation={4}
        >
          <Card.Cover
            source={icon}
            style={standardStyle.smallCardIcon}
          />
          <Card.Content>
            {renderInfo(label)}
          </Card.Content>
        </Card>

      </ScrollView>   
    );
  }
}

export default Results;
