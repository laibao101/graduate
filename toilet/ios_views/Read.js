import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';

import Catgory from './read/Catgory';
import List from './read/List';
import Recommend from './read/Recommend';
import Search from './read/Search';
import Topic from './read/Topic';

import util from './util';

class Hr extends Component{
	render(){
		return (
			<View>
				<View style={styles.hr}></View>
			</View>
		);
	}
}

class Read extends Component{
	constructor(props){
		super(props);
		this.state = {
			isShow:false
		}
	}

	render(){
		return (
			<View>
				<Search></Search>
				<Hr></Hr>
				{
					this.state.isShow ?
					<ScrollView>
						<Topic></Topic>
						<Recommend></Recommend>
						<Catgory></Catgory>
						<Recommend></Recommend>
					</ScrollView>
					:
					null
				}

			</View>
		);
	}

	componentDidMount(){
		this.setState({
			isShow:true
		});
	}
}

const styles = StyleSheet.create({
	hr:{
		borderColor:'#F0F0F0',
		borderWidth:util.pixel,
		marginTop:10
	}
});

export default Read;
