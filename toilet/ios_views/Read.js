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
						<ScrollView style={[styles.container,{paddingTop:10}]}>
							<Topic data={this.state.recommendTopic}></Topic>
							<Hr></Hr>
							<Recommend name="热门推荐" data={this.state.hotTopic}></Recommend>
							<Hr></Hr>
							<Catgory data={this.state.category}></Catgory>
							<Hr></Hr>
							<Recommend name="清新一刻" data={this.state.other}></Recommend>
							<View style={{height:70}}></View>
						</ScrollView>
					:
					null
				}

			</View>
		);
	}

	componentDidMount(){
		let that = this;

		util.get('http://123.57.39.116:3000/data/read?type=config',function(data) {
			if (data.status == 1) {
				const obj = data.data;
				const hotTopic = obj.hotTopic;
				const recommendTopic = obj.recommendTopic;
				const category = obj.category;
				const other = obj.other;
				that.setState({
					isShow:true,
					recommendTopic,
					category,
					other,
					hotTopic
				});
			}else{

			}
		},function(err) {
			alert(err)
		})
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
