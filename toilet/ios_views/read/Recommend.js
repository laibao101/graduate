import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

import util from '../util';

class Recommned extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1,styles.title_top]}>
                        热门推荐
                    </Text>
                </View>
                <View style={styles.img_view}>
                    <View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View><View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View><View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                </View>
                <View style={styles.img_view}>
                    <View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View><View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View><View style={styles.img_item}>
                        <Image
                            style={[styles.img,styles.shadow]}
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492223481&di=ebb1e41539de7a5766785957694531b4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1603%2F18%2Fc63%2F19365090_1458313871651_mthumb.jpg'}}
                        ></Image>
                        <Text
                            style={styles.title}
                            numberOfLines={2}
                        >标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</Text>
                    </View>
                </View>
            </View>
        );
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
