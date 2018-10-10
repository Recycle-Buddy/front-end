import data from './data/recycleTree'
import {ToastAndroid} from 'react-native'

export function getDataWithPath(path = []) {
  const recycleTreeInfo = data.root
  return _getDataWithPath(recycleTreeInfo, path)
}

function _getDataWithPath(info, path) {
  if(path.length === 0) {
    return info
  } else {
    const [step, ...restPath] = path
    const newNode = info.children.find(node => node.data === step)
    if(newNode) {
      return _getDataWithPath(newNode, restPath)
    } else {
      ToastAndroid.show("this shouldn't happen", ToastAndroid.SHORT)
      return info
    }
  }
}
