import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

import Routes from './Routes';
import store from './store';

const uiTheme = {
  palette: {
    primaryColor: COLOR.blueGrey900,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const App = () => (
  <Provider store={store}>
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <View style={styles.statusBar} />
      <Routes />
    </ThemeContext.Provider>
  </Provider>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

export default App;
