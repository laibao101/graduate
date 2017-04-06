import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


class Read extends Component{
	constractor(props){
		super(props);

	}

	render(){
		return (
			<View>
				<Text style={styles.text}>
					阅读
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

export default Read;
