import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';


import TWebView from './TWebView';
import util from './util';

console.log(util.size);
console.log(util.pixel);
util.get('http://123.57.39.116:3000/data/read?type=config',function (data) {
    console.log(data);
},function (err) {
    console.log(err);
})

class ToiletPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <TWebView url="http://localhost:3000/nearby.html"></TWebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 60
    },
    container:{
        flex:1
    }
});

export default ToiletPage;
