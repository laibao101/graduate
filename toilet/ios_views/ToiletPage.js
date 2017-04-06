import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';


import TWebView from './TWebView';

class ToiletPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <TWebView url="http://www.taobao.com/"></TWebView>
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
