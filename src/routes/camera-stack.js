import React from 'react'
import { createStackNavigator } from 'react-navigation'
import {tabBarIcon} from '../assets/incons'


import MyCamera from './expo-camera'
import CameraIntro from './cameraintro'
import Results from './results'

const CameraStack = createStackNavigator(
  {
    CameraIntro,
    MyCamera,
    Results
  },
  {
    initialRouteName: 'CameraIntro'
  }
)

export default class CameraRoutes extends React.Component {
  static navigationOptions = {
    title: 'Camera',
    tabBarIcon: tabBarIcon('add-a-photo'),
    tabBarColor: '#3F51B5',
  }

  render () {
    return <CameraStack />
  }
}
