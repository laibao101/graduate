import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, NavigatorIOS} from 'react-native';

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

class ReadView extends Component{
	constructor(props){
		super(props);
		this.state = {
			isShow:false
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Search></Search>
				<Hr></Hr>
				{
					this.state.isShow ?
						<ScrollView style={styles.container}>
							<Topic></Topic>
							<Hr></Hr>
							<Recommend></Recommend>
							<Hr></Hr>
							<Catgory></Catgory>
							<Hr></Hr>
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


class Read extends Component {
  render() {
    return (
      <NavigatorIOS
		  initialRoute={{
			  component: ReadView,
			  title: '阅读',
			  navigationBarHidden:true
		  }}
        style={{flex: 1}}
      />
    );
  }
}


const styles = StyleSheet.create({
	hr:{
		borderColor:'#F0F0F0',
		borderWidth:util.pixel,
		marginTop:10
	},
	container:{
		flex:1
	}
});

export default Read;
