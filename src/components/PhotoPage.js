import React, { Component } from 'react';
import { Image } from 'react-native';

export default class PhotoPage extends Component {
    static navigationOptions = {
        title: 'Photo'
    };
    render() {
        const { navigation } = this.props;
        return (
            <Image source={{uri: navigation.getParam('link', 'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/blue0517.jpg?itok=V3825voJ')}} style={{flex: 1}} />
        );
    }
}