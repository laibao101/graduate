import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';

import util from '../util';

class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
					style={styles.search_input}
                    placeholder="搜索"
					placeholderTextColor = "#666"
				 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search_input:{
		height:30,
		// borderWidth:util.pixel,
		borderWidth:1,
		borderColor:'#EEEEEE',
		fontSize:15,
		borderRadius:3,
        paddingLeft:10
	},
	container:{
		paddingLeft:10,
		paddingRight:10,
		marginTop:20
	}
});

export default Search;
