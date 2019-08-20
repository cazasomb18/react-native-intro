import React, { useState } from 'react';
				/*^^HOOK^^*/
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Button 
				title="Increase" 
				onPress={() => { 
					/*counter++;*/
					setCounter(counter + 1);
					console.log(counter);
			}}/>
			<Button 
				title="Decrease" 
				onPress={() => { 
					// counter--; 
					setCounter(counter - 1);
					console.log(counter);
			}}/>
			<Text>Current Count: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;