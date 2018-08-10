import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LargeText from './../components/LargeText';

class Search extends React.Component {
  render() {
    return (
      <View
        style={styles.search}>
        <LargeText>Search</LargeText>
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
