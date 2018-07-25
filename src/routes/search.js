import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Search extends React.Component {
  render() {
    return (
      <View
        style={styles.search}>
        <Text>Search</Text>
        <Button
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Search;
