import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
/*making a true constant value - usually use allcaps syntax 
sign to other engineers that variable is special*/

const reducer = (state, action) => {
	//state === object {red: number, green: number, blue: number}
	/*action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15} action -> howToChangeState*/
	switch (action.type) {
		case 'change_red':
			return state.red + action.payload > 255 || state.red + action.payload < 0 
				? state
				: {...state, red: state.red + action.payload };
						/*^^ here we are copy+pasting the existing value for blue and green plus changes to red */
		case 'change_green':
			return state.green + action.payload > 255 || state.green + action.payload < 0
				? state
				: {...state, green: state.green + action.payload };
		case 'change_blue':
			return state.blue + action.payload > 255 || state.blue + action.payload < 0
				? state
				: {...state, blue: state.blue + action.payload };
		default:
			return state;
	}
};
/*REDUCER - OR - FunctionThatManagesChangesToAnObject: 
	Will get called with two objects
	Arg #1: object that has all of our state in it
	Arg #2: object describes update that we want to make to obj #1 (Arg #1)
		We must look at Arg#2 and decide how to change Arg #1
	Two technicalities:
		1. We never change Arg #1 directly
		2. We must ALWAYS return a valeu to be used as Arg #1*/

const SquareScreen = () => {

	const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;
	/*restructuring ^^ state*/

	console.log(state);

	return (
		<View>
			<ColorCounter 
				color="Red" 
				onIncrease={()=> runMyReducer({ type: 'change_red', payload: COLOR_INCREMENT }) }
				onDecrease={()=> runMyReducer({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) } 
			/>

			<ColorCounter 
				color="Green" 
				onIncrease={()=> runMyReducer({ type: 'change_green', payload: COLOR_INCREMENT }) }
				onDecrease={()=> runMyReducer({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) } 
			/>

			<ColorCounter 
				color="Blue" 
				onIncrease={()=> runMyReducer({ type: 'change_blue', payload: COLOR_INCREMENT }) }
				onDecrease={()=> runMyReducer({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) }
			/>

			<View 
				style={{ 
				 height: 150, 
				 width: 150, 
				 backgroundColor: `rgb(${red}, ${green}, ${blue})`, 
				 marginHorizontal: 125, 
				 marginVertical: 50 
		 		}}
	 		/>

		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;