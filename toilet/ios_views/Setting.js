import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


class Setting extends Component{
	constractor(props){
		super(props);

	}

	render(){
		return (
			<View>
				<Text style={styles.text}>
					设置
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

export default Setting;
