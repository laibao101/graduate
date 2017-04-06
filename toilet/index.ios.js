import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TabBarIOS,WebView} from 'react-native';

//卫生间组件
import ToiletPage from './ios_views/ToiletPage';
//阅读组件
import Read from './ios_views/Read';
//天气组件
import Weather from './ios_views/Weather';
//设置组件
import Setting from './ios_views/Setting';


export default class toilet extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab : 'toilet'
        }
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title = "卫生间"
                    // incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'toilet'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'toilet'
                        });
                    }}
                >
                    {this._renderView('ToiletPage')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="阅读"
                    // incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'read'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'read'
                        });
                    }}
                >
                    {this._renderView('Read')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="天气"
                    // incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'weather'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'weather'
                        });
                    }}
                >
                    {this._renderView('Weather')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="设置"
                    // incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'setting'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'setting'
                        });
                    }}
                >
                    {this._renderView('Setting')}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }

    _renderView(componentName){
        return (
            // <ToiletPage></ToiletPage>
            <WebView
                style = {{marginTop:-20}}
                source = {{uri:'http://www.jianshu.com/p/f963839fca1a'}}
                startInLoadingState = {true}
                javaScriptEnabled = {true}
            ></WebView>
        );
    }
}


AppRegistry.registerComponent('toilet', () => toilet);
