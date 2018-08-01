import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Results extends React.Component {
  render() { //I'm not sure how to get the spacings right for this. Right now it looks kinda ugly.
    return (
      <View
        style={styles.search}>
        <Text style={styles.textWithMargin}>That is a tin can!</Text>
        <Text style={styles.textWithMargin}>Recycle it</Text> 
        <Button
          style={styles.textWithMargin}
          title='Go To Landing'
          onPress={() => this.props.navigation.navigate('Landing')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  textWithMargin: {
    margin: 16,
  },
});

export default Results;
