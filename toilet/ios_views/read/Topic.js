import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';


class Topic extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<View>
                <View>
                    <Text>
                        推荐专题
                    </Text>
                </View>
				<View>
					<View>
						<Image
							source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
							style={styles.img}
						></Image>
					</View>
					<View>
						<Image
							source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491628773036&di=dd6b804192e0dbc8ee48168d5848b3ca&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FndSuuiJWW9kzbECIcGeuWg%3D%3D%2F6632206859746225485.jpg'}}
							style={styles.img}
						></Image>
					</View>
				</View>
				<View>
					<Text>
						查看更多同期专题
					</Text>
				</View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	img:{
		width:
		height:
	}
});

export default Topic;
