import { createMaterialBottomNavigator } from '../../../../../.cache/typescript/2.9/node_modules/@types/react-navigation-material-bottom-tabs'

import Landing from '../routes/landing'
import CameraStack from '../routes/camera-stack'
import QuestionTree from '../routes/questiontree/questiontree'



export default createMaterialBottomNavigator({
  Landing: { screen: Landing },
  Camera: { screen: CameraStack },
  QuestionTree: { screen: QuestionTree },
})