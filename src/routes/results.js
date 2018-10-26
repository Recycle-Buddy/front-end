import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
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
    let label = response.result[0].label;
    console.log('Response: ', response.result[0]);
    const resizedImage = navigation.getParam('resizedImage', 'NO-image');
    label = "Boxes - Cardboard";

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

    return (
      <View flex={1}>
        {/* <View style={styles.instruction}>
          <Image
            style={styles.icon}
            source={icon}
          />
        </View> */}
        <View style={styles.instruction}>
          <Button
            title='Take Another Picture'
          />
          <Button
            style={standardStyle.defaultButton}
            icon="add-a-photo"
            mode="contained"
            onPress={() => this.props.navigation.navigate('MyCamera')}
          >
            Take Another Picture
        </Button>

        </View>

        {renderInfo(label)}
      </View>   
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
