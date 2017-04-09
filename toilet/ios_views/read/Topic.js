import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import util from '../util';
import TWebView from '../TWebView';

class Topic extends Component{
	constructor(props){
		super(props);

		this.state = {
			data:props.data,
			navigator:props.navigator
		}
	}

	render(){
		const views = [];
		const data = this.state.data;
		for (const i in data) {
			views.push(
				<TouchableHighlight style={styles.img_item}
					key={i}
					onPress={this._renderWebPage.bind(this,data[i])}
				>
					<Image
						source={{uri:data[i].img}}
						style={styles.img}
						resizeMode = 'cover'
					></Image>
				</TouchableHighlight>
			);
		}

		return (
			<View style={styles.container}>
                <View>
                    <Text style={styles.text1}>
                        推荐专题
                    </Text>
                </View>
				<View style={styles.img_view}>
					{views}
				</View>
				<View>
					<Text style={styles.text2}>
						查看更多同期专题&gt;&gt;
					</Text>
				</View>
            </View>
		);
	}

	_renderWebPage(data){
		this.state.navigator.push({
			title:data.title,
			component:TWebView,
			passProps:{
				url:data.url
			}
		});
	}
}

const styles = StyleSheet.create({
	img:{
		width: (util.size.width - 30)/2,
		height:75,
		borderRadius:5
	},
	img_view:{
		flexDirection:'row'
	},
	img_item:{
		flex:1
	},
	text1:{
		color:'#5e5e5e',
		fontSize:17,
		marginBottom:5
	},
	text2:{
		color:'#ccc',
		fontSize:15,
		marginTop:6,
		fontWeight:'300'
	},
	container:{
		marginLeft:10,
		marginRight:10
	}
});

export default Topic;
