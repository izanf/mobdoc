import React from 'react';
import { View, StyleSheet, Platform, StatusBar  } from 'react-native';
import { Provider } from 'react-redux';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

import Routes from './Routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <View style={styles.statusBar} />
    <Routes />
  </Provider>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: '#1D3062'
  }
});

export default App;
