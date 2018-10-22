import * as React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { standardIconSize } from '../assets/styles'

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={standardIconSize}
  />
)

export default tabBarIcon;