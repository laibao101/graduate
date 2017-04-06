import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';

class TWebView extends Component{
	constructor(props){
		super(props);

		this.state = {
			url:this.props.url
		}
	}

	render(){
		return (
			<View>
				<WebView source={{uri:this.state.url}}></WebView>
			</View>
		);
	}
}

export default TWebView;
