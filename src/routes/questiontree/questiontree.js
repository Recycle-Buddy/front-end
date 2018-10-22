import React from 'react';
import { ToastAndroid, StyleSheet, FlatList, View, Image } from 'react-native';
import ContainerWithNavbar from '../../components/ContainerWithNavbar';
import { getDataWithPath } from '../../utils'

import TopBar from './TopBar'
import TouchableListItem from './TouchableListItem'

import images from '../../assets/images'
import tabBarIcon from '../../assets/incons'
import {standardIconSize} from '../../assets/styles.js'
console.log(standardIconSize)

class QuestionTree extends React.Component {
  static navigationOptions = {
    title: 'Find your item',
    tabBarIcon: (
      <Image style={{ width: standardIconSize, height: standardIconSize }} source={images.recycleQuestions} />
    ),
    tabBarColor: '#607D8B'
  }
  
	constructor() {
		super()
    this.state = {currentPath: [], currentNode: getDataWithPath([]) }
	}
	navigateForward = (name) => {
		const currentPath = [...this.state.currentPath]
    currentPath.push(name)
		const currentNode = getDataWithPath(currentPath)
		if(!currentNode.children.length) {
      ToastAndroid.show('will go to info page for ' +
	      currentPath[currentPath.length-1], ToastAndroid.SHORT)
		} else {
      this.setState({currentPath, currentNode})
    }
	}
	navigateBack = () => {
    const currentPath = [...this.state.currentPath]
    currentPath.pop()
    const currentNode = getDataWithPath(currentPath)
    this.setState({currentPath, currentNode})
  }
	render() {
		const {currentPath, currentNode} = this.state
		return (
			<View flex={1}>
				<TopBar top={currentPath.length === 0} currentNode={currentNode} navigateBack={this.navigateBack}/>
        <FlatList
          data={currentNode.children}
          style={styles.list}
          renderItem={({item}) =>
	          <TouchableListItem
		          name={item.data}
              displayName={item.label}
		          hasChildren={item.children.length > 0}
		          onTouch={this.navigateForward}/>
          }
        />
      </View>
		)
	}
}


const styles = StyleSheet.create({
	list: {
		flex: 1,
		width: '100%'
	},
})

export default QuestionTree
