import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import TWebView from './TWebView';


class Weather extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<View style={{flex:1}}>
				<TWebView url="http://123.57.39.116:3000/html/weather.html"></TWebView>
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
