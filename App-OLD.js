import React from 'react';
import { createStackNavigator } from '../../../.cache/typescript/2.9/node_modules/@types/react-navigation';
import { BottomNavigation, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import images from './src/assets/images.js';

import Landing from './src/routes/landing.js';
import Search from './src/routes/search.js';
import Results from './src/routes/results.js';
import CameraIntro from './src/routes/cameraintro.js';
import QuestionTree from './src/routes/questiontree/questiontree.js';
import MyCamera from './src/routes/expo-camera.js';
import SendPicture from './src/routes/send-picture.js';

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
  state = {
    index: 0,
    routes: [
      { key: 'landing', title: 'Home', icon: 'home', color: '#3F51B5' },
      { key: 'camera', title: 'Camera', icon: 'add-a-photo', color: '#009688' },
      { key: 'questionTree', title: 'Question Tree', icon: images.recycleQuestions, color: '#607D8B' },
    ]
  }

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    landing: Landing,
    camera: CameraIntro,
    questionTree: QuestionTree,
  });

  render() {
    return (
      <PaperProvider theme={theme}>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
          labeled={false}
        />
      </PaperProvider>
    );
  }
}
