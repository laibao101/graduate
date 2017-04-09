import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, ActivityIndicator, ScrollView, TouchableOpacity, Image} from 'react-native';

import util from '../util';
import TWebView from '../TWebView';

class List extends Component{
	constructor(props){
		super(props);

		this.state = {
			url:props.url,
			navigator:props.navigator,
			dataSource: [],
			isShow:false
		}
	}

	render(){
		if (!this.state.isShow) {
			return (
				<View style={styles.container}>
					<ActivityIndicator
						size= 'large'
						animating={true}
					></ActivityIndicator>
				</View>
			);
		}

		return (
			<ScrollView style={styles.container}>
				<ListView dataSource={this.state.dataSource}
					enableEmptySections={true}
					renderRow={this._renderRow.bind(this)}/>
			</ScrollView>
		);
	}

	_renderRow(rowData){
		return (
			<TouchableOpacity
				style={[styles.item, styles.row]}
				onPress={this._showDetail.bind(this, rowData.url, rowData.title)}
			>
				<View>
					<Image style={styles.img} source={{uri:rowData.img}} resizeMode="cover"/>
				</View>
				<View style={styles.text}>
					<Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
					<Text style={styles.name}>{rowData.time.split("T")[0]} </Text>
				</View>
			</TouchableOpacity>
		);
	}

	_showDetail(url,title){
		this.state.navigator.push({
			component:TWebView,
			title:title,
			props:{
				url:url
			}
		});
	}

	componentDidMount(){
		const url = this.state.url;
		const that = this;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		util.get(url,function(res) {
			const data = res.data;
			that.setState({
				dataSource:ds.cloneWithRows(data),
				isShow:true
			});
		},function(err) {
			alert(err)
		});
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:65
	},
	item:{
    height:70,
    borderBottomWidth: util.pixel,
    borderBottomColor:'#ccc'
  },
  row:{
    flexDirection: 'row'
  },
  img:{
    height:60,
    width:60,
    marginLeft:10,
    marginTop:5,
    borderWidth:util.pixel,
    borderRadius:3,
    borderColor:'#fff'
  },
  text:{
    marginLeft:7
  },
  title:{
    fontSize:16,
    marginTop:10,
    width:util.size.width -80
  },
  name:{
    fontSize:14,
    color: '#ccc',
    marginTop:10
  }
});

export default List;
