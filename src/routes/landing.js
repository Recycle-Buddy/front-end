import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'

class Landing extends React.Component {
  render() {
    return (
      <View style={styles.landing}>
        <View style={styles.container}>
          <Text style={styles.text}>Landing</Text>
          <Button
            title='Go To Search!!'
            onPress={() => this.props.navigation.navigate('Search')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Landing</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Landing</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Landing</Text>
        </View>
        <View style={styles.bottomRow}>
          <Image source={images.magglass} style={styles.bottomRowImages}/>
          <Image source={images.camera} style={styles.bottomRowImages}/>
          <Image source={images.recycleBook} style={styles.bottomRowImages}/>
          <Image source={images.gear} style={styles.bottomRowImages}/>
          <Text style={styles.text}>HERLLO</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.graygreen,
  },
  container: {
    flex: .3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  bottomRow: {
    flex: .2,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  bottomRowImages: {
    flex: .25
  },
  text: {
    color: colors.darktext
  }
});

export default Landing;
