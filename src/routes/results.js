import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Paper, Button } from 'react-native-paper'

import colors from '../assets/colors.js';
import images from '../assets/images.js';
import metrics from '../themes/metrics.js';
import { standardStyle } from '../assets/styles'
import renderInfo from '../../infoTree/getJSX.js';

class Results extends React.Component {
  static navigationOptions = {
    title: 'Results',
  }

  render() {
    // Seth - This is how to pass state between routes with getParam from react-navigation.
    const { navigation } = this.props;
    const response = navigation.getParam('machineLearningResponse', 'NO-response');
    // const label = "Dish Washers";
    // let response = response.result[0] = {label: 'test'};
    // let label = response.result[0].label;
    // console.log('Response: ', response.result[0]);
    console.log('Response: ', response);
    const resizedImage = navigation.getParam('resizedImage', 'NO-image');
    let label = "Cans - Aerosol";

    // let icon;
    // switch(label.toLowerCase()) {
    //   case 'cardboard':
    //   case 'metal':
    //   case 'glass':
    //   case 'plastic':
    //   case 'paper':
    //     icon = images.recycleSymbol;
    //     break;
    //   case 'trash':
    //     icon = images.trashCan;
    //     break;
    // }
    // console.log(renderInfo(label));
    return (
        <ScrollView style={{ flex: 1, paddingVertical: 0 }}>
        {/* <View style={styles.instruction}>
          <Image
            style={styles.icon}
            source={icon}
          />
        </View> */}
          <Button
            style={standardStyle.defaultButton}
            icon="add-a-photo"
            mode="contained"
            onPress={() => this.props.navigation.navigate('MyCamera')}
          >
            Take Another Picture
          </Button>
        {renderInfo(label)}
      </ScrollView>   
    );
  }
}

const containerFlex = 1;

const styles = StyleSheet.create({
  results: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  resizedImage: {
    flex: 1,
    alignSelf: 'center',
    margin: 10,
    height: 250
  },
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  headerUpper: {
    fontSize: 15,
    fontStyle: 'italic',
    margin: 2,
  },
  instruction: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10
  },
  instructionHeader: { flex: 2 },
  icon: {
    width: 50,
    alignSelf: 'center'
  },
});

export default Results;
