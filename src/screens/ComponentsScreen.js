import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
/*Text - primitive react element, used to show basic content on screen*/

const ComponentsScreen = () => {
	const yourname = <Text style={styles.nameStyle}>Clayton</Text>
	const greeting = <Text style={styles.subHeaderStyle}>My name is {yourname}</Text>;

	return (
		<View>
			<Text style={styles.textStyle}>Getting Started with React Native!</Text>
			{greeting}
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	subHeaderStyle: {
		fontSize: 20
	},
	nameStyle: {
		color: 'red'
	}
});

export default ComponentsScreen;