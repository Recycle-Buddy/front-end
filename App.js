import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Landing from './src/routes/landing.js';
import Search from './src/routes/search.js';
import Results from './src/routes/results.js';


// Seth - I have left this App.js in the root or now since it
//        is the entry point and since we are using create-react-app
//        it is not eazy to change the entry point so this file
//        should not be moved. (Please correct me if someone knows
//        how to move it, as it should probably go into our SRC folder.)

// Seth - To add another Route just create it in the routes folder
//        then import above and add to the RootStack below.
const RootStack = createStackNavigator(
  {
    Landing: Landing,
    Search: Search,
    Results: Results,
  },
  {
    initialRouteName: 'Landing',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
