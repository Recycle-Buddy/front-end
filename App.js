import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import Landing from './src/routes/landing';
import Search from './src/routes/search';
import Results from './src/routes/results';
import CameraIntro from './src/routes/cameraintro';
import QuestionTree from './src/routes/questiontree/questiontree';
import MyCamera from './src/routes/expo-camera';
import SendPicture from './src/routes/send-picture';

const RootStack = createStackNavigator(
  {
    Landing: Landing,
    Search: Search,
    Results: Results,
    CameraIntro: CameraIntro,
    Camera: MyCamera,
    SendPicture: SendPicture,
    QuestionTree: QuestionTree,
  },
  {
    initialRouteName: 'Landing',
  }
);

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'darkgreen',
    background: 'white',
    surface: 'white',
    text:'black',
    disabled:'gray',
    backdrop: 'white'
  },
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <RootStack />
      </PaperProvider>
    );
  }
}
