import React, {Component} from 'react';
import {PixelRatio, Dimensions} from 'react-native';

// 1)ftech
// 2)获取最小线宽
// 3)获取屏幕宽高

export default {
    size : {
        heihgt: Dimensions.get('window').heihgt,
        width: Dimensions.get('window').width
    },

    //10*1 / PixelRatio.get()
    pixel : 1 / PixelRatio.get(),

    //fetch
    get : function(url, successCallback, failCallback) {
        fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
            successCallback(responseJson);
        })
		.catch((error) => {
			failCallback(error);
        });
    }
}
