import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return <View>
		<ImageDetail title="Forest" score={9} imageSource={require("../../assets/images/forest.jpg")} />
		<ImageDetail title="Beach" score={7} imageSource={require("../../assets/images/beach.jpg")} />
		<ImageDetail title="Mountain" score={4} imageSource={require("../../assets/images/mountain.jpg")} />
	</View>
};


const styles = StyleSheet.create({});

export default ImageScreen;