import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors'

class Landing extends React.Component {
  render() {
    return (
      <View style={styles.landing}>
        <View>
          <Text>Landing</Text>
          <Button
            title='Go To Search!!'
            onPress={() => this.props.navigation.navigate('Search')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.graygreen,
  },
});

export default Landing;
