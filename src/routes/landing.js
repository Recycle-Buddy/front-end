import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Landing extends React.Component {
  render() {
    return (
      <View
        style={styles.landing}>
        <Text>Landing</Text>
        <Button
          title='Go To Search'
          onPress={() => this.props.navigation.navigate('Search')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Landing;
