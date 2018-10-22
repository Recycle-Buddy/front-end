import React from 'react'
import { createStackNavigator } from 'react-navigation'
import {tabBarIcon} from '../assets/incons'


import MyCamera from './expo-camera'
import CameraIntro from './cameraintro'
import Results from './results'
import SendPicture from './send-picture'

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

export default class CameraRoutes extends React.Component {
  render () {
    return <CameraStack />
  }
}
