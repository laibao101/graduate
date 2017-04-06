import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


class Weather extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<View>
				<Text style={styles.text}>
					天气
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text:{
		fontSize:60
	}
});

export default Weather;
