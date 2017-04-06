import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


class ToiletPage extends Component{
	constractor(props){
		super(props);

	}

	render(){
		return (
			<View>
				<Text style={styles.text}>
					卫生间
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

export default ToiletPage;
