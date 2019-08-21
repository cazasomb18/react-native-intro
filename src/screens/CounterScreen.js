import React, { useReducer } from 'react';
				/*^^HOOK^^*/
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
	//state === object {counter: number};
	//action === {type: 'increment' || 'decrement', payload: 1 }
	switch (action.type) {
		case 'increment':
			return {...state, counter: state.counter + action.payload };
		case 'decrement':
			return {...state, counter: state.counter - action.payload  };

		default:
			return state;
	}
};

const CounterScreen = () => {

	const [state, runMyReducer] = useReducer(reducer, { counter: 0 });
	const { counter } = state;
	const styledCounter = <Text style={styles.numberStyle}>{state.counter}</Text>

	console.log(state);

	return (
		<View>
			<Button 
				title="Increase &uarr;" 
				onPress={() => { 
					runMyReducer({ type: 'increment', payload: 1});
			}}/>
			<Button 
				title="Decrease &darr;" 
				onPress={() => { 
					runMyReducer({ type: 'decrement', payload: 1});
			}}/>
			<Text style={styles.countStyle}>Current Count: {styledCounter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({

	numberStyle: {
		fontSize: 30,
		color: 'red'
	},
	countStyle: {
		fontSize: 30
	}
});

export default CounterScreen;