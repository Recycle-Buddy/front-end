import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Landing from './src/routes/landing.js';
import Search from './src/routes/search.js';
import Results from './src/routes/results.js';
import CameraIntro from './src/routes/cameraintro.js';
import MyCamera from './src/routes/expo-camera';
import SendPicture from './src/routes/send-picture';


// To add another Route just create it in the routes folder
//        then import above and add to the RootStack below.
const RootStack = createStackNavigator(
  {
    Landing: Landing,
    Search: Search,
    Results: Results,
    CameraIntro: CameraIntro,
    Camera: MyCamera,
    SendPicture: SendPicture,
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
