import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import util from '../util';

class Catgory extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.text1}>
					分类
				</Text>
				<View style={styles.row}>
					<View style={styles.row_item}>
						<View style={styles.item}>
							<Text style={styles.title} >互联网</Text>
						</View>
					</View>
					<View style={styles.row_item}>
						<View style={styles.item}>
							<Text style={styles.title}>散文</Text>
						</View>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.row_item}>
						<View style={styles.item}>
							<Text style={styles.title}>互联网</Text>
						</View>
					</View>
					<View style={styles.row_item}>
						<View style={styles.item}>
							<Text style={styles.title}>散文</Text>
						</View>
					</View>
				</View>
			</View>
		);
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
