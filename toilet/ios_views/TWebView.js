import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';

class TWebView extends Component{
	constructor(props){
		super(props);

		this.state = {
			url:this.props.url,
			isError:false
		}
	}

	render(){
		return (
			<View style={styles.container}>
				{
					this.state.isError ?
					<Text style={styles.errorInfo}>网络有问题，请检查网络设置并刷新</Text>
					:
					<WebView
						onError = {this._showError.bind(this)}
						style = {{marginTop:-20}}
						source = {{uri:this.state.url}}
						startInLoadingState = {true}
					></WebView>
				}


			</View>
		);
	}

	_showError(){
		this.setState({
			isError:true
		});
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	errorInfo:{
		marginTop:100,
		justifyContent:'center',
		alignItems:'center'
	}
})

export default TWebView;
