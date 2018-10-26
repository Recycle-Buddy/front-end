import React from 'react';
import { ToastAndroid, StyleSheet, FlatList, View } from 'react-native';
import { getDataWithPath } from '../../utils'

import TopBar from './TopBar'
import TouchableListItem from './TouchableListItem'

class QuestionTree extends React.Component {
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
			<View style={{flex:1, paddingTop: 40}}>
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
