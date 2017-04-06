import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, WebView} from 'react-native';


import TWebView form './TWebView';

class ToiletPage extends Component {
    constractor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <TWebView url="http://www.baidu.com/"></TWebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});

export default ToiletPage;
