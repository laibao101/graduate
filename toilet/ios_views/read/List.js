import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


class List extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<View>
				<Text style={styles.text}>
					列表
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

export default List;
