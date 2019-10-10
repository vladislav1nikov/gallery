import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PhotoPage from './components/PhotoPage.js';
import Gallery from './components/Gallery.js';

const AppNavigator = createStackNavigator({
    Gallery: { screen: Gallery },
    PhotoPage: { screen: PhotoPage }
});

const Navigation = createAppContainer(AppNavigator);

export default Navigation;