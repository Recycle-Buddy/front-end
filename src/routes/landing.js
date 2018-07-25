import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors'

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
        <View style={styles.bottomrow}>
          <Text style={styles.text}>Landing</Text>
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
  bottomrow: {
    flex: .2,
    flexDirection: 'row'
  },
  text: {
    color: colors.darktext
  }
});

export default Landing;
