import * as React from 'react';
import { AppRegistry } from 'react-native';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

import MainNavigator from 'containers/main/TabNavigator';
import { Provider } from 'react-redux';
import { store } from 'store';

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';

const Navigation = createAppContainer(MainNavigator);

const Root = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <Navigation />
    {/* </PersistGate> */}
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
