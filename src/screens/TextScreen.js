import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput  } from 'react-native';

const TextScreen = () => {
	const [password, usePassword] = useState('');
	return (
		<View>
			<Text style={styles.password}>Enter Password: </Text>
			<TextInput 
				style={styles.input} 
				type='password'
				autoCapitalize='none' 
				autoCorrect={false} 
				value={password}
				onChangeText={text => usePassword(text)} 
			/>
			{password.length < 4 ?  <Text>Password must be 4 characters</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	},
	password: {
		color: 'blue'
	}
});

export default TextScreen;