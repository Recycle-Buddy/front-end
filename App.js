import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation'

import { tabBarIcon, questionTreeSvg } from './src/assets/incons'

import Landing from './src/routes/landing'
import QuestionTree from './src/routes/questiontree/questiontree'
import MyCamera from './src/routes/expo-camera'
import CameraIntro from './src/routes/cameraintro'
import Results from './src/routes/results'
import SendPicture from './src/routes/send-picture'


// Seth - Temporary to disable Warnings that show up with QuestionTree
console.disableYellowBox = true;

//  --------------- Stack Navigators for CHILD views that are nested in the Main Tabs  ---------------
const CameraStack = createStackNavigator(
  {
    CameraIntro,
    MyCamera,
    SendPicture,
    Results
  },
  {
    initialRouteName: 'CameraIntro'
  }
)

CameraStack.navigationOptions = ({

})

// --------------- MAIN Tab Navigation  ---------------
const MainStack = createMaterialBottomTabNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: () => ({
        title: "Home",
        tabBarIcon: tabBarIcon('home'),
        tabBarColor: '#fff',
      })
    },
    Camera: {
      screen: CameraStack,
      navigationOptions: ({ navigation }) => {
        // Seth - Hide Tab bar when using the camera.
        let tabBarVisible = true;
        if(navigation.state.index === 1) tabBarVisible = false;
        
        return {
          title: 'Camera',
          tabBarIcon: tabBarIcon('add-a-photo'),
          tabBarColor: '#3F51B5',
          tabBarVisible,
        };
      }
    },
    QuestionTree: {
      screen: QuestionTree,
      navigationOptions: () => ({     
        title: 'Find your item',
        tabBarIcon: tabBarIcon('search'),
        // tabBarIcon: 'questionTreeSvg',
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
    activeColor: '#fff',
    inactiveColor: '#3e2465',
    // barStyle: { backgroundColor: '#694fad' },
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
      // <PaperProvider >
        <MainStack />
      // </PaperProvider>
    );
  }
}
