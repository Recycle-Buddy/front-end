import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'

class Landing extends React.Component {
  render() {
    return (
      <View style={styles.landing}>
        <View style={styles.vContainer}>
          <View style={styles.hContainer}>
            <Button
              title='Go To Search!!'
              onPress={() => this.props.navigation.navigate('Search')}
            />
          </View>
        </View>
        <View style={styles.vContainer}>
          <View style={styles.hContainer}>
            <Text style={styles.text}>Almost half of the food in the U.S. goes to waste - approximately 3,000 pounds per second.</Text>
          </View>
        </View>
        <View style={styles.vContainer}>
          <View style={styles.hContainer}>
          <Image source={images.recycleSymbol}/>
            <Text style={styles.text}>Find local recycleing center</Text>
          </View>
        </View>
        <View style={styles.vContainer}>
          <View style={styles.hContainer}>
          <Image source={images.camera}/>
            <Text style={styles.text}>Autodetect item</Text>
          </View>
        </View>
        <View style={styles.vContainer}>
          <View style={styles.bottomRow}>
            <View style={styles.imageContainer}>
              <Image source={images.magGlass}/>
            </View>
            <View style={styles.imageContainer}>
              <Image source={images.camera}/>
            </View>
            <View style={styles.imageContainer}>
              <Image source={images.recycleBook}/>
            </View>
            <View style={styles.imageContainer}>
              <Image source={images.gear}/>
            </View>
          </View>
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
    backgroundColor: colors.transparent,
  },
  vContainer: {
    flex: .2,
    flexDirection: 'row'
  },
  hContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bottomRow: {
    flex: 1,
    marginTop: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageContainer: {
    flex: .25,
    margin: 10
  },
  text: {
    color: colors.darktext
  }
});

export default Landing;
