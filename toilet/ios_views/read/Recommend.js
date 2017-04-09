import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import util from '../util';
import TWebView from '../TWebView';

class Recommned extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:props.name,
            data:props.data,
            navigator:props.navigator
        }
    }

    render() {
        const data = this.state.data;
        const views1 = [];
        const views2 = [];
        for (const i in data) {
            let item = (
                <TouchableOpacity
                    onPress={this._renderWebPage.bind(this,data[i])}
                    style={styles.img_item}
                    key={i}
                >
                    <Image
                        style={[styles.img,styles.shadow]}
                        source={{uri:data[i].img}}
                    ></Image>
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >{data[i].title}</Text>
                </TouchableOpacity>
            );
            if (i < 4 ) {
                views1.push(item);
            }else{
                views2.push(item);
            }
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1,styles.title_top]}>
                        {this.state.name}
                    </Text>
                </View>
                <View style={styles.img_view}>
                    {views1}
                </View>
                <View style={styles.img_view}>
                    {views2}
                </View>
            </View>
        );
    }

    _renderWebPage(data){
        this.state.navigator.push({
            component:TWebView,
            title:data.title,
            passProps:{
                url:data.url
            }
        });
    }
}

const styles = StyleSheet.create({
    img_view:{
        flexDirection:'row'
    },
    container:{
        // flex:1,
        marginLeft:10,
        marginRight:10
    },
    img_item:{
        flex:1,
        height:160
    },
    img:{
        height:120,
        width: (util.size.width - 40)/4
    },
    shadow:{
        shadowOpacity:1,
        shadowColor:'#ccc',
        shadowOffset:{
            width:1*util.pixel,
            height:util.pixel
        }
    },
    text1:{
        color:'#5e5e5e',
        marginBottom:8,
        fontSize:16
    },
    title_top:{
        marginTop:10
    },
    title:{
        marginTop:4,
        fontSize:13,
        color:'#818181'
    }
});

export default Recommned;
