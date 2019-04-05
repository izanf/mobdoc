import { AppRegistry } from 'react-native';
import App from './src';
import networkDebug from './src/utils/networkDebug';
import { name as appName } from './app.json';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

networkDebug();

AppRegistry.registerComponent(appName, () => App);
