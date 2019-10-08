import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { toJson } from 'unsplash-js/native';
import { Photo } from '../view/javascript/Photo.js';
import { unsplash } from '../config/config.js';
import { PhotoCard } from '../components/PhotoCard.js';
import { stylesGallery } from '../view/css/stylesGallery.js';

export class Gallery extends Component {
    static navigationOptions = {
        title: 'Gallery'
    };
    constructor(props) {
        super(props);
        this.state = {images: null, error: null, isUploaded: false};
    }
    componentDidMount() {
        let images = [];
        unsplash.photos.listPhotos(1, 24)
        .then(toJson)
        .then(
            result => {
                result.map(item => {
                    images.push(new Photo(item.id, item.user.name, item.links.download));
                });
                this.setState({images, isUploaded: true});
            },
            error => this.setState({error: error.message})
        );
    }
    render() {
        if (this.state.isUploaded){
            return (
                <ScrollView>
                    <View style = {stylesGallery.view}>
                    {this.state.images.map(image => {
                        return <PhotoCard name={image.name} author={image.author} link={image.link} navigation={this.props.navigation} />
                    })}
                    </View>
                </ScrollView>
            );
        }
        else if (this.state.error) {
            return(
                <View style={stylesGallery.errorView}>
                    <Text style={stylesGallery.error}>Sorry! {this.state.error}. Try again.</Text>
                </View>
            );
        }
        else {
            return(
                <View style={stylesGallery.activityIndicatorView}>
                    <ActivityIndicator size="large" color="blue"/>
                </View>
            );
        }
    }
}