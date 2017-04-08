import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';

import util form '../util'let name;

class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
					style={styles.search_input}
					placeholderTextColor = "#EEEEEE"
				 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search_input:{
		heihgt:50,
		// borderWidth:util.pixel,
		borderWidth:1,
		borderColor:'#EEEEEE',
		fontSize:15,
		borderRadius:3
	},
	container:{
		paddingLeft:10,
		paddingRight:10,
		marginTop:20
	}
});

export default Search;
