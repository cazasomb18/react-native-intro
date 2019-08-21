import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Child #1</Text>
			<View style={styles.viewTwoParent}>
				<Text style={styles.textTwoStyle}>Child #2</Text>
			</View>
			<Text style={styles.textThreeStyle}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: 'black',
		// position: 'absolute',
		// top: 0,
		// right: 0,
		// bottom: 0,
		// left: 0
		...StyleSheet.absoluteFillObject,
		/* ^^ same as commented out stuff above*/
		// height: 200,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between'
	},
	textOneStyle: {
		padding: 25,
		height: 100,
		width: 100,
		color: '#fff',
		backgroundColor: 'rgb(256,0,0)',
		alignSelf: 'flex-start'
	},
	textTwoStyle: {
		padding: 25,
		height: 100,
		width: 100,
		color: '#fff',
		backgroundColor: 'rgb(0,256,0)',
		fontSize: 18
		// position: 'relative',
		// marginVertical: 100
	},
	viewTwoParent: {
		height: 200,
		justifyContent: 'flex-end'
	},
	textThreeStyle: {
		padding: 25,
		height: 100,
		width: 100,
		color: '#fff',
		backgroundColor: 'rgb(256,0,256)'
	}
});

export default BoxScreen;