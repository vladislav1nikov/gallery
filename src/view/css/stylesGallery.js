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
        backgroundColor: '#4385f5'
    },
    activityIndicatorView: {
        flex: 1,
        justifyContent: 'center'
    },
    errorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4385f5'
    },
    error: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
});