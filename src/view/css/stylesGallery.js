import { StyleSheet } from 'react-native';

export const stylesGallery = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#e4eaf4'
    },
    activityIndicatorView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e4eaf4'
    },
    errorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4eaf4'
    },
    error: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
});