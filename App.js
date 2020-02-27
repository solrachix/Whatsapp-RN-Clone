import React from 'react';
import {AppRegistry} from 'react-native';

import Routes from './src/routes';
import {name as appName} from './app.json';

export default function App() {
  return (
    <Routes/>
  );
}

console.disableYellowBox = false

AppRegistry.registerComponent(appName, () => App);
