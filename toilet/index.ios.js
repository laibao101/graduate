import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TabBarIOS} from 'react-native';

export default class toilet extends Component {
    constractor(props){
        super(props);

        this.state = {
            selectedTab = 'toilet'
        }
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title = "卫生间"
                    incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'toilet'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'toilet'
                        });
                    }}
                >
                    {this._renderContent()}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="阅读"
                    incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'read'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'read'
                        });
                    }}
                >
                    {this._renderContent()}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="天气"
                    incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'weather'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'weather'
                        });
                    }}
                >
                    {this._renderContent()}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="设置"
                    incon = {{uri:,scale:4.6}}
                    selected = {this.state.selectedTab === 'setting'}
                    onPress={()=>{
                        this.setState({
                            selectedTab:'setting'
                        });
                    }}
                >
                    {this._renderContent()}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }

    _renderContent(){

    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('toilet', () => toilet);
