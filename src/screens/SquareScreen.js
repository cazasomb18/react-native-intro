import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

/*making a true constant value - usually use allcaps syntax 
sign to other engineers that variable is special*/
const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	console.log(red, green, blue);

	const setColor = (color, change) => {
	// color === 'red', 'green', 'blue'
	// change === +15, -15
		switch(color) {
			case 'red':
				red + change > 255 || red + change < 0 ? null : setRed(red + change);
				return;

			case 'green':
				green + change > 255 || green + change < 0 ? null : setGreen(green + change);
				return;

			case 'blue':
				blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
				return;
		}
	};

	/*REDUCER - OR - FunctionThatManagesChangesToAnObject: 
		Will get called with two objects
		Arg #1: object that has all of our state in it
		Arg #2: object describes update that we want to make to obj #1 (Arg #1)
			We must look at Arg#2 and decide how to change Arg #1
		Two technicalities:
			1. We never change Arg #1 directly
			2. We must ALWAYS return a valeu to be used as Arg #1
		*/

	return (
		<View>
			<ColorCounter 
				color="Red" 
				onIncrease={()=> setColor ('red', COLOR_INCREMENT) }
				onDecrease={()=> setColor ('red', -1 * COLOR_INCREMENT) } 
			/>

			<ColorCounter 
				color="Green" 
				onIncrease={()=> setColor ('green',  COLOR_INCREMENT) }
				onDecrease={()=> setColor ('green', -1 * COLOR_INCREMENT) } 
			/>

			<ColorCounter 
				color="Blue" 
				onIncrease={()=> setColor ('blue',  COLOR_INCREMENT) }
				onDecrease={()=> setColor ('blue', -1 * COLOR_INCREMENT) } 
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