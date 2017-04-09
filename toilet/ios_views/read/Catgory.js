import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import util from '../util';
import List from './List';

class Catgory extends Component{
	constructor(props){
		super(props);

		this.state = {
			data:props.data
		}
	}

	render(){
		const data = this.state.data;
		const views1 = [];
		const views2 = [];
		for (const i in data) {
			const item = (
				<TouchableOpacity
					style={styles.row_item}
					key={i}
					onPress={this._renderList.bind(this,data[i].text)}
				>
					<View style={styles.item}>
						<Text style={styles.title} >{data[i].text}</Text>
					</View>
				</TouchableOpacity>
			);
			if (i<2) {
				views1.push(item);
			} else {
				views2.push(item);
			}
		}
		return (
			<View style={styles.container}>
				<Text style={styles.text1}>
					分类
				</Text>
				<View style={styles.row}>
					{views1}
				</View>
				<View style={styles.row}>
					{views2}
				</View>
			</View>
		);
	}

	_renderList(title){
		let url = 'http://123.57.39.116:3000/data/read?type=';

		switch (title) {
			case '前端':
				url += 'it';
				break;
			case 'ios':
				url += 'cookies';
				break;
			case '安卓':
				url += 'manager';
				break;
			case '运维':
				url += 'sanwen';
				break;
			default:
				url += 'it';
		}

		this.props.navigator.push({
			component:List,
			title:title,
			passProps:{
				url:url
			}
		});

    }
}

const styles = StyleSheet.create({
	text1:{
        color:'#5e5e5e',
        marginBottom:8,
        fontSize:16
    },
	container:{
		marginLeft:10,
		marginRight:10,
		marginTop:10
	},
	row:{
		flexDirection:'row',
		marginTop:5
	},
	item:{
		height:81,
		width:(util.size.width - 30)/2,
		borderColor:'#f1f1f1',
		borderWidth:util.pixel,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:5,
		flex:1
	},
	row_item:{
		flex:1
	},
	title:{
		color:'#707070',
		fontSize:17,
		fontWeight:'400'
	}
});

export default Catgory;
