import React from 'react';
import { createStackNavigator } from 'react-navigation';


import Landing from './src/routes/landing';
import Search from './src/routes/search';
import Results from './src/routes/results';
import CameraIntro from './src/routes/cameraintro';
import QuestionTree from './src/routes/questiontree/questiontree';
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
    QuestionTree: QuestionTree,
  },
  {
    initialRouteName: 'Results',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
