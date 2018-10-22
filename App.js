import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import images from './src/assets/images.js';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Landing from './src/routes/landing'
import CameraRoutes from './src/routes/camera-stack'
import QuestionTree from './src/routes/questiontree/questiontree'

const MainStack = createMaterialBottomTabNavigator(
  {
    Landing: { screen: Landing },
    Camera: { screen: CameraRoutes },
    QuestionTree: { screen: QuestionTree },
  },
  // {
  //   Landing,
    // CameraStack,
  //   QuestionTree,
  // },
  {
    shifting: false,
    initialRouteName: 'Landing',
    labeled: false,
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
)

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'darkgreen',
    background: 'white',
    surface: 'white',
    text: 'black',
    disabled: 'gray',
    backdrop: 'white'
  },
};


export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <MainStack />
      </PaperProvider>
    );
  }
}
