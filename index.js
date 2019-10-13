/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Store from './src/store';

AppRegistry.registerComponent(appName, () => App);
