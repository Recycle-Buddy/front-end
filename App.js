import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { tabBarIcon, questionTreeSvg } from './src/assets/incons'

import Landing from './src/routes/landing'
import CameraRoutes from './src/routes/camera-stack'
import QuestionTree from './src/routes/questiontree/questiontree'

// Seth - Temporar to disable Warnings that show up with QuestionTree
console.disableYellowBox = true;

const MainStack = createMaterialBottomTabNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: () => ({
        title: "Home",
        tabBarIcon: tabBarIcon('home'),
        tabBarColor: '#3F51B5',
      })
    },
    Camera: {
      screen: CameraRoutes,
      navigationOptions: () => ({
        title: 'Camera',
        tabBarIcon: tabBarIcon('add-a-photo'),
        tabBarColor: '#3F51B5',
      })
    },
    QuestionTree: {
      screen: QuestionTree,
      navigationOptions: () => ({     
        title: 'Find your item',
        tabBarIcon: questionTreeSvg,
        // tabBarIcon: (
        //   <Image style={{ width: standardIconSize, height: standardIconSize }} source={images.recycleQuestionsWhiteSVG} />
        // ),
        tabBarColor: '#607D8B'
      })
    },
  },
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
