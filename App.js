import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { PhotoPage } from './src/components/PhotoPage.js';
import { Gallery } from './src/components/Gallery.js';

const AppNavigator = createStackNavigator({
  Gallery: {screen: Gallery},
  Page: {screen: PhotoPage}
});

const App = createAppContainer(AppNavigator);

export default App;