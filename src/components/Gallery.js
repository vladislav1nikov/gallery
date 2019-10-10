import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import PhotoCard from '../components/PhotoCard.js';
import { stylesGallery } from '../view/css/stylesGallery.js';
import { getImages } from '../actions/actions.js';

class Gallery extends Component {
    static navigationOptions = {
        title: 'Gallery'
    };
    componentDidMount() {
        this.props.getImages(1, 24);
    }
    render() {
        if (this.props.isLoading){
            return(
                <View style={stylesGallery.activityIndicatorView}>
                    <ActivityIndicator size="large" color="blue"/>
                </View>
            );
        }
        else if (this.props.images) {
            return (
                <ScrollView>
                    <View style = {stylesGallery.view}>
                    {this.props.images.map(image => {
                        return <PhotoCard name={image.name} author={image.author} link={image.link} navigation={this.props.navigation} />
                    })}
                    </View>
                </ScrollView>
            );
        }
        else {
            return(
                <View style={stylesGallery.errorView}>
                    <Text style={stylesGallery.error}>Sorry! An error had occured. Try again.</Text>
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        images: state.images,
        isError: state.isError,
        isLoading: state.isLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: (page, per_page) => dispatch(getImages(page, per_page))
    };
};
   
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);