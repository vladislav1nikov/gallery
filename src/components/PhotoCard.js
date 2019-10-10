import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { stylesPhotoCard } from '../view/css/stylesPhotoCard.js';

export default class PhotoCard extends Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={stylesPhotoCard.view} >
          <TouchableOpacity onPress={() => navigate('PhotoPage', { link: this.props.link })}> 
              <Image source={{uri: this.props.link}} style={stylesPhotoCard.image} />
              <View style={stylesPhotoCard.textView}>
                  <Text style={stylesPhotoCard.text}><Text style={stylesPhotoCard.textTitle}>Name: </Text>{this.props.name}</Text>
                  <Text style={stylesPhotoCard.text}><Text style={stylesPhotoCard.textTitle}>Author: </Text>{this.props.author}</Text>
              </View>
          </TouchableOpacity>
        </View>
      );
    }
  }