import { AppRegistry } from 'react-native';
import App from './src';
import networkDebug from './src/utils/networkDebug';
import { name as appName } from './app.json';

networkDebug();

AppRegistry.registerComponent(appName, () => App);
