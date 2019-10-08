import { StyleSheet } from 'react-native';

export const stylesPhotoCard = StyleSheet.create({
    view: {
        marginTop: 5,
        marginBottom: 5,
        width: '31%',
        height: 290,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 180,
        marginBottom: 10
    },
    textView: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontWeight: 'bold'
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10
    }
});