import React from 'react';
import { Button, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import colors from '../assets/colors.js'
import images from '../assets/images.js'
import metrics from '../themes/metrics.js'

class LargeTouchable extends React.PureComponent {
	render() {
		const { styles = {}, onPress, ...otherProps } = this.props;
		return (
			<TouchableNativeFeedback
				onPress={onPress}
				style={tStyles.touch}
				{...otherProps}
			>
				<View style={[tStyles.childWrapper, styles]}>
					{this.props.children}
				</View>
    	</TouchableNativeFeedback>
		);
	}
};

const tStyles = StyleSheet.create({
	touch: {
		flex: 1,
	},
	childWrapper: { 
		width: '100%',
		padding: 0,
		flex: 1,
		borderWidth: 2,
		borderRadius: 5,
    borderColor: colors.black,
    backgroundColor: colors.white,
	}
});

export default LargeTouchable;